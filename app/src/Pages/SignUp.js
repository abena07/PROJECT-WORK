import React, {useState} from "react";
import LogIn from "./LogIn"
// import axios from axios;

function SignUp(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [studentID, setStudentID] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpswd, setConfirmpswd] = useState("");
    const [signedin, setSignedin] = useState(false);
  
    const handleFirstnameInput = (event) => {
      setFirstname(event.target.value);
    };
  
    const handleLastnameInput = (event) => {
      setLastname(event.target.value);
    };
  
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
      event.preventDefault();
    }

    const handleSignedout = (event) => {
        setSignedin(true);
      };

      return (
        <div>
          {signedin ? (
            <>
              <LogIn />
              <button onClick={handleSignedout}>Sign Out </button>
            </>
          ) : (
            <form>
              <div className="form-inner">
                <h2>Sign Up</h2>
    
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="name"
                    value={firstname}
                    onChange={handleFirstnameInput}
                  ></input>
                </div>
    
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="name"
                    value={lastname}
                    onChange={handleLastnameInput}
                  ></input>
                </div>
    
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
        </div>
      );

}
 export default SignUp;