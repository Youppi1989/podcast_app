import React from 'react';
import './css/Header.css';


function Header() {
  return (
    <header className="App-header">
      <div className="left">Castaway</div>
      <div className="right">
        <span className="home">Home</span>
        <span>Episodes</span>
        <span>About</span>
        <span>Contacts</span>
      </div>
    </header>
  );
}

export default Header;
