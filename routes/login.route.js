const express = require("express");
const router = express.Router();

const { user } = require("../db/schema");

router.post('/', async (req, res)=>{
    const { email, password} = req.body;
    const validatedUser = await user.findOne({email: email});
    if(validatedUser){
      if(password==validatedUser.password){
      res.send({message: 'user logged succesfully'}) }
      else{
        res.send({message: 'wrong password'})
      }
    } else{
      res.send({message: 'user does not exist'})
    }
  
    
})

module.exports= router;
