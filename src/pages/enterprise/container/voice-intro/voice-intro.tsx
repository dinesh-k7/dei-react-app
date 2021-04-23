import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../../../../assets/scss/styles.scss';

import heroImage from '../../../../assets/images/data_security_dei_shield.svg';

import blueBlob from '../../../../assets/images/service_blue.svg';
import { setServiceAction } from '../../../../actions/enterprise';

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
                <img src={heroImage} alt="consultation Image" />
              </div>
              <div className="hero-subtitle-container enterprise-service">
                <div className="features">
                  <img src={blueBlob} alt="sdwan" />
                  <h3
                    onClick={() =>
                      routeChange(
                        '/enterprise/sdwan-service',
                        'Unified Communications',
                      )
                    }
                  >
                    Unified Communications
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange(
                        '/enterprise/sdwan-service',
                        'Unified Communications',
                      )
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    DEI™ has connections within every Unified Communications
                    (UC) provider in the Gartner magic quadrant available to
                    meet your customer’s needs and a few more to meet those
                    special requirements only a few vendors can provide. Our
                    experience in selling Unified Communications as a Service
                    (UCaaS) solutions is unmatched in the channel. We cover
                    basic telephony, video, conferencing, collaboration, contact
                    center and more. Our UCaaS providers can meet both domestic
                    and multi-national customer needs.
                    <br />
                    <br />
                    <ul>
                      <li>
                        Voice and telephony, including mobile devices support
                      </li>
                      <li>
                        Conferencing — Audioconferencing, videoconferencing and
                        web conferencing
                      </li>
                      <li>
                        Messaging — Email with voice mail and unified messaging
                        (UM)
                      </li>
                      <li>Instant messaging and presence (IM &P)</li>
                      <li>
                        Soft-Clients — Including desktop clients and thin
                        browser clients
                      </li>
                      <li>
                        Communications-enabled applications — For example,
                        integrated collaboration and contact center applications
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'Conferencing')
                    }
                  >
                    Conferencing
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'Conferencing')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Our web conferencing services are designed to make it easy
                    to schedule and conduct meetings, sales demos, remote
                    support and training sessions. Make instant, spontaneous
                    video meetings a breeze. Your remote employees will feel
                    engaged again. And it’s easy to do. How easy? If you can
                    click a link, you can meet and collaborate.
                  </p>
                  <p>
                    Our audio conferencing can meet any business need—from the
                    smallest impromptu calls to your largest business-critical
                    events. Remarkably easy-to-use and clear connections
                    worldwide…always available and always dependable.
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'Contact Center')
                    }
                  >
                    Contact Center
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'Contact Center')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Multi-channel contact center provides ACD services across
                    all channels; inbound & outbound voice, IVR, chat and email.
                    Available as a cloud service or premise system and highly
                    available to ensure critical customer interactions are
                    successful. Multi-channel quality assurance recording and
                    management, workforce optimization, and CTI (screen pop)
                    will ensure you can provide your customers an effortless
                    experience.
                  </p>
                </div>
                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'SIP Trunks')
                    }
                  >
                    SIP Trunks
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'SIP Trunks')
                    }
                    className="chevron-right"
                  />
                  <p>
                    A SIP trunk is a direct connection between your organization
                    and an ITSP. It enables you to extend VoIP telephony beyond
                    your organization’s firewall without the need for an IP-PSTN
                    gateway. Additionally, SIP trunks can carry instant
                    messages, multimedia conferences, user presence information,
                    Enhanced 9-1-1 emergency calls, and other SIP-based,
                    real-time communications services. Because it is easier to
                    configure and less expensive to design, operate, maintain,
                    and upgrade, and because ITSPs deliver services at
                    substantial savings, your investment in SIP trunking can
                    give a quick and substantial return on investment.
                  </p>
                </div>

                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'Hosted VOIP')
                    }
                  >
                    Hosted VOIP
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'Hosted VOIP')
                    }
                    className="chevron-right"
                  />
                  <div className="feature-description">
                    With Hosted PBX, make phone calls using the same broadband
                    connection you use for Business Internet service. Select
                    your phone plan, features, and IP phones, and let us do the
                    rest. Get the most advanced PBX capabilities in the cloud
                    and easy online administration, where users can manage their
                    call preferences and service options.
                    <br /> <br />
                    <ul>
                      <li>
                        <b>VoIP Phones</b> – available to buy or rent
                      </li>
                      <li>
                        <b>Phone Numbers</b> – we’ll help you obtain new numbers
                        or transfer your existing numbers
                      </li>
                      <li>
                        <b>Broadband Connection</b> – Use your existing services
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
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'POTS')
                    }
                  >
                    POTS
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'POTS')
                    }
                    className="chevron-right"
                  />
                  <p>
                    Traditional telephone service/POTS or Plain Old Telephone
                    System refers to a landline phone service that uses copper
                    wiring to make and receive calls. It is usually offered by
                    household-name companies such as Verizon, AT&T, MCI, or any
                    other local landline operator in your specific area.
                  </p>
                  <p>
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
                  </p>
                </div>

                <div className="features">
                  <img src={blueBlob} alt="blue blob" />
                  <h3
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'PRI')
                    }
                  >
                    PRI
                  </h3>
                  <ChevronRightIcon
                    onClick={() =>
                      routeChange('/enterprise/ucaas-service', 'PRI')
                    }
                    className="chevron-right"
                  />
                  <p>
                    PRI, or Primary Rate Interface, is the standard service
                    level for carrying digital voice and data services. If you
                    already own a PBX or are able to obtain a PBX at a low cost,
                    the PRI circuit is a viable solution for your business.
                    Medium to large businesses that can make use of 23
                    simultaneous phone calls benefit the most from this service,
                    otherwise you have empty channels that you are paying for
                    and not using. The PBX itself offers a lot of features that
                    you see in medium to large businesses (auto attendants,
                    rings groups, hold music, etc). It may not be right for you
                    if you’re a very small business with only a few employees.
                    It may not be right for you if you’re a large organization
                    with multiple locations. An MPLS with SIP Trunking might be
                    a better solution.
                  </p>
                  <p>
                    We can help you determine if a PRI is an appropriate
                    solution for your business. We’ll talk with you to discover
                    what your business goals are, and what technological needs
                    will satisfy those goals.
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Enterprise Image" />
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
