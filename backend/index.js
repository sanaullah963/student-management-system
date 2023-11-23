// requier
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const mongoDB = require("mongodb");
const cors = require("cors");
const student = require("./module/student");
const teacher = require("./module/teacher");
const notice = require("./module/notice");

const app = express();
app.use(express.json());
app.use(cors());
console.log("................................");

// root route
app.get("/", (req, res) => {
  res.send("hello");
});

// running server
app.listen(8000, () =>
  console.log("server is running in port " + process.env.PORT)
);

// connect mongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoDB is connected");
  } catch (error) {
    console.log("mongoDB connetn error : ", error);
  }
};
connect();

// student get route
app.get("/students", async (req, res) => {
  try {
    const students = await student.find();
    res.send(students);
  } catch (error) {
    console.log("get mongoDB data to student route error : ", error);
  }
});
//teachers get route
app.get("/teachers", async (req, res) => {
  try {
    const teachers = await teacher.find();
    res.send(teachers);
  } catch (error) {
    console.log("get mongoDB data to teachers route error : ", error);
  }
});
// notices get route
app.get("/notices", async (req, res) => {
  try {
    const notices = await notice.find();
    res.send(notices);
  } catch (error) {
    console.log("get mongoDB data to notices route error : ", error);
  }
});

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
app.post("/notice", async (req, res) => {
  const { description, headline } = await req.body;
  const newNotic = new notice({
    headline,
    description,
  });
  newNotic.save();
  return res.send("notice added successfull");
});
