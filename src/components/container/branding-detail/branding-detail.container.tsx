import React, { ReactElement } from 'react';
import { IBrandingQuoteModel } from '../../../interfaces/branding-quote.model';

import GetQuoteButton from '../../form-element/get-quote-button';
import './branding-detail.container.scss';

const BrandingDetailContainer = (props: IBrandingQuoteModel): ReactElement => {
  const { handleSubmit, quoteState, errors, onSubmit } = props;
  return (
    <div className="branding-container">
      <div className="technical-info">
        <h4>Technical work </h4>
        <span>Pick words/adjectives that best describe your business</span>
        <div className="word-grid">
          <div className="box"> Word </div>
          <div className="box"> Word</div>
          <div className="box"> Word</div>
          <div className="box"> Word</div>
          <div className="box"> Word </div>
          <div className="box"> Word</div>
          <div className="box"> Word</div>
          <div className="box"> Word</div>
          <div className="box"> Word </div>
          <div className="box"> Word</div>
          <div className="box"> Word</div>
          <div className="box"> Word</div>
        </div>
      </div>
      <div className="color-palette">
        <span>Pick color palette </span>
        <div className="color-picker-grid">
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
          <div className="color-picker-image"> </div>
        </div>
      </div>
      <div className="pick-logo">
        <span>Pick logos</span>
        <div className="logo-grid">
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
          <div className="logo-picker"> </div>
        </div>
      </div>
      <div className="price-container">
        <h4> Starting from</h4>
        <span className="price">$500</span>
        <div>
          <GetQuoteButton
            quoteState={quoteState}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandingDetailContainer;
