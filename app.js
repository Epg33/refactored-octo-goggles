const express = require('express');
const app = express();
const path = require('path')

const mongoose = require('./db/database')

const PORT = 4000

app.use( "/",express.static(path.join( __dirname,'/client')))

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})