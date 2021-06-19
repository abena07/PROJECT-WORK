import React, {useState} from "react";
import Home from "./Home"
import {useHistory} from "react-router-dom"
import axios from "axios"
import img from "../image/ug.jpg"

function LogIn(){
  let history = useHistory()
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
      event.preventDefault();
      axios.post("http://localhost:7000/login",{
        studentID :studentID,
        password:password,
      }).then((res)=>{
        if(res.status === 200){
          localStorage.setItem("abenaDelivery@loggedIn", true);
          history.push("/home")
        }
      }).catch((err)=>{
        console.log(err)
      })
        
      
    }
  

      const handleLoggedout = (event) => {
        setLoggedIn(false);
      };

      return (
        <>
          {loggedIn ? (
            <>
              <Home/>
              <button onClick={handleLoggedout}>Log Out </button>
            </>
          ) : (
            <div className="login-page">
            <form onSubmit={handleLoggedIn}>
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
                  <button type ="submit">Log In</button>
                </div>
            </form>
            </div>
          )}
                    {/* <img src ={img}  className ="center" alt ="ug"></img> */}

        </>
      );
}

export default LogIn;