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
const achieverRoute = require('./routes/Achiever.route');
const ambassdorRoute = require('./routes/Ambassador.route');
const companyRoute = require('./routes/Company.route');
const galleryRoute = require('./routes/Gallery.route');
const hourlyProgramRoute = require('./routes/HourlyProgram.route');
const mentorRoute = require('./routes/Mentor.route');
const momentsRoute = require('./routes/Moments.route');
const reviewRoute = require('./routes/Review.route');
const roadMapRoute = require('./routes/RoadMap.route');
const formRoute = require('./routes/Form.route');

app.use('/Employee', employeeRoute);
app.use('/Admin', adminRoute);
app.use('/Acheiver', achieverRoute);
app.use('/Ambassador', ambassdorRoute);
app.use('/Company', companyRoute);
app.use('/Gallery', galleryRoute);
app.use('/HourlyProgram', hourlyProgramRoute);
app.use('/Mentor', mentorRoute);
app.use('/Moments', momentsRoute);
app.use('/Review', reviewRoute);
app.use('/RoadMap', roadMapRoute);
app.use('/Form', formRoute);



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




