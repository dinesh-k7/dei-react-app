import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FitbitIcon from '@mui/icons-material/Fitbit';

import '../../../../assets/scss/styles.scss';
import '../../container/hero/hero-container.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';
import { setServiceAction } from '../../../../actions/enterprise';
import { constants } from '../../../../constants';

const VoiceIntro: React.FC<any> = (props: any): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Enterprise Voice Service Page',
    },
  });

  const history = useHistory();
  const routeChange = (url: string, serviceName: string) => {
    props.setService(serviceName);
    history.push(url);
  };
  return (
    <Fragment>
      <section className="hero-section">
        <div className="hero-content">
          <Fragment>
            <div className="hero-title">
              <h1>Voice</h1>
              <div className="hero-mobile-image">
                <img src={heroImage} alt="consultation" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/unified-communications',
                        'Unified Communications',
                      )
                    }
                  >
                    Unified Communications
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/unified-communications',
                        constants.UNIFIED_COMM,
                      )
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    The DEI®️ provides connections with all (UC) or Unified
                    Communications providers with/in the magic quadrant of
                    Gartner. This enables us to meet your customer&apos;s needs
                    above and beyond. A quality that only a few vendors can
                    provide. With unmatched experience selling Unified
                    Communications as a Service (UCaaS), our group confidently
                    can deliver domestic and international needs:
                    <br />
                    <br />
                    <ul>
                      <li>Basic telephony</li>
                      <li>Video</li>
                      <li>Conferencing</li>
                      <li>Collaboration</li>
                      <li>Contact Center</li>
                      <li>
                        Messaging both Email with voice mail and (UM) or unified
                        messaging
                      </li>
                      <li>(IM &P) - Instant messaging and presence</li>
                      <li>Soft-Clients</li>
                      <li>
                        Communications-enabled applications — For example,
                        integrated collaboration and contact center applications
                      </li>
                      <li>and more</li>
                    </ul>
                  </div>
                </div>

                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/conferencing',
                        constants.CONFERENCING,
                      )
                    }
                  >
                    Conferencing
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/conferencing',
                        constants.CONFERENCING,
                      )
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    We know that engaging with your remote workers is a
                    necessity. Our web conferencing solutions define digital
                    intimacy by making conferencing feel more spontaneous,
                    instant, and natural. Engaging collaborations are just a few
                    clicks away.
                    <br />
                    <ul>
                      <li>conduct meetings</li>
                      <li>sales demos</li>
                      <li>remote support</li>
                      <li>training sessions</li>
                    </ul>
                    <br />
                    Our audio conferencing solutions can meet any business need.
                    We are dedicated to making clear connections worldwide at
                    any time, day or night.
                  </div>
                </div>
                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/contact-center',
                        constants.CONTACT_CENTER,
                      )
                    }
                  >
                    Contact Center
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/contact-center',
                        constants.CONTACT_CENTER,
                      )
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    Cloud service or on-premise systems our ACD services are
                    highly available to ensure critical customer interactions
                    are successful across all channels;
                    <br />
                    <ul>
                      <li>Inbound & Outbound voice</li>
                      <li>IVR or Interactive Voice Response,</li>
                      <li>Chat and email</li>
                      <li>Instant messaging and presence (IM &P)</li>
                      <li>CTI (screen pop)</li>
                    </ul>
                    <br />
                    Managed workforce optimization combined with multi-channel
                    quality assurance recording enables workforce optimization.
                    Providing your customers with a seemingly effortless
                    experience
                  </div>
                </div>
                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/sip-trunk', constants.SIP)
                    }
                  >
                    SIP Trunk
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/sip-trunk', constants.SIP)
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    Forming a direct connection between your organization and
                    its ITSP is called a SIP trunk. With it, your VoIP telephony
                    extends beyond your firewall without the need for an
                    additional IP-PSTN gateway.
                    <br />
                    Additionally, SIP trunks can carry
                    <ul>
                      <li>Instant messages,</li>
                      <li>Multimedia conferences,</li>
                      <li>User presence information,</li>
                      <li>Enhanced 9-1-1 emergency calls,</li>
                      <li>Other SIP-based,</li>
                      <li>Real-time communications services.</li>
                    </ul>
                    <br />
                    Making it easier to configure and less expensive to design,
                    operate, maintain, and upgrade. An investment in SIP
                    trunking can give a quick and substantial return on
                    investment by enabling ITSPs to deliver service at
                    significant savings.
                  </div>
                </div>

                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/hosted-voip', constants.VOIP)
                    }
                  >
                    Hosted VOIP
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/hosted-voip', constants.VOIP)
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    Using a hosted PBX allows you to make phone calls with your
                    preferred ISP for Business Internet. You select your phone
                    plan, features, and IP phones, and we will handle everything
                    else.
                    <br /> <br />
                    <ul>
                      <li>
                        <b>VoIP Phones</b> – for purchase or rent
                      </li>
                      <li>
                        <b>Phone Numbers</b> – Transfer your existing number or
                        get a new one
                      </li>
                      <li>
                        <b>Broadband Connection</b> – Use your current services
                        or let us provide a high-quality broadband connection
                      </li>
                      <li>
                        <b> Voice-capable Router</b> – we recommend a router
                        with QoS settings that can prioritize voice traffic over
                        data traffic. We can help you select one
                      </li>
                      <li>
                        <b>Toll-Free and Vanity Numbers </b> – make it easy for
                        customers you reach you
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/pots', constants.POTS)
                    }
                  >
                    POTS
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/pots', constants.POTS)
                    }
                    className="chevron-right"
                  />
                  <p>
                    A Plain Old Telephone System is a traditional landline with
                    copper wiring making and recieving calls. For some,
                    traditional telephone services is still the best choice.
                    However, modern advancements provide similar services with
                    better pricing. So, before making a final desicion on your
                    landline provider book a consultation with us!
                  </p>
                  {/* <p>
                    These companies rely on the PSTN (Public Switched Telephone
                    Network) to transmit calls. The PSTN is a complex system of
                    hardwired landlines that act as the backbone of traditional
                    telephone service. For some people, a traditional company is
                    still the best choice for telephone service. However,
                    traditional companies no longer provide the best rates or
                    features for telephone service, so you should definitely
                    look into some other telephone service options like 
                    <a href="https://www.myrateplan.com">VoIP</a> (Voice over
                    Internet Protocol) and wireless phone service before you
                    make a final decision on your landline service provider.
                  </p> */}
                </div>

                <div className="features">
                  <FitbitIcon fontSize="large" className="fitbit-icon" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/pri', constants.PRI)
                    }
                  >
                    PRI
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/pri', constants.PRI)
                    }
                    className="chevron-right"
                  />
                  <p>
                    Primary Rate Interface or PRI, is the standard service level
                    for carrying digital voice and data services. Some companies
                    have made the investment of a PBX, features like auto
                    attendants, ring groups, hold music, etc, offset the
                    expense. A larger business with multiple locations might be
                    better served with MPLS and SIP trunking. A medium to a
                    large-sized business needing 23 simultaneous phone calls
                    would benefit the most from a PRI. Don&apos;t get stuck
                    paying for services that you won&apos;t use.
                  </p>
                  <p>
                    Book a consultation with the DEI®️ we can help you determine
                    if a PRI is the right solution.
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Enterprise" />
        </div>
      </section>
      <div className="bottom-border"></div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setService: (serviceName) => dispatch(setServiceAction(serviceName)),
  };
};
export default connect(null, mapDispatchToProps)(VoiceIntro);
