const {Schema, model} = require('mongoose');

const TASK = new Schema({
  user: {type: Schema.ObjectId, ref: 'USER'},
  title: String,
  description: String,
  done: Boolean
})

const task = model('Task', TASK);

const USER = new Schema({
  name: String,
  email: String,
  password: String
})

const user = model('User', USER);

const LOGED = Schema({
  
})


module.exports={task, user};