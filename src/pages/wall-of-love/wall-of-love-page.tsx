import React, { Fragment, ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import WallOfLove from '../../assets/images/wall-of-love.svg';
import ContributorsVector from '../../assets/images/contributors-vector.svg';
import ExploitorsVector from '../../assets/images/exploitors-vector.svg';
import FreelancerRegistrationVector from '../../assets/images/freelancer-registration.svg';
import BusinessRegistrationVector from '../../assets/images/business-registration.svg';
import VectorLine from '../../assets/images/vector-line.svg';

import './wall-of-love-page.scss';
import { FREELANCERS_AGENCIES } from './content/contributors';
import { EXPLOITORS } from './content/exploitors';

const labels = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
};

const ProfileImage: React.FC<any> = (props): ReactElement => {
  const { avatar, id, bgVector } = props;
  return (
    <div
      className="profile-image"
      style={{ backgroundImage: `url(${bgVector})` }}
    >
      <img src={avatar} alt={`freelance profile ${id}`} />
    </div>
  );
};

const ProfileDescription: React.FC<any> = (props): ReactElement => {
  const [value] = useState(3);
  const [hover] = useState(-1);
  const { name, rating, comments, vector, id, textAlign, vectorClassName } =
    props;
  return (
    <div
      className="profile-description"
      style={{ paddingLeft: textAlign === 'left' ? '20%' : '' }}
    >
      <h5>{name}</h5>
      <div>
        <Rating name="hover-feedback" value={rating} precision={1} max={5} />
        {value !== null && (
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </div>
      <p>{comments}</p>
      <img src={vector} alt={`vector ${id}`} className={vectorClassName} />
    </div>
  );
};

const WallOfLovePage: React.FC = (): ReactElement => {
  const history = useHistory();
  const [isContributor, setContributor] = useState(true);
  const [isExploitor, setExploitor] = useState(false);

  const rndInt = Math.floor(Math.random() * 5) + 1;

  const rotate: any = {
    '--time': '20s',
    '--amount': rndInt,
    '--fill': '#56cbb9',
    zIndex: -9999,
  };

  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Wall of love page',
    },
  });
  return (
    <Fragment>
      <div className="wall-of-love-grid">
        <div className="wall-of-love-header">
          <div className="header-content-container">
            <img src={WallOfLove} alt="wall of love" className="header-image" />
            <p>
              Plurbs™ are Digital artisans that develop the New World Order™.
            </p>
            <p>
              By listing them on the wall of love, we promote the Plurbs™ that
              have helped our effort. Without them, the Wall of Love™ wouldn't
              exist.
            </p>
            <p>
              People ask why we don't sign this wall. What we do is more
              significant than a name! You witness a fragment of NWO's inner
              workings. Learn about Plurbs™ by visiting [{' '}
              <a href="https://plurbs.com" target="_blank" rel="noreferrer">
                Click Here{' '}
              </a>
              ]
            </p>
            <p>Join us in offering love to this worlds'-orderers!</p>
            <div className="wall-section">
              <div className="contributors">
                <img
                  src={ContributorsVector}
                  alt="Contributors"
                  style={rotate}
                  className="tk-blob"
                />
                <h2
                  onClick={() => {
                    setContributor(true);
                    setExploitor(false);
                  }}
                >
                  Contributors
                </h2>
              </div>
              <div className="exploitors">
                <img
                  src={ExploitorsVector}
                  alt="Exploitors"
                  style={rotate}
                  className="tk-blob"
                />
                <h2
                  onClick={() => {
                    setContributor(false);
                    setExploitor(true);
                  }}
                >
                  Exploitors
                </h2>
              </div>
            </div>

            <div className="search-bar">
              <input type={`search`} name="search" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="registration-container">
          <div
            className="freelancer"
            onClick={() => history.push('freelance-certification')}
          >
            <img
              src={FreelancerRegistrationVector}
              alt="Freelancer"
              style={rotate}
              className="tk-blob"
            />
            <h2>Freelancer Registration</h2>
          </div>
          <div
            className="business"
            onClick={() => history.push('climate-push-registration')}
          >
            <img
              src={BusinessRegistrationVector}
              alt="Business"
              style={rotate}
              className="tk-blob"
            />
            <h2>Business Registration</h2>
          </div>
        </div>

        <div className="title-container">
          <div className="freelancer-title">
            <h4>Freelancers & Agents</h4>
            <img src={VectorLine} alt="vector line" />
          </div>

          <div className="agencies-title">
            <h4>Agencies & Businesses</h4>
            <img src={VectorLine} alt="vector line" />
          </div>
        </div>

        <div className="contributors-exploitors-container">
          {/**Contributor section starts */}
          {isContributor &&
            FREELANCERS_AGENCIES &&
            FREELANCERS_AGENCIES.length && (
              <>
                {FREELANCERS_AGENCIES.map((fa) => {
                  return (
                    <div className="freelancer-profile-container" key={fa.id}>
                      {fa.textAlign === 'right' ? (
                        <>
                          <ProfileImage {...fa} />
                          <ProfileDescription {...fa} />
                        </>
                      ) : (
                        <>
                          <ProfileDescription {...fa} />
                          <ProfileImage {...fa} />
                        </>
                      )}
                    </div>
                  );
                })}
              </>
            )}

          {/**Exploitors section starts */}
          {isExploitor && EXPLOITORS && EXPLOITORS.length && (
            <>
              {EXPLOITORS.map((fa) => {
                return (
                  <div
                    className="freelancer-profile-container"
                    key={fa.id}
                    style={{
                      paddingRight: fa.textAlign === 'right' ? '8px' : '',
                    }}
                  >
                    {fa.textAlign === 'right' ? (
                      <>
                        <ProfileImage {...fa} />
                        <ProfileDescription {...fa} />
                      </>
                    ) : (
                      <>
                        <ProfileDescription {...fa} />
                        <ProfileImage {...fa} />
                      </>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default WallOfLovePage;
