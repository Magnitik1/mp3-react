import React from "react";
import "./selectSongs.css";
import state from "../../../../../redux/state";
const SelectSongs = (props) => {
  let choose = React.createRef();
  let i = 0;
  let add = () => {
    if (choose.current.value == "on" && i % 2 == 0) {
      if (!state.includes(props.id)) {
        i++;
        state.push(props.id);}
        console.log(state+" i="+i);
      
      
    } else {
      i++;
      for (let i = state.findIndex(e=>e===props.id); i < state.length - 1; i++) {
        state[i] = state[i + 1];
      }
      state.pop();
    }
  };
  return (
    <label className="container">
      {props.name}
      <input type="checkbox" ref={choose} onClick={add} />
      <span className="checkmark"></span>
    </label>
  );
};
export default SelectSongs;
