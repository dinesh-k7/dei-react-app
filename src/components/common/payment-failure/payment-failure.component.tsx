import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import CartErrorImage from '../../../assets/images/cart_error_image.svg';
import './payment-failure.component.scss';

interface IProps {
  description: string;
  page: string;
}

const PaymentFailureComponent: React.FC<IProps> = (
  props: IProps,
): ReactElement => {
  const history = useHistory();
  const { description, page } = props;
  return (
    <div className="payment-error">
      <div>
        <img src={CartErrorImage} alt={`Payment error image`} />
      </div>
      <div className="payment-error-message">
        <h3>Something Went Wrong</h3>

        <p className="error-description">
          {description}
          <br />
          Thank you!
        </p>
        <button
          type="button"
          className="btn-basic"
          onClick={() => history.push(page)}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PaymentFailureComponent;
