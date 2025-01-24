const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/Employee.model');
require('dotenv').config();

const app = express();
const PORT=process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const employeeRoute = require('./routes/Employee.route');
const adminRoute = require('./routes/Admin.route');

app.use('/Employee', employeeRoute);
app.use('/Admin', adminRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
    console.log('Database is connected');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });


app.get('/', (req, res) => {
    res.send('hello form coderhouse')
});




