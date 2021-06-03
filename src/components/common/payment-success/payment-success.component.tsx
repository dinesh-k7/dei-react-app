import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import CartSuccessImage from '../../../assets/images/cart_success_image.svg';
import './payment-success.component.scss';

interface IProps {
  paymentId: string;
  description: string;
}

const PaymentSuccessComponent: React.FC<IProps> = (
  props: IProps,
): ReactElement => {
  const history = useHistory();
  const { paymentId, description } = props;
  return (
    <div className="payment-success">
      <div>
        <img src={CartSuccessImage} alt={`Payment success image`} />
      </div>
      <div className="payment-success-message">
        <h3>Success</h3>
        <span>Order Number: {paymentId} </span>

        <p className="success-description">
          {description} <br />
          Sincerely, <br />
          <br />
          Mr. NWO <br />
          Technology Cultural Attach
        </p>
        <button
          type="button"
          className="btn-basic"
          onClick={() => history.push('/')}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessComponent;
