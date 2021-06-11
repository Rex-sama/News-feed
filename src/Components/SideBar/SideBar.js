import React from "react";
import "./CSS/Sidebar.css";
import Feedback from "./Feedback";
import Profile from "./Profile";
import Toggle from "./Toggle";

const SideBar = ({ toggle, status }) => {
  return (
    <div className="sidebar">
      <Profile />
      <Toggle toggle={toggle} status={status} />
      <Feedback  />
    </div>
  );
};

export default SideBar;
