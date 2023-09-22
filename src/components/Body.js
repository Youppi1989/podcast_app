import React from 'react';
import manImage from '../images/man.jpeg';
import './css/Body.css'; 
import Spotify from '../images/Spotify.png';
import redIcon from '../images/redIcon.png';
import orangeIcon from '../images/orangeIcon.png';
import violetIcon from '../images/violetIcon.png';
import equipment from '../images/equipment.png';
import microphone from '../images/microphone.png';
import podcast from '../images/podcast.jpeg';

function Body() {
  const customFontStyle = {
    fontFamily: 'DM Sans, sans-serif',
    lineHeight: '1.8'
  };
  const handleSubscribeClick = () => {
    alert('Вы подписаны!');
  };

  return (
    <><><><><><><div className="container">
          <img src={manImage} alt="Man" className="image" />
          <div className="text">
              <span style={customFontStyle}>Take</span> <br />
              <span style={customFontStyle}>your podcast to</span> <br />
              <span style={customFontStyle}>the next level</span>
          </div>
      </div>
          <div className='socialMedia'>
              <p>Listen on</p>
          </div>
          <div className="iconsContainer">
              <img src={Spotify} alt='Spotify' className='icon' />
              <img src={redIcon} alt='Red icon' className='icon' />
              <img src={orangeIcon} alt='Orange icon' className='icon' />
              <img src={violetIcon} alt='Violet icon' className='icon' />
          </div>
      </>      <h1 className='episodes' style={{ ...customFontStyle, color: 'beige', marginLeft: '20px', fontWeight: 'normal', fontSize: '40px' }}>
              Latest episodes:
          </h1>
      </></><div className='episodes_container'>
              <img src={equipment} alt="equipment" className="equipment" />
              <div className="text">
              <h2 class ='episode_number'>Episode 1</h2>
                  <span style={customFontStyle}>Should you get </span> <br />
                  <span style={customFontStyle}>outboard audio gear?</span> <br />
                  <h1 class="title">Is hardware really worth it when it comes to podcasting? The answer is...it <br /> depends. Here’s our reasons on why you might want to consider picking <br /> something up.</h1>
                  <button class='button'>View Episode Details</button>
              </div>
          </div></></><div className='episodes_container'>
              <img src={microphone} alt="microphone" className="equipment" />
              <div className="text">
                <h2 class ='episode_number'>Episode 2</h2>
                  <span style={customFontStyle}>Mic tricks to take <br/></span> 
                  <span style={customFontStyle}>you to the next level </span> <br />
                  <h2 class="title">Stop rolling with those default settings on your mic. These small tweaks will <br/>take you from sounding good to great.</h2>
                  <button class='button'>View Episode Details</button>
              </div>
          </div>
          <div>
            <div className='about'>
            <div className="text">
                  <span style={customFontStyle}>About podcasting </span> <br />
                  <h1 class="title">We're here to help you to improve podcasting. <br/>Would you like to join us?</h1>
              </div>
              <img src={podcast} alt="podcast" className="podcast" />
              </div>
              <div className='subscribe_container'>
              <div className="text_subscribe">
              <span style={customFontStyle}>Subscribe <br/> for updates </span> 
              <div className="inputs">
          <input type="text" id class="Name" placeholder="Name:" />
        </div>
        <div className="inputs">
          <input type="text" id class='Name' placeholder="E-mail:" />
        </div>
        <div className="button_container">
          <button className='button' onClick={handleSubscribeClick}>Subscribe</button>
        </div>
      </div>
      
              </div>
              <div className="square-container">
        <div className="square">
          <h2>Елена Игоревна</h2>
          <p>Супер подкаст, слушаю уже несколько месяцев.</p>
        </div>
        <div className="square">
          <h2>Иван Акунин</h2>
          <p>Понравился голос и актуальность темы.</p>
        </div>
        <div className="square">
          <h2>Ксения Римова</h2>
          <p>Норм.</p>
        </div>
        
              </div>
              </div>
          
              
          </>
          
  );
}

export default Body;
