const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
  
  
  studentID: {
    type: Number,
    required: true,
  },

 
  password: {
    type: String,
    required: true,
  },

  confirmpswd: {
    type: String,
    required: true,
  },

  // lastLogin:{
  //     type:Date

  // },

  // active:{}
});

/// Query user: _id: 9485840ajkdsjkasdf
/// id
// __v
// password

studentSchema.set("toJSON", {
  transform: (doc, student) => {
    student.id = student._id.toString();
    delete student._id;
    delete student.__v;
    delete student.password;
  },
});

// Hash password before saving
studentSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
 })


// Adding comparePassword method to the schema
studentSchema.statics.login = async function(email, password) {
const student = await this.findOne({ email })
if(student){
  const auth = await bcrypt.compare(password, student.password)
  if(auth) {
  return student
  } 
  throw new Error('incorrect password')
}

throw Error('that email is not registered')
}
 

module.exports = mongoose.model("Student", studentSchema);