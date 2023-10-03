"use client";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="logoContainer">
        <p className="logoText">Blog Components</p>
      </div>
      <div className="menuIcon">
        <RiMenu2Fill size={24} />
      </div>
    </nav>
  );
};

export default NavBar;
