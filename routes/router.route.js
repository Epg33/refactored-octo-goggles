const express = require("express");
const router = express.Router();

const Task = require("../db/schemas");

router.get('/', async (req, res)=>{
  const homeWork = await Task.find();
  res.send(homeWork);
  // console.log("tareas");
})

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

module.exports = router;
