import React, { Component } from "react";

import "../css/User.css";

import { setActiveUserId } from "../actions";
import store from "../store";

class User extends Component {
  getStatus = status => {
    if ((status = "online")) return "online";
    if ((status = "offline")) return "offline";
    if ((status = "busy")) return "busy";
  };

  handleUserClick = user_id => {
    // console.log(user_id);
    store.dispatch(setActiveUserId(user_id));
  };

  render() {
    const { name, avatar, status, user_id } = this.props.user;
    return (
      <div className="user" onClick={() => this.handleUserClick(user_id)}>
        <img src={avatar} alt={name} className="user-avatar" />
        <div className="user-details">
          <p className="user-details-name">{name}</p>
          <p className="user-details-status">{status}</p>
        </div>
      </div>
    );
  }
}

export default User;
