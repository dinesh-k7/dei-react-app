import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';
import serviceBlue from '../../../../assets/images/service_blue.svg';
import './data-security-intro.scss';

const DataSecurityIntro: React.FC = (): ReactElement => {
  const history = useHistory();

  const routeChange = () => {
    history.push('data-security');
  };

  return (
    <section className="data-security-intro">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Data Security</h1>
          <div className="hero-subtitle-container">
            <img src={serviceBlue} alt="Background image" />
            <h3>Dark Web Monitoring</h3>
            {/* <img src={serviceBlue} alt="Background image" />
            <h3>Email Solutions</h3> */}
          </div>
          {/* <h3>The Dark Web Problem:</h3> */}
        </div>
        <div className="hero-description">
          <p>
            In the Dark Web, a compromised credential sells for ~$1-$8. They
            range from online services to corporate network user names and
            passwords. Whether it is in blocks of 100,000 or 1, Dark Web Pirates
            frequently purchase credentials. Then they index the data obtained
            until it poses a direct threat to your business.
          </p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className={`btn-data-security`}
            onClick={routeChange}
          >
            Get a Quote
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Data Security Image" />
      </div>
    </section>
  );
};

export default DataSecurityIntro;
