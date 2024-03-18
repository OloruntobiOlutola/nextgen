const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  role: String,
});

const User = model("User", userSchema);

module.exports = User;
