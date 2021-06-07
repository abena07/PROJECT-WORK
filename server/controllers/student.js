  
const Student = require("../models/student");
const studentRouter = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../helpers/config");

//to register a student
studentRouter.post("/signup", function (request, response) {
  const studentID = request.body.studentID;
  const password = request.body.password;
  const email = request.body.email;
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const confirmpswd = request.body.confirmpswd;

  const newStudent = new Student({
    firstname: firstname,
    lastname: lastname,
    studentID: studentID,
    email: email,
    password: password,
    confirmpswd: confirmpswd,
  });

  newStudent.save(function (err, savedStudent) {
    if (err) {
      console.log(err);
      return response.status(500).send();
    }
    console.log(savedStudent);
    return response.status(200).send();
  });
});



/// to log a student in
studentRouter.post("/login", function (request, response, next) {
  console.log("loggin in");
  const studentID = request.body.studentID;
  const password = request.body.password;
  const email = request.body.email;

  Student.findOne(
    { studentID: studentID, password: password, email: email },
    function (err, student) {
      if (err) {
        console.log(err);
        return response.staus(500).send();
      }
      if (!student) {
        return response.status(404).send();
      }

      return response.status(200).send("good");
    }
  );
});




module.exports = studentRouter