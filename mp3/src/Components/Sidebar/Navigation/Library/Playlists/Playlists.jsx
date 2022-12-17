import React, { useState } from "react";
import { Link } from "react-router-dom";
import allsongs from "../../../../redux/allsongs";
import allplaylists from "../../../../redux/allplaylists";
import "./playlists.css";
import mydel from "../../../../pics/bin.svg";
import theme from "../../../../redux/theme"

const Playlists = (props) => {
  const [listVisibility, SetlistVisibility] = useState(true);
  const Remove = () => {
    SetlistVisibility((visible) => !visible);
    // allplaylists.pop(props.id - 1, 1);
    // allplaylists=allplaylists.slice(1, props.id-1)+allplaylists.slice(props.id, allplaylists.length);
    for (let i = allplaylists.findIndex(e=>e.id===props.id); i < allplaylists.length - 1; i++) {
      allplaylists[i] = allplaylists[i + 1];
    }
    allplaylists.pop();
  };
  let ShowSongs = () => {
    let str = "";
    // console.log(props.songs);
    if (props.id === 1) {
      allsongs.forEach((e) => {
        str += e.id + " - " + e.name + "\n";
      });
      alert(str);
    } else {
      // воно дивиться по id, в props приходять усі id пісень цього плейлиста, а в allsongs вся інфа про ці пісні і id у відповідному порядку
      props.songs.forEach((e) => {
        
        str += e + " - " + allsongs.find((el) => el.id === e).name + "\n";
      });
      alert(str);
    }
  };

  return (
    <div className="Playlists">
      {listVisibility && (
        <div className="myred">
          <Link to="" style={{ textDecoration: "none" }} className="mygreen">
            <li onClick={ShowSongs}>
              <img src={props.picture} className="favbg" alt="-" />
              <a className={theme[0] ?"test daytext":"test nighttext"}> &nbsp;&nbsp;&nbsp;{props.name}</a>
            </li>
          </Link>
          <Link className="delbutton">
            <img onClick={Remove} src={mydel} alt="Delete" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Playlists;
