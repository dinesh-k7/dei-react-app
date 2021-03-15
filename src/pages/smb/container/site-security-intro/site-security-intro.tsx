import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';
import heroMobileImage from '../../../../assets/images/ds_mobile.svg';
import serviceBlue from '../../../../assets/images/service_blue.svg';
import './site-security-intro.scss';

const SiteSecurityIntro: React.FC<any> = (props: any): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('data-security');
  };

  return (
    <section
      className="site-security-intro"
      id="site-security-intro"
      ref={props.inputRef}
    >
      <div className="hero-content">
        <div className="hero-title">
          <h1>Site Security</h1>
          <div className="hero-subtitle-container">
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>Website Security</h3>
            </div>
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>SSL</h3>
            </div>
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>Managed SSL Service</h3>
            </div>
            <div className="features">
              <img src={serviceBlue} alt="Background image" />
              <h3>Website Backup</h3>
            </div>
          </div>
        </div>
        <div className="hero-mobile-image">
          <img src={heroMobileImage} alt="Data Security Image" />
        </div>
        <div className="hero-description">
          <p>
            Get peace of mind with daily malware scans and guaranteed malware
            removal should any problems be detected.
          </p>
          <p>
            Speak the language of security with an SSL certificate. The little
            green lock lets visitors know that you&apos;ll keep their data safe.
          </p>
          <p>
            We handle the install and maintenance of your SSL - saving you time
            and energy.
          </p>
          <p>
            Keep your data safe while you grow your business online. Automatic
            backups and one-click restore mean you&apos;re ready for anything
            that comes your way.
          </p>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Data Security Image" />
      </div>
    </section>
  );
};

export default SiteSecurityIntro;
