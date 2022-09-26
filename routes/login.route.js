const express = require("express");
const router = express.Router();
const joi = require("joi");

const { user } = require("../db/schema");

const validatedLogin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
});

router.post("/", async (req, res) => {
  const { error, value } = validatedLogin.validate(req.body);
  if (error) {
    console.log(error);
    res.send(error);
  }
  const { email, password } = value;
  const validatedUser = await user.findOne({ email: email });
  if (validatedUser) {
    if (password == validatedUser.password) {
      res.send({ message: "user logged succesfully" });
    } else {
      res.send({ message: "wrong password" });
    }
  } else {
    res.send({ message: "user does not exist" });
  }
});

module.exports = router;
