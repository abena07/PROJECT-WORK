import React, {useState} from "react";

function LogIn(){

    const [studentID, setStudentID] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleStudentIdInput = (event) => {
      setStudentID(event.target.value);
    };
  
    const handleEmailInput = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordInput = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLoggedIn = (event) => {
      event.preventDefault();
    }

      const handleLoggedout = (event) => {
        setLoggedIn(true);
      };

      return (
        <div>
          {loggedIn ? (
            <>
              {/* <Booking /> */}
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
                  <button onClick={handleLoggedIn}>Log In</button>
                </div>
              </div>
            </form>
          )}
        </div>
      );
}

export default LogIn;