//importando librerias
const express = require("express");
const router = express.Router();
const joi = require("joi");
const bcrypt = require("bcrypt");

//importando esquema
const { user } = require("../db/schema");

//requerimientos de los datos insertados en el login
const validatedLogin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

//logeo
router.post("/", async (req, res) => {
  //validando los requerimientos
  const { error, value } = validatedLogin.validate(req.body);
  //si hay error
  if (error) {
    console.log(error);
    res.send(error);
  }
  //si no hay error
  const { email, password } = value;
  //comprobando que el usuario exista
  const validatedUser = await user.findOne({ email: email });
  if (validatedUser) {
    //si existe se compara la contraseña encriptada con la contraseña que se ingresa en el login
    const comparedPassword = bcrypt.compareSync(
      password,
      validatedUser.password
    );
    if (comparedPassword) {
      res.send({ message: "user logged succesfully" });
    } else {
      res.send({ message: "wrong password" });
    }
  }
  //si el usuario no existe
  else {
    res.send({ message: "user does not exist" });
  }
});

module.exports = router;
