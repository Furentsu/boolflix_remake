import React from "react";
import Searchbar from "./Searchbar";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const navbarData = {
    query: "",
  };

  const onSearch = (query) => {
    navbarData.query = query;
    props?.onDataChange?.(navbarData);
  };

  return (
    <header className="layout w-full flex justify-between h-16 fixed top-0 z-20">
      <div className="h-full">
        <img className="h-full" src={logo} alt="Netflix logo"></img>
      </div>
      <ul className="h-full flex items-center">
        <li className="text-white pr-5">
          <Link to={`movies`}>Movies</Link>
        </li>
        <li className="text-white">
          <Link to={`tv`}>Tv Series</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <Searchbar onSearch={onSearch} />
      </div>
      <div className="h-full flex self-center py-3">
        <img className="h-full" src={avatar} alt="Avatar"></img>
      </div>
    </header>
  );
}
