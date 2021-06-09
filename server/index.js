
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const studentRouter = require("./controllers/student");
const config = require("./helpers/config");
const cors = require("cors");
// const authenticateStudent = require("./middleware/auth")

app.use(cors());
app.use(express.json());

// our middle is authenticateUser
// app.use(authenticateStudent)

mongoose
  .connect(config.MONGODB_URI, config.MONGOOSE_OPTIONS, {
    socketTimeoutMS: 60000,
    keepAlive: true,
    reconnectTries: 1000,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log("Some problem occurred", err);
  });

app.use(studentRouter);

// Middlewares
/**
 * access to request, response, next
 * can modify them
 *
 * Task
 * request.isAuthenticated
 * request.user
 *
 * request.body
 *
 * Auth middleware: What will it do?
 * 1. Get the token from the cookie header
 * 2. Decrypt the token
 * 3. Find from the db if user exist
 * 4. If user exist, then add isAuthenticated and user key to the request object:==> request.isAuthenticated = true request.user = user
 * 5. if user does not exist, set isAuthenticated key to be false and user to be null:==> request.isAuthenticated = false,  request.user = null
 */

app.listen(config.PORT, () =>
  console.log(`Express app is working on PORT: ${config.PORT}`)
);

// PORT=7000