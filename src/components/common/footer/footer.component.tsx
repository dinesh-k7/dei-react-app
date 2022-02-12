import React, { ReactElement, useState } from 'react';

import { copyrightData } from '../../../constants';
import AlertDialogComponent from '../../common/dialog/alert-dialog.component';

import './footer.component.scss';

const Footer: React.FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

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
      <div className="footer-row-one">
        <ul className="footer-links">
          <li>
            <a href="/contactus">Contact</a>
          </li>
          <li>
            <a href="#" onClick={handleClick}>
              Copyright
            </a>
          </li>
          <li>
            <a
              href="https://www.thedei.com/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="https://www.thedei.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Use
            </a>
          </li>
        </ul>
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
      </div>

      {/* <div className="footer-content">
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
        <p className="copyright-text">xiiiusa @ 2021</p>
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
