import React, { ReactElement } from 'react';

import mailIcon from '../../assets/images/mail_icon.png';
import phoneIcon from '../../assets/images/phone_icon.png';
import fbIcon from '../../assets/images/fb_icon.png';
import linkedInIcon from '../../assets/images/linkedin_icon.png';

import './footer.component.scss';

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <span className="contactus-title">Contact us</span>
        <div className="contactus-container">
          <div className="mail-icon">
            <img src={mailIcon} alt="Footer Mail Icon" />
            <span>securus@xiiiusa.com</span>
          </div>
          <div className="phone-icon">
            <img src={phoneIcon} alt="Footer Phone number" />
            <span>808-800-7174</span>
          </div>
        </div>
      </div>

      <div className="footer-social-wrapper">
        <ul className="social-links">
          <li className="facebook">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/IamMrNWO/?view_public_for=102216145158646"
            >
              <img src={fbIcon} alt="Footer Facebook icon" />
            </a>
          </li>

          <li className="linkedin">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/humanityunite"
            >
              <img src={linkedInIcon} alt="Footer linkedin Icon" />
            </a>
          </li>
        </ul>
        <p>xiii @ 2021</p>
        <p>
          <a
            href="https://thenewworldorder.com/privacy-policy"
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
