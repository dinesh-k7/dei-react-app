import React, { ReactElement } from 'react';

import mailIcon from '../../assets/images/mail_icon.png';
import phoneIcon from '../../assets/images/phone_icon.png';
import fbIcon from '../../assets/images/fb_icon.png';
import instaIcon from '../../assets/images/insta_icon.png';
import linkedInIcon from '../../assets/images/linkedin_icon.png';

import './footer.component.scss';

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <span className="contactus-title">Contact us</span>
        <div className="contactus-container">
          <span>
            <img src={mailIcon} /> mail@nwo.com
          </span>
          <span>
            <img src={phoneIcon} /> 123 456 789
          </span>
        </div>
      </div>

      <div className="footer-social-wrapper">
        <ul className="social-links">
          <li className="facebook">
            <a target="_blank" href="#">
              <img src={fbIcon} />
            </a>
          </li>
          <li className="insta">
            <a target="_blank" href="#">
              <img src={instaIcon} />
            </a>
          </li>
          <li className="linkedin">
            <a target="_blank" href="#">
              <img src={linkedInIcon} />
            </a>
          </li>
        </ul>
        <p>DEI @ 2020</p>
        <p>Privacy & Legal</p>
      </div>
    </footer>
  );
};

export default Footer;
