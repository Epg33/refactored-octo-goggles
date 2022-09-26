const express = require("express");
const router = express.Router();

const {task} = require("../db/schema");

router.get("/:userid", async (req, res) => {
  const homeWork = await task.find({user: req.params.userid});
  res.send(homeWork);
  // console.log("tareas");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const homeWork = await task.findById(id);
  res.send(homeWork);
  // console.log("la tarea");
});

router.post("/:userid", async (req, res) => {
  const { title, description, done } = req.body;
  const user = req.params.userid;
  const Task = new task({ user, title, description, done });
  await Task.save();
  res.json({ status: "ok" });
  // console.log("task saved");
});

router.put("/:id", async (req, res) => {
  const {title, description, done} = req.body;
  const TASK = {title, description, done};
  await task.findByIdAndUpdate(req.params.id, TASK);
  console.log('todo bien')
  res.send({status: 'ok'})
});

router.delete('/:id', async (req, res)=>{
  await task.findByIdAndDelete(req.params.id);
  res.send({status: "ok"})
  console.log('oh shit bro')
});

module.exports = router;