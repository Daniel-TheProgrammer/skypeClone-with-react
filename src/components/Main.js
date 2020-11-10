import React from "react";

import "../css/Main.css";

import Landing from "../components/Landing";
import ChatWindow from "../components/ChatWindow";

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Landing user={user} activeUserId={activeUserId} />;
    }
    return <ChatWindow activeUserId={activeUserId} />;
  };

  return <main className="main">{renderMainContent()}</main>;
};

export default Main;
