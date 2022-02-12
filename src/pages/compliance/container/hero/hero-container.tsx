import React, { ReactElement } from 'react';

import '../../../../assets/scss/styles.scss';
import './hero-container.scss';

const HeroContainer: React.FC<any> = (): ReactElement => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Compliance Central</h1>
        </div>
        <div className="hero-description">
          <p>
            The DEI™ helps you take the guesswork out of data compliance. The
            digital realm currently has no rule of law, and cybercriminals are
            winning. Businesses bear the burden of navigating this treacherous
            terrain. Obtaining compliance is the sure way of mitigating risk.
            Until now, no clear solution has been made available. Our proactive
            approach:
            <br />
            <br />
          </p>
          <ul className="compliance-features">
            <li>
              <b>Detects </b> your compliance needs and vulnerabilities with a
              comprehensive risk assessment.
            </li>

            <li>
              <b> Automates </b> data collection, analysis, and documentation
              processes.
            </li>
            <li>
              <b> Identifies </b> appropriate remediation measures and
              highlights critical items or issues needing immediate attention.
            </li>
            <li>
              <b> Provides </b> expert technical support and guidance you can
              put your trust in.
            </li>
            <li>
              <b>Secures </b> and protects your business and its data from new
              or evolving threats and sophisticated cybercriminals.
            </li>
            <li>
              <b> Generates </b> detailed records and reports to demonstrate and
              validate Due Care or Evidence of Compliance requirements.
            </li>
            <li>
              <b> Delivers</b> and manages all the above for various regulatory
              standards with our simple, budget-friendly DEI™ CaaS solution.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
