const express = require('express');
const app = express();
const path = require('path')

const PORT = 4000

app.use( "/",express.static(path.join( __dirname,'/public')))


// app.get("/", (req, res)=>{
//   res.send("hello world")
// })

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})