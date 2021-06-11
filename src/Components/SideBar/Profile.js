import React from "react";
import "./CSS/Profile.css"
import user from "../asset/user.png"

const Profile = () => {
  return <div className="profile">
    <img src={user} alt="user" width="60" height="60" />
    <div className="profile-info">
      <h3>Hi Reader,</h3>
      <p>Here's your News!</p>
    </div>
  </div>;
};

export default Profile;
