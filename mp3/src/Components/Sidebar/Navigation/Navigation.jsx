import React from "react";
import "./navigation.css";
import homePic from "../../pics/navPics/home.svg";
import searchPic from "../../pics/navPics/search.svg";
import libraryPic from "../../pics/navPics/library.svg";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <ul className="nav">
        <li>
          <NavLink to="../Home/Home" activeClassName="active">
            <img src={homePic} alt="home" />
            <a className="al">&nbsp;&nbsp;Home</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="../Search/Search">
            <img src={searchPic} alt="search" />
            <a className="al">&nbsp;&nbsp;Search</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Library">
            <img src={libraryPic} alt="library" />
            <a className="al">&nbsp;&nbsp;Library</a>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
