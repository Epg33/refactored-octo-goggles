const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database coneccted"))
  .catch((err) => console.log(err));

module.exports = mongoose;
