import React, { ReactElement, useState } from 'react';

import { copyrightData } from '../../../constants';
import copyrightICon from '../../../assets/images/copyrightIcon.png';
import AlertDialogComponent from '../../common/dialog/alert-dialog.component';
import './footer.component.scss';

import linkedInIcon from '../../../assets/images/linkedin_icon.svg';
import twitterIcon from '../../../assets/images/twitter-icon.svg';
import mailIcon from '../../../assets/images/mail-icon.png';

const Footer: React.FC = (): ReactElement => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { title, description } = copyrightData;
  return (
    <footer className="footer-section">
      {open ? (
        <AlertDialogComponent
          fromPage={`footer`}
          title={title}
          description={description}
          isShow={open}
          handleClose={handleClose}
        />
      ) : (
        ''
      )}
      <div className="footer-wrapper">
        <ul className="footer-links">
          <li>
            <a href="contactus">Contact us</a>
          </li>
        </ul>

        <div className="social-link-container">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/xiiiusa"
          >
            <img src={twitterIcon} alt="twitter icon" height={25} />
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/showcase/dei%E2%84%A2-digital-enterprise-initiative"
          >
            <img src={linkedInIcon} alt="linkedin Icon" height={25} />
          </a>
        </div>
        <div className="mail-icon">
          <img src={mailIcon} alt="Footer Mail Icon" />
          <span>
            <a href="mailto:helpdesk@thedei.com">helpdesk@thedei.com</a>
          </span>
        </div>

        <span className="consulting"> Pat. Pend. © DEI DAO LLC</span>
        <div className="donate-link">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="HWF882AUJ96WA"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt="donate"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
        <span className="privacy">
          <button
            className="btn-bor"
            type="button"
            onClick={() => setOpen(true)}
          >
            <img src={copyrightICon} height={18} />
          </button>

          <a
            href="https://digitalenterpriseinitiative.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <span>Privacy & Legal</span>
          </a>
        </span>
      </div>

      {/* <div className="footer-content">
        <span className="contactus-title">Contact us</span>
        <div className="contactus-container">
          <div className="mail-icon">
            <img src={mailIcon} alt="Footer Mail Icon" />
            <span>
              <a href="helpdesk@thedei.com">helpdesk@thedei.com</a>
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

      <div className="footer-social-wrapper"> */}
      {/* <ul className="social-links">
          <li className="facebook">
            <a rel="noreferrer" href={fb_url}>
              <img src={fbIcon} alt="Footer Facebook icon" />
            </a>
          </li>

          <li className="linkedin">
            <a
              rel="noreferrer"
              target="_top"
              href="https://www.linkedin.com/showcase/dei%E2%84%A2-digital-enterprise-initiative"
            >
              <img src={linkedInIcon} alt="Footer linkedin Icon" />
            </a>
          </li>
        </ul>
        <p className="copyright-text">xiii @ 2022</p>
        <p>
          <a
            href="https://www.thedei.com/terms"
            target="_blank"
            rel="noreferrer"
          >
            Privacy & Legal
          </a>
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
