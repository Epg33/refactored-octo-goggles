const express = require("express");
const router = express.Router();
const joi = require('joi')

const { user } = require("../db/schema");

const validateRegister = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).required()
})

router.get("/", async (req, res) => {
  const users = await user.find();
  res.send(users);
});

router.post("/", async (req, res) => {
  const {error, value } = validateRegister.validate(req.body);
  if(error){
    console.log(error);
    res.send(error)
  }
  const { name, email, password } = value;
  const userDone = await user.findOne({ email: email });
  const USER = new user({ name, email, password });
  try {
    if (userDone) {
      res.send({ message: "alredy existing user" });
    } else {
      await USER.save();
      res.send({ message: "usuario registrado" });
    }
  } catch (err) {
    res.send({ error: err });
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  const { name, email, password } = req.body;
  const USER = { name, email, password };
  await user.findByIdAndUpdate(req.params.id, USER);
  console.log("User updated succesfully");
  res.send({ message: "ok" });
});

module.exports = router;
