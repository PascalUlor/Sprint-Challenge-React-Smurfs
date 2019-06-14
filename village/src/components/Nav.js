import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/smurf-form'>Add Smurfs</Link>
    </div>
  );
};

export default Nav;
