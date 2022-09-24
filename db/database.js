const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost:27017/test")
  .then(() => console.log("Database coneccted"))
  .catch((err) => console.log(err));

module.exports=mongoose;
