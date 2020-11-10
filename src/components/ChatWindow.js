import React, { Component } from "react";
import _ from "lodash";

import store from "../store";

import Header from "./Header";
import Chats from "./Chats";
import MessageInput from "../containers/MessageInput";

import "../css/ChatWindow.css";

class ChatWindow extends Component {
  render() {
    const state = store.getState();
    const activeUser = state.contacts[this.props.activeUserId];
    const activeMsgs = state.messages[this.props.activeUserId];
    const { typing } = state;

    return (
      <div className="chatwindow">
        <Header user={activeUser} />
        <Chats messages={_.values(activeMsgs)} />
        <MessageInput value={typing} />
      </div>
    );
  }
}

export default ChatWindow;
