import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const highLight ={
        fontWeight: "bold",
        color: "red"
      }
  return (
    <div>
      <NavLink activeStyle={highLight} to='/'>Home</NavLink>
      <NavLink activeStyle={highLight} to='/smurf-form'>Add Smurfs</NavLink>
    </div>
  );
};

export default Nav;
