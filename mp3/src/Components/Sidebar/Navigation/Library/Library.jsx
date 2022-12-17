import React, { useState } from "react";
import "./library.css";
import playlists from "../../../redux/allplaylists";
import PlayLists from "./Playlists/Playlists";
import Modal from "./Model/Modal";
import theme from "../../../redux/theme";
function Library(props) {
  const [isModal, setModal] = useState(false);

  let PlyListsElements = playlists.map((Element) => (
    <PlayLists name={Element.name} picture={Element.picture} id={Element.id} songs={Element.songs}/>
  ));

  return (
    <div className="Library">
      <div className={theme[0] ? "BGDay" :"BGNight"}/>
      <div className={theme[0] ? "gradientListDay mygradient" : "gradientListNight mygradient"}/>
      <a className={theme[0] ? "text2 daytext" : "text2 nighttext"}>Your Libraries</a>
      <ul className="plist">
        {PlyListsElements}</ul>
      <button className="AddNew" onClick={() => setModal(true)}>
        +
      </button>
      <Modal isVisible={isModal}
                footer={<button >Create Playlist</button>}
                onClose={() => setModal(false)} />
    </div>
  );
}

export default Library;
