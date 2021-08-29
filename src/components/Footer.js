import React from "react"

import Facebook from 'assets/svg/facebook.svg';
import Instagram from 'assets/svg/instagram.svg';
import Youtube from 'assets/svg/youtube.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="level">
          <div className="level-left has-text-light">
            ©Gurus Digital Portal LLC.
          </div>
          <div className="level-right icon-links">
            <a href="https://facebook.com/gurus.ae" rel="noopener noreferrer" target="_blank"><Facebook/></a>
            <a href="https://www.instagram.com/gurus.ae" rel="noopener noreferrer" target="_blank"><Instagram/></a>
            <a href="https://www.linkedin.com/company/gurus-ae/" rel="noopener noreferrer" target="_blank"><Linkedin/></a>
            <a href="https://twitter.com/Gurus_ae" rel="noopener noreferrer" target="_blank"><Twitter/></a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
