import React, {useState} from "react";
import "./mySettings.css";
import settingsPic from "../../../../pics/mysettings.svg";
import back from "../../../../pics/arrowleft.svg";
import theme from "../../../../redux/theme";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

function MySettings(props) {
  const [mytheme, setTheme] = useState(theme[0]);
  let changeTheme=()=>{
      
  }
  return (
    <div className="MySettings">
    <div className={theme[0] ? "BGDay" :"BGNight"}/>
    <div className={theme[0] ? "gradientSetDay mygradient" : "gradientSetNight mygradient"}/>
      <Link to="/Home">
      <img src={back} alt="back" className="back"/>
      </Link>
      <a className={theme[0] ?"text goodM daytext":"text goodM nighttext"}><img src={settingsPic} alt="set"/><span className="mid1">&nbsp;&nbsp;Settings</span></a>
      <button onClick={()=>{theme[0]=!theme[0];setTheme(!mytheme);changeTheme()}} className="themeButton">{theme[0]?"Night Theme":"Day Theme"}</button>
    </div>
  );
}

export default MySettings;
