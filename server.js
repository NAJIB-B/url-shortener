const mongoose = require("mongoose");

require("dotenv").config();

const app = require("./app");

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database connected successfully"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
