const express = require('express');
const router = express.Router();

const {user} = require('../db/schema')

router.post('/', async (req, res)=>{
  const {name, email, password} = req.body;
  const USER = new user({name, email, password});
  await USER.save();
  res.send({message: 'usuario registrado'})
})

module.exports=router;