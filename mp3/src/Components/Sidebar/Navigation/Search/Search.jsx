import React from "react";
import "./search.css";
import searchPic from "../../../pics/search2.svg";

const Search = (props) => {
  let textInput =  React.createRef();
  return (
    <div className="Search">
      <form>
        <input
          type="text"
          id="uname"
          className="sLine"
          placeholder="Song, Artist"
          ref={textInput}></input>
        <button>
          <img src={searchPic} alt="search" className="sPic" />
        </button>
      </form>
      <a className="text1">Search</a>
    </div>
  );
};

export default Search;
