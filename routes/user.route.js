const express = require("express");
const router = express.Router();

const { user } = require("../db/schema");

router.get('/', async (req, res)=>{
  const users = await user.find();
  res.send(users)
})

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const userDone = await user.findOne({ email: email });
  const USER = new user({ name, email, password });
  if (userDone) {
    res.send({ message: "alredy existing user" });
  } else {
    await USER.save();
    res.send({ message: "usuario registrado" });
  }
});

module.exports = router;
