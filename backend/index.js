// requier
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const student = require("./module/student");
const teacher = require("./module/teacher");
const notice = require('./module/notice')

const app = express();
app.use(express.json());
app.use(cors());
console.log("................................");

// running server
app.listen(8000, () => {
  console.log("server is running in port " + process.env.PORT);
});

// connect mongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoDB is connected");
  } catch (error) {
    console.log("mongoDB is not connect, error : ", error);
  }
};
connect();

// create a get route
app.get("/", (req, res) => {
  res.send("hello");
});

// post route
// student post route
app.post("/student", async (req, res) => {
  // destracture std data data
  const {
    name,
    roll,
    technology,
    fName,
    mName,
    address,
    dateOfBirth,
    number,
    secendNuber,
    guardian,
    section,
  } = await req.body;
  const newStudent = new student({
    name,
    roll,
    technology,
    fName,
    mName,
    address,
    dateOfBirth,
    number,
    secendNuber,
    guardian,
    section,
  });

  newStudent.save();

  return res.send("New Suedent added successfully");
});

// teacher post route
app.post("/teacher", async (req, res) => {
  // destracture data
  const { name, technology, designation, address, number, secendNuber } =
    await req.body;

  const newTeacher = new teacher({
    name,
    technology,
    designation,
    address,
    number,
    secendNuber,
  });

  newTeacher.save();
  return res.send("Teacher Added Successfully");
});

// notice post route 
app.post('/notice',async(req,res)=>{
  const {description} = await req.body
  console.log(description);
  const newNotic = new notice({
    description
  })
  newNotic.save()
  return(
    res.send('notice added successfull')
  )
})
