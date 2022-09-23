const mongoose = require('mongoose');

const TASK = new mongoose.Schema({
  title: String,
  description: String,
  done: Boolean
})

const task = mongoose.model('Task', TASK);

const USER = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const user = mongoose.model('User', USER);

const LOGED = mongoose.Schema({
  
})


module.exports={task, user};