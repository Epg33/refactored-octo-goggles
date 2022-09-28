//importando express
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

//importando el esquema
const { task } = require("../db/schema");

//consultando todasd las tareas del usuario
router.get("/:userid", async (req, res) => {
  try{
  const token= jwt.verify(req.body.token, process.env.SECRET)
  if(token){
      //traer las tareas
  const homeWork = await task.find({ user: req.params.userid });
  res.send(homeWork);
  }
  else{
    res.send({message: "invalid token"})
  }
  }
  catch(err){
    res.send(err)
    console.log(err);
  }
});

//consultando una tarea especifica del usuario
router.get("/:userid/:id", async (req, res) => {
  const id = req.params.id;
  //traer la tarea especifica
  const homeWork = await task.findOne({ user: req.params.userid, id: id });
  //comprobando si existe la tarea
  if (homeWork) {
    res.send(homeWork);
  } else {
    res.send({ message: "task does not exist" });
  }
  // console.log("la tarea");
});

//creacion de una tarea
router.post("/:userid", async (req, res) => {
  //desestructurando los campos de la peticion
  const { title, description, done } = req.body;
  //tomando el id del usuario
  const user = req.params.userid;
  //creando la nueva tarea
  const Task = new task({ user, title, description, done });
  try {
    //verificando el token
    const token = jwt.verify(req.body.token, process.env.SECRET);
    if (token) {
      //guardando la tarea
      await Task.save();
      res.send({ status: "ok" });
      // console.log("task saved");
    } else {
      res.send({ message: "invalid token" });
    }
  } catch (err) {
    console.log(err);
  }
});

//actualizacion una tarea
router.put("/:userid/:id", async (req, res) => {
  const { title, description, done } = req.body;
  //creando la tarea actualizada
  const TASK = { title, description, done };
  const user = req.params.userid;
  //encontrar la tarea especifica y actualizarla
  await task.findOneAndUpdate({ user: user, id: req.params.id }, TASK);
  console.log("todo bien");
  res.send({ status: "ok" });
});

//elimincacion de una tarea
router.delete("/:userid/:id", async (req, res) => {
  const user = req.params.userid;
  //encontrando la tarea especifica y borrandola
  await task.findOneAndDelete({ user: user, id: req.params.id });
  res.send({ status: "ok" });
  console.log("oh shit bro");
});

module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzM1ZThkNjFkMWRiODU0Y2U0ODllOCIsImVtYWlsIjoiYWxlQGdtYWlsLmNvbSIsImlhdCI6MTY2NDM5ODU0MH0.CgRKPDTwDMXwc46CmakbrW5kVAdcLSc5-Ga-XLhq0e0
//
