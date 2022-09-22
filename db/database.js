const mongoose = require("mongoose");

// const aTask = new task({
//   title: "my first task",
//   description: "this is my first task just to test this",
//   done: true
// })

mongoose.connect("mongodb://localhost:27017/test")
  .then(() => console.log("Database coneccted"))
  .catch((err) => console.log(err));

module.exports=mongoose;
