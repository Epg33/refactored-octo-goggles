//importacion de librerias
const express = require("express");
const router = express.Router();
const joi = require("joi");
const bcrypt = require("bcrypt");

//importacion del esquema
const { user } = require("../db/schema");

//consultar los usuarios registrados
router.get("/", async (req, res) => {
  const users = await user.find();
  res.send(users);
});

//requerimientos a cumplir en el registrto del usuario
const validateRegister = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

//registro de usuario
router.post("/", async (req, res) => {
  //validacion de los requrimientos
  const { error, value } = validateRegister.validate(req.body);
  if (error) {
    console.log(error);
    res.send(error);
  }
  //comprobacion de que el usuario que se intenta registrar no existe
  const { name, email, password } = value;
  const userDone = await user.findOne({ email: email });

  try {
    //si ya existe
    if (userDone) {
      res.status(409).send({ message: "alredy existing user" });
    } else {
      //sino exixste
      //se encripta la contraseña
      let encyptedPassword = bcrypt.hashSync(password, 5);
      //se crea el usuario
      const USER = new user({ name, email, password: encyptedPassword });
      //se guarda el usuario
      await USER.save();
      res.send({ message: "usuario registrado" });
      console.log(USER);
    }
  } catch (err) {
    res.send({ error: err });
    console.log(err);
  }
});

//actualizar los datos del usuario
router.put("/:id", async (req, res) => {
  const { name, email, password } = req.body;
  const USER = { name, email, password };
  await user.findByIdAndUpdate(req.params.id, USER);
  console.log("User updated succesfully");
  res.send({ message: "ok" });
});

module.exports = router;
