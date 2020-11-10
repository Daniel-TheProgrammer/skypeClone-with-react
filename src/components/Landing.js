import React from "react";

import "../css/Landing.css";

const Landing = ({ user }) => {
  const { name, avatar, status } = user;
  const first_name = name.split(" ")[0];

  return [
    <div className="landing">
      <h1 className="landing-name">Welcome, {first_name}</h1>
      <img src={avatar} alt={name} className="landing-img" />
      <p className="landing-status">
        <b>Status:</b> {status}
      </p>
      <button className="landing-btn">Start a conversation</button>
      <p className="landing-info">
        Search for someone to start chatting with or go to Contacts to see who
        is available.
      </p>
    </div>
  ];
};

export default Landing;
