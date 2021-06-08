import React from "react"
import './App.css';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"


function App() {
  return (
    
    <Router>
      <NavBar/>
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={AboutUs} />
   </Switch>

   <Footer/>
   
    </Router>
  );
}

export default App;
