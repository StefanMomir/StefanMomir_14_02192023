import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink to={"/"}>Register</NavLink>
        </li>
        <li>
          <NavLink to={"/employees"}>Employees</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
