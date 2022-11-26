import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import CartSuccessImage from '../../../assets/images/cart_success_image.svg';
import './payment-success.component.scss';

interface IProps {
  paymentId: string;
  description: string;
  amount: number;
}

const PaymentSuccessComponent: React.FC<IProps> = (
  props: IProps,
): ReactElement => {
  const history = useHistory();
  const { paymentId, description, amount } = props;

  //Google conversion tracking script
  // Google page event track
  window['dataLayer'].push({
    event: 'conversion',
    page: {
      url: window.location.href,
      title: 'DEI®️ - Conversion',
      value: amount,
      currency: 'USD',
      transaction_id: paymentId,
      send_to: 'AW-1054480827/GbkpCNTcta4DELuz6PYD',
    },
  });

  return (
    <div className="payment-success">
      <div>
        <img src={CartSuccessImage} alt={`Payment success`} />
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
