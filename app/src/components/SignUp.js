import React, {useState} from "react";
import LogIn from "./LogIn"
import img from "../image/ug.jpg"
// import axios from axios;

function SignUp(){
    
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
  
    const handleSignedin = (event) => {
      if (email === "abenabennett@gmail.com" && password === "0123" && confirmpswd==="0123" && studentID ==="10821976")
        setSignedin(true);
     
    }

    const handleSignedout = (event) => {
        setSignedin(false);
      };

      return (
        <div>
          {signedin ? (
            <>
              <LogIn/>

              <div className="form-group">
              <button onClick={handleSignedout}>Sign Out </button>
              </div>
              
            </>
          ) : (
            <form>
              <div className="form-inner">
                <h2>Sign Up</h2>
    
               
    
             
    
                <div className="form-group">
                  <label>Student Id</label>
                  <input
                    type="name"
                    value={studentID}
                    onChange={handleStudentIdInput}
                  ></input>
                </div>
    
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailInput}
                  ></input>
                </div>
    
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordInput}
                  ></input>
                </div>
    
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmpswd}
                    onChange={handleConfirmpswdInput}
                  ></input>
                </div>
    
                <div className="form-group">
                  <button onClick={handleSignedin}>Sign Up</button>
                </div>
              </div>
            </form>

          )}
          
          <img src ={img}  className ="center" alt ="ug" width="500" height="535"></img>
        </div>
      );

}
 export default SignUp;