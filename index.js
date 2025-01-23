const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/Employee.model');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const employeeRoute = require('./routes/Employee.route');
const adminRoute = require('./routes/Admin.route');

app.use('/Employee', employeeRoute);
app.use('/Admin', adminRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Database is connected');
  })
  .catch((err) => {
    console.error(err);
  });

app.get('/', (req, res) => {
  res.send('Hello from CoderHouse');
});

// Export the app wrapped with serverless-http
const serverless = require('serverless-http');
module.exports = serverless(app);
