import React, { ReactElement } from 'react';

import { calculateMonthlyAmount } from '../../utils';
import './monthly-price.component.scss';
import '../../assets/scss/styles.scss';
import GetQuoteButton from '../form-element/get-quote-button';

// eslint-disable-next-line
const MonthlyPriceComponent = ({
  handleSubmit,
  size,
  onSubmit,
  errors,
  quoteState,
}: any): ReactElement => {
  const monthlyPremium = calculateMonthlyAmount(size);
  return (
    <div className="monthly-price">
      <div className="sticky-content">
        <h4>Approximate service cost</h4>
        <div className="price-container">
          <span className="price">
            {!monthlyPremium && size
              ? 'TBD'
              : monthlyPremium
              ? monthlyPremium.toFixed(2)
              : 0}
          </span>
          {!monthlyPremium && size ? '' : <span className="label">/mo</span>}
        </div>
      </div>

      <GetQuoteButton
        quoteState={quoteState}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default MonthlyPriceComponent;
