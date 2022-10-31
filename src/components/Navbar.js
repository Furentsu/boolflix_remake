import React from "react";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black">
      <div className="w-52">
        <img src={logo} alt="Netflix logo"></img>
      </div>
      <div className="w-16 flex self-center mr-4">
        <img src={avatar} alt="Avatar"></img>
      </div>
    </div>
  );
}
