const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('./db/database')

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
 
app.use("/task", require('./routes/task.route'));
app.use("/register", require('./routes/user.route'));

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})