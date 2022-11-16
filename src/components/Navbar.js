import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [show, setShow] = useState(false);

  const navbarTransition = () => {
    if (window.scrollY >= 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const navbarData = {
    query: "",
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);
    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);

  const onSearch = (query) => {
    navbarData.query = query;
    props?.onDataChange?.(navbarData);
  };

  return (
    <header
      className={`layout w-full flex justify-between h-20 fixed top-0 z-20 ease-in-out duration-300 ${
        show && "bg-black"
      }`}
    >
      <div className="h-full">
        <img className="h-full" src={logo} alt="Netflix logo"></img>
      </div>
      <ul className="h-full flex items-center">
        <li className="text-white px-5">
          <Link to={`movies`}>Movies</Link>
        </li>
        <li className="text-white">
          <Link to={`tv`}>Tv Series</Link>
        </li>
      </ul>
      <div className="flex items-center flex-grow justify-around">
        <Searchbar onSearch={onSearch} />
      </div>
      <div className="h-full flex self-center py-3">
        <img className="h-full" src={avatar} alt="Avatar"></img>
      </div>
    </header>
  );
}
