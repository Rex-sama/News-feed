import React from "react";
import "./CSS/Toggle.css"
import list from "../asset/list.png"
import squares from "../asset/squares.png"

const Toggle = ({ toggle, status }) => {
  return (
    <div className="toggle">
      <h2>View Toogle</h2>
      <div className="toggle-button">
        <button className={status ? "on" : "off"} id="row" onClick={toggle}>
          <img src={list} alt="list" width="30" height="30" id="row" onClick={toggle} />
        </button>
        <button className={status ? "off" : "on"} id="column" onClick={toggle}>
          <img src={squares} alt="squares" width="30" height="30" id="column" onClick={toggle} />
        </button>
      </div>
    </div>
  );
};

export default Toggle;
