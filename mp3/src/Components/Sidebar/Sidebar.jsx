import React from "react";
import "./sidebar.css";
import Navigation from "./Navigation/Navigation";
import SongNow from "./SongNow/SongNow";

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="rect">
        <Navigation />
        <SongNow/>
        <SongNow songpic='https://m.media-amazon.com/images/I/51MJTfOLIrL.jpg' artist='My Darkest Days' songname='Every Lie'/>
      </div>
    </div>
  );
}

export default Sidebar;
