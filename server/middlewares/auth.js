const jwt = require("jsonwebtoken");
const config = require("../helpers/config");
const Student = require("../models/student");
/**
 * Returns the authentication token from the cookie header
 */
const getAuthToken = (request) => {
  const cookie = request.headers.cookie; // Get the cookie
  if (!cookie) {
    return null;
  }

  const authItem = cookie
    .split("; ")
    .find((item) => item.startswith("Authorization"));

  const token = authItem.split("Authorization=Bearer%20")[1];

  if (!token) {
    return null;
  }

  return token;
};

const authenticateStudent = (request, response, next) => {
  const token = getAuthToken(request);

  let valid;

  try {
    valid = jwt.verify(token, config.JWT_SECRET);
  } catch (exception) {
    valid = false;
  }

  if (!valid) {
    request.isAuthenticated = false;
    request.student = null;
    next();
  }

  // Now token is valid so let's get user from db
  // {email: "", studentID: ""}

  Student.findOne(
    { email: valid.email, studentID: valid.studentID },
    (error, student) => {
      if (error) {
        request.isAuthenticated = false;
        request.student = null;
        next();
      }

      if (!student) {
        request.isAuthenticated = false;
        request.student = null;
        next();
      }

      request.student = student;
      request.isAuthenticated = true;
    }
  );
};

module.exports = authenticateStudent;