import React, {useState} from "react";
import Home from "./Home"
import img from "../image/ug.jpg"

function LogIn(){

    const [studentID, setStudentID] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleStudentIdInput = (event) => {
      setStudentID(event.target.value);
    };
  
  
    const handlePasswordInput = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLoggedIn = (event) => {
      if (studentID ==="10821976" && password === "0123")
        setLoggedIn(true);
      
    }
  

      const handleLoggedout = (event) => {
        setLoggedIn(false);
      };

      return (
        <div>
          {loggedIn ? (
            <>
              <Home/>
              <button onClick={handleLoggedout}>Log Out </button>
            </>
          ) : (
            <form>
              
              <div className="form-inner">
                <h2>Log In</h2>
    
                <div className="form-group">
                  <label>Student Id</label>
                  <input
                    type="name"
                    value={studentID}
                    onChange={handleStudentIdInput}
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
                  <button onClick={handleLoggedIn}>Log In</button>
                </div>
              </div>
            </form>
          )}
                    <img src ={img}  className ="center" alt ="ug"></img>

        </div>
      );
}

export default LogIn;