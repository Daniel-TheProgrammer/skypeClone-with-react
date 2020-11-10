import React, { Component } from "react";

import "../css/Header.css";

class Header extends Component {
  render() {
    const { name, status } = this.props.user;

    return (
      <header className="header">
        <h1 className="header-name">{name}</h1>
        <p className="header-status">{status}</p>
      </header>
    );
  }
}

export default Header;
