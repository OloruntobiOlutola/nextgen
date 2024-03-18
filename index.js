// Imports
const express = require("express");
const User = require("./models/user");

// configurations
const app = express();
app.use(express.json());

// routes
app.get("/api", async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    data: [...users],
  });
});

app.get("/api/:userId", async (req, res, next) => {
  const user = await User.findById(req.params.userId);
  res.status(200).json({
    data: user,
  });
});

app.patch("/api/:userId", async (req, res, next) => {
  const { body } = req;
  const user = await User.findByIdAndUpdate(req.params.userId, body, {
    new: true,
  });
  res.status(200).json({
    data: user,
  });
});

app.delete("/api/:userId", async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.userId);
  res.status(204).json({
    data: user,
    message: "User Deleted",
  });
});

app.post("/api", async (req, res, next) => {
  const { body } = req;
  await User.create(body);
  res.status(201).json({
    message: "Post request",
  });
});

app.use("*", (req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
});

module.exports = app;

// CRUD
// C -- Create
// R -- Read
// U -- Update
// D -- Delete
