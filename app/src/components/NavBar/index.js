import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink  to ="/home"> 
          <h1>UG Delivery App</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to ="/home">Home</NavLink>
          <NavLink  to ="/about" >About us</NavLink>
          <NavLink to = "/delivery">Delivery</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Log In</NavBtnLink>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>

        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;