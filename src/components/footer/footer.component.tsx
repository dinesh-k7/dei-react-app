import React, { ReactElement } from 'react';
import { isIOS } from 'react-device-detect';

import mailIcon from '../../assets/images/mail_icon.png';
import phoneIcon from '../../assets/images/phone_icon.png';
import fbIcon from '../../assets/images/fb_icon.png';
import linkedInIcon from '../../assets/images/linkedin_icon.png';

import './footer.component.scss';

const Footer: React.FC = (): ReactElement => {
  const fb_url = isIOS
    ? 'fb://Xiiiusa-LLC/103154938413328'
    : 'https://www.facebook.com/Xiiiusa-LLC-103154938413328';
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <span className="contactus-title">Contact us</span>
        <div className="contactus-container">
          <div className="mail-icon">
            <img src={mailIcon} alt="Footer Mail Icon" />
            <span>
              <a href="mailto:securus@xiiiusa.com">securus@xiiiusa.com</a>
            </span>
          </div>
          <div className="phone-icon">
            <img src={phoneIcon} alt="Footer Phone number" />
            <span>
              <a href="tel:+8088007174">808-800-7174</a>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-social-wrapper">
        <ul className="social-links">
          <li className="facebook">
            <a rel="noreferrer" href={fb_url}>
              <img src={fbIcon} alt="Footer Facebook icon" />
            </a>
          </li>

          <li className="linkedin">
            <a
              rel="noreferrer"
              target="_top"
              href="https://www.linkedin.com/company/xiii-llc"
            >
              <img src={linkedInIcon} alt="Footer linkedin Icon" />
            </a>
          </li>
        </ul>
        <p>xiiiusa @ 2021</p>
        <p>
          <a
            href="https://www.thedei.com/terms"
            target="_blank"
            rel="noreferrer"
          >
            Privacy & Legal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
