import React from "react";
import Searchbar from "./Searchbar";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";

export default function Navbar() {
  return (
    <header className="layout w-full flex justify-between h-16 fixed top-0 z-20">
      <div className="h-full">
        <img className="h-full" src={logo} alt="Netflix logo"></img>
      </div>
      <div className="flex items-center">
        <Searchbar />
      </div>
      <div className="h-full flex self-center py-3">
        <img className="h-full" src={avatar} alt="Avatar"></img>
      </div>
    </header>
  );
}
