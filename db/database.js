const mongoose = require('mongoose');

const TASK = new mongoose.Schema({
  title: String,
  description: String,
  done: Boolean
})

const task = mongoose.model('Task', TASK);

const aTask = new task({
  title: "my first task",
  description: "this is my first task just to test this",
  done: true
})

mongoose.connect('mongodb://localhost:27017/test')
.then(res=>console.log('Database coneccted'))
.then(()=>console.log(aTask))
.catch(err=>console.log(err))

