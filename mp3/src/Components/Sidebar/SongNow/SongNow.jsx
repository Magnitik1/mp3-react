import React from "react";
import "./songNow.css";

function SongNow(props) {
  return (
    <div className="SongNow">
      <img src={props.songpic} alt="pic" className="picture" />
      <a className="artist">{props.artist}</a>
      <a className="songname">{props.songname}</a>
      <a className="line" />
      <a className="point" />
    </div>
  );
}

export default SongNow;
