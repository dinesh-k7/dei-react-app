import React, { ReactElement, useState } from 'react';
import { Button } from '@material-ui/core';
import FitbitIcon from '@mui/icons-material/Fitbit';
import parse from 'html-react-parser';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ISectionLayoutModel } from '../../interfaces/section-layout.model';
import './section-layout.component.scss';
import { setServiceAction } from '../../actions/enterprise';
import VideoComponent from '../../components/common/video/video.component';
import { VIMEO_VIDEOIDS } from '../../constants/vimeo-videoids';

const SectionLayoutComponent: React.FC<ISectionLayoutModel> = (
  props: ISectionLayoutModel,
): ReactElement => {
  const {
    title,
    colorCode,
    description,
    features,
    image,
    imageAlign,
    buttonText,
    services,
    count,
    isShowMore,
    buttonColor,
    isHideButton,
    icon,
    descriptiontwo,
    buttonLink,
    useColor,
    descriptionthree,
    isShowVideo,
    vimeoVideoId
  } = props;
  const [showMore, setShowMore] = useState(false);
  const gridColumn = imageAlign === 'left' ? '2 / 3' : 'auto';
  const gridRow = imageAlign === 'left' ? '1/ 2' : 'auto';
  const loadCount = showMore ? services.length : count;

  const history = useHistory();
  const routeChange = (url: string, name?: string, target?: string) => {
    if (name) {
      props.setService(name);
    }
    if (target === '_blank') {
      window.open(url);
    } else if (target === '_self') {
      history.push(url);
    }
  };

  const showMoreContainer = (
    <div className="show-more">
      {!showMore ? (
        <Button
          variant="text"
          onClick={() => setShowMore(true)}
          style={{ color: useColor ? colorCode : '' }}
        >
          VIEW ALL SERVICES ({services ? services.length : ''})
        </Button>
      ) : (
        <Button
          variant="text"
          onClick={() => setShowMore(false)}
          style={{ color: useColor ? colorCode : '' }}
        >
          VIEW LESS
        </Button>
      )}
    </div>
  );

  const buttonContainer = (
    <div className="button-container">
      <button
        type="button"
        className={`btn-basic`}
        onClick={() => routeChange(buttonLink, '', '_self')}
        style={{
          backgroundColor: colorCode,
          color: buttonColor ? buttonColor : '',
        }}
      >
        {buttonText}
      </button>
    </div>
  );
  return (
    <section className="section-layout">
      <div
        className="col-one"
        style={{
          gridColumn: gridColumn,
          justifySelf: gridRow !== 'auto' ? 'end' : 'start',
        }}
      >
        <div className="section-title">
          <h1>
            {title}{' '}
            {isShowVideo ? (
              <VideoComponent videoId={vimeoVideoId} />
            ) : (
              ''
            )}
          </h1>

          {features && features.length ? (
            <div className="section-subtitle-container">
              {features.map((feature) => {
                return (
                  <div className="features" key={feature.id}>
                    <span
                      style={{
                        backgroundColor: colorCode,
                      }}
                    ></span>
                    <h3>{feature.title}</h3>
                  </div>
                );
              })}
            </div>
          ) : (
            ''
          )}
          <div className="section-mobile-image">
            <img src={image} alt={`${title} logo`} />
          </div>
        </div>

        <div className="hero-description">
          <p>{parse(description)}</p>
          {descriptiontwo ? <p>{descriptiontwo}</p> : ''}
          {descriptionthree ? <p>{descriptionthree}</p> : ''}
        </div>

        {services && services.length ? (
          <div className="services-container">
            {services.slice(0, loadCount).map((service) => {
              return (
                <div className="service" key={service.id}>
                  {icon ? (
                    <FitbitIcon
                      fontSize="large"
                      style={{
                        color: useColor ? colorCode : '',
                        fontSize: '41px',
                        marginBottom: '8px',
                        cursor: 'pointer',
                      }}
                      onClick={() =>
                        routeChange(service.link, service.name, service.target)
                      }
                    />
                  ) : (
                    ''
                  )}
                  <h3
                    className="service-name"
                    onClick={() =>
                      routeChange(service.link, service.name, service.target)
                    }
                  >
                    {service.title}
                  </h3>

                  <p>{service.description}</p>
                </div>
              );
            })}
            {isShowMore ? showMoreContainer : ''}
          </div>
        ) : (
          ''
        )}
        {!isHideButton ? buttonContainer : ''}
      </div>

      <div
        className="col-two"
        style={{
          gridRow: gridRow,
          justifySelf: gridRow !== 'auto' ? 'start' : 'center',
        }}
      >
        <div className="section-image">
          <img src={`${image}`} alt={`${title} logo`} />
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setService: (serviceName) => dispatch(setServiceAction(serviceName)),
  };
};

export default connect(null, mapDispatchToProps)(SectionLayoutComponent);
