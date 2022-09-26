const { Schema, model } = require("mongoose");

const TASK = new Schema({
  user: { type: Schema.ObjectId, ref: "USER", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, required: true },
});

const task = model("Task", TASK);

const USER = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const user = model("User", USER);

module.exports = { task, user };
