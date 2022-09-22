const mongoose = require('mongoose');

const TASK = new mongoose.Schema({
  title: String,
  description: String,
  done: Boolean
})

const task = mongoose.model('Task', TASK);

module.exports=task;