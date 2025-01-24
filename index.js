const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/Employee.model');
require('dotenv').config();
const serverless = require('serverless-http');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const employeeRoute = require('./routes/Employee.route');
const adminRoute = require('./routes/Admin.route');

app.use('/Employee', employeeRoute);
app.use('/Admin', adminRoute);

let isConnected;


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    isConnected=true;
    console.log('Database is connected');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });


if (isConnected) {
    console.log('Using existing database connection');
  } else {
    mongoose.connect(process.env.MONGODB_URI);
}

app.get('/', (req, res) => {
  res.send('Hello from CoderHouse');
});

// Export the app for serverless deployment

module.exports = serverless(app);
