import React, { useState } from "react";
import "./library.css";
import playlists from "../../../redux/allplaylists";
import PlayLists from "./Playlists/Playlists";
import Modal from "./Model/Modal";

function Library(props) {
  const [isModal, setModal] = React.useState(false);

  let PlyListsElements = playlists.map((Element) => (
    <PlayLists name={Element.name} picture={Element.picture} id={Element.id} songs={Element.songs}/>
  ));





  return (
    <div className="Library">
      <a className="text2">Your Libraries</a>
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
