const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

const mongoose = require('./db/database')

app.use(cors());
app.use(express.json());

const PORT = 4000
 
app.use("/task", require('./routes/task.route'))

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})