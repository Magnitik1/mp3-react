import React from "react";
import "./home.css";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import settingsPic from "../../../pics/mysettings.svg";
import theme from "../../../redux/theme";
function Home(props) {

  return (
    <div className="Home">
      <div className={theme[0] ? "BGDay" :"BGNight"}/>
    <div className={theme[0] ? "gradientHomeDay mygradient" : "gradientHomeNight mygradient"}/>
    <Link to="/MySettings" style={{textDecoration: 'none'}}>
      <img src={settingsPic} alt="set" className="MySettingsCSS"/>
    </Link>
      <a className={theme[0] ?"text goodM daytext":"text goodM nighttext"}>Good morning</a>
      <div className="rects rect5">
        <a className="mid" >Library</a> 
      </div>
      <div className="rects rect6">
        <a className="mid">Acoustic Hits</a>
      </div>
      <div className="rects rect7">
        <a className="mid">Electronic</a>
      </div>
      <div className="rects rect8">
        <a className="mid">Romantic</a>
      </div>
      <div className="rects rect9">
        <a className="mid">Hip Hop</a>
      </div>
      <div className="rects rect10">
        <a className="mid">Global Top</a>
      </div>
      <a className={theme[0] ?"text showToTry daytext":"text showToTry nighttext"}>Shows to try</a>
      <div className="bigRects rect11">
        <a className="bmid">Old is Gold</a>
      </div>
      <div className="bigRects rect12">
        <a className="bmid">Pop Hits</a>
      </div>
      <div className="bigRects rect13">
        <a className="bmid">90's Hits</a>
      </div>
      <a className={theme[0] ?"text yourTopMixes daytext":"text yourTopMixes nighttext"}>Your Top Mixes</a>
      <div className="bigRects rect14">
        <a className="bmid">KISS, Queen, My Darkest Days</a>
      </div>
      <div className="bigRects rect15">
        <a className="bmid">Nickelback, Twenty One Pilots, Three Days Grace</a>
      </div>
      <div className="bigRects rect16">
        <a className="bmid">Skillet, Evanescence, Flyleaf</a>
      </div>
      <div className="empty"/>
    </div>
  );
}

export default Home;