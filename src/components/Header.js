import React from "react";

const Header = props => {
  return (
    <header className="App-header">
      <header>{props.text}</header>
    </header>
  );
};

export default Header;
