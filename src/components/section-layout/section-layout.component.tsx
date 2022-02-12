import React, { ReactElement, useState } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';

import { ISectionLayoutModel } from '../../interfaces/section-layout.model';
import './section-layout.component.scss';

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
  } = props;
  const [showMore, setShowMore] = useState(false);
  const gridColumn = imageAlign === 'left' ? '2 / 3' : 'auto';
  const gridRow = imageAlign === 'left' ? '1/ 2' : 'auto';
  const loadCount = showMore ? services.length : count;

  const showMoreContainer = (
    <div className="show-more">
      {!showMore ? (
        <Button variant="text" onClick={() => setShowMore(true)}>
          VIEW ALL SERVICES ({services ? services.length - count : ''})
        </Button>
      ) : (
        <Button variant="text" onClick={() => setShowMore(false)}>
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
          <h1>{title}</h1>

          {features && features.length ? (
            <div className="section-subtitle-container">
              {features.map((feature) => {
                return (
                  <div className="features" key={feature.id}>
                    <span style={{ backgroundColor: colorCode }}></span>
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
          <p>{description}</p>
        </div>

        {services && services.length ? (
          <div className="services-container">
            {services.slice(0, loadCount).map((service) => {
              return (
                <div className="service" key={service.id}>
                  {icon ? <img src={icon} alt="service icon" /> : ''}
                  <h3>
                    {service.title}
                    <ChevronRightIcon className="chevron-right" />
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

export default SectionLayoutComponent;
