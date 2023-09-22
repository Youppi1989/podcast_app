import React from 'react';
import './css/Footer.css';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

function Footer() {
  return (
    <><footer className="App-footer">
          <div className="left">
              <span className="home">Home</span>
              <span>Episodes</span>
              <span>About</span>
              <span>Contacts</span>
          </div>

      </footer>

      <div class='contact_icons'>
      <img src={instagram} alt="insta" />
      <img src={twitter} alt="twitter"/>
      </div>
      </>

     
  );
}

export default Footer;
