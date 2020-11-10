import React, { Component } from "react";

import "../css/Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;
