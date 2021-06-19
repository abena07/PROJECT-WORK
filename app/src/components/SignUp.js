import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import LogIn from "./LogIn"
import img from "../image/ug.jpg"
import axios from "axios";

function SignUp(){
   let history = useHistory();
    const [studentID, setStudentID] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpswd, setConfirmpswd] = useState("");
    const [signedin, setSignedin] = useState(false);

  
    const handleStudentIdInput = (event) => {
      setStudentID(event.target.value);
    };
  
    const handleEmailInput = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordInput = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmpswdInput = (event) => {
      setConfirmpswd(event.target.value);
    };
  
    const handleSignup = (event) => {
      event.preventDefault();
      const newStudent = {
        studentID: studentID,
        email: email,
        password: password,
        confirmpswd: confirmpswd
      };

      console.log(newStudent);
      console.log("try again");
      axios
        .post("http://localhost:7000/signup", newStudent)
  
        .then((res) => {
          console.log("success");
          if (res.status === 200) {
            localStorage.setItem("signedIn", true);
            history.push("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
     
    }

    const handleSignedout = (event) => {
        setSignedin(false);
      };

      return (
        <>
          {signedin ? (
            <>
              <LogIn/>

              <div className="form-group">
              <button onClick={handleSignedout}>Sign Out </button>
              </div>
              
            </>
          ) : (
            <div className="login-page">
            <form onSubmit={handleSignup}>
             
                <h2>Sign Up</h2>
    
               
    
             
    
                <div className="form-group">
                  <label>Student Id</label>
                  <input
                    type="name"
                    value={studentID}
                    onChange={handleStudentIdInput}
                    placeholder=" Student Id"
                  ></input>
                </div>
    
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailInput}
                    placeholder ="example@gmail.com"
                  ></input>
                </div>
    
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordInput}
                    placeholder="password"
                  ></input>
                </div>
    
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmpswd}
                    onChange={handleConfirmpswdInput}
                    placeholder ="confirm password"
                  ></input>
                </div>
    
                <div className="form-group">
                  <button type="submit">Sign Up</button>
                </div>
              
            </form>
            </div>
          )}
          
       
        </>
      );

}
 export default SignUp;