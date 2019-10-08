import React from 'react';
import '../styles/SideBar.css';
import {Link} from 'react-router-dom';

function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar__title">
        My personal blog
      </div>
      <div className="side-bar__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sodales ipsum. Aenean felis nibh, dignissim eu tortor ut, pulvinar commodo tortor. Pellentesque gravida sapien velit, in pellentesque sapien sagittis nec.
      </div>
      <div className="side-bar__delimetr"></div>
      <div className="side-bar-nav">
        <Link to="/" className="side-bar-nav__link">HOME</Link>
        <Link to="/About" className="side-bar-nav__link side-bar-nav__link2">ABOUT</Link>
      </div>
      <div className="side-bar__delimetr side-bar__delimetr2"></div>
      <div className="side-bar-social-networks">
        <div className='side-bar-social-networks__icon facebock'></div>
        <div className='side-bar-social-networks__icon instagram'></div>
        <div className='side-bar-social-networks__icon github'></div>
        <div className='side-bar-social-networks__icon twitter'></div>
      </div>
    </div>
  );
}

export default SideBar;
