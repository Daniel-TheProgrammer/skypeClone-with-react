import React, { Component } from "react";

import store from "../store";
import { setTypingValue, sendMessage } from "../actions";

import "../css/MessageInput.css";

class MessageInput extends Component {
  handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  handleSubmit = e => {
    e.preventDefault();

    const state = store.getState();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  render() {
    return (
      <form className="message" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="message-input"
          onChange={this.handleChange}
          value={this.props.value}
          placeholder="Type a message here"
        />
      </form>
    );
  }
}

export default MessageInput;
