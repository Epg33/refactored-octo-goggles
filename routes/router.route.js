const express = require("express");
const router = express.Router();

const Task = require("../db/schemas");

router.get("/", async (req, res) => {
  const homeWork = await Task.find();
  res.send(homeWork);
  // console.log("tareas");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const homeWork = await Task.findById(id);
  res.send(homeWork);
  // console.log("la tarea");
});

router.post("/", (req, res) => {
  const { title, description, done } = req.body;
  const TASK = new Task({ title, description, done });
  try {
    TASK.save();
    res.json({ status: "ok" });
    console.log("task saved");
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  const {title, description, done} = req.body;
  const TASK = {title, description, done};
  await Task.findByIdAndUpdate(req.params.id, TASK);
  console.log('todo bien')
  res.send({status: 'ok'})
});

router.delete('/:id', async (req, res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.send({status: "ok"})
  console.log('oh shit bro')
});

module.exports = router;
