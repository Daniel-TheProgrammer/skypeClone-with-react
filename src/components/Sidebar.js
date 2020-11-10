import React from "react";

import "../css/Sidebar.css";

import User from "../containers/User";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="sidebar">
      {contacts.map(contact => {
        return <User user={contact} key={contact.user_id} />;
      })}
    </aside>
  );
};

export default Sidebar;
