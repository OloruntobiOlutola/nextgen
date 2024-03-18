const { mongoose } = require("mongoose");
const app = require("./index");

const port = 3000;

const connectionString =
  "mongodb+srv://oolutola:password1234@cluster.mnki9sz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("database connection established");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
