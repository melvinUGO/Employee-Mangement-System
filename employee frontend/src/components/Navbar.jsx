import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <NavLink to="/">
          <p className="text-white font-bold">Employee Management System</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
