import React, { Fragment, ReactElement, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { connect } from 'react-redux';
import { constants, messages, PLANS } from '../../constants';
import PaymentFailureComponent from '../common/payment-failure/payment-failure.component';
import PaymentSuccessComponent from '../common/payment-success/payment-success.component';

import './contributor-plan.component.scss';

const ContributorPlanComponent: React.FC<any> = (): ReactElement => {
  const [paypalSDKReady, setPaypalSDKReady] = useState(false);
  const [paymentState, setPaymentState] = useState({
    isPaymentFailed: false,
    isPaymentSuccess: false,
    name: '',
    amount: 0,
    paymentId: '',
  });

  //Update payment status in state

  const updatePaymentStatus = (paymentDetail, orderId) => {
    const { status, payer } = paymentDetail;
    if (status === constants.COMPLETED) {
      const name = payer && payer.name && payer.name.given_name;
      setPaymentState((prevState) => {
        return {
          ...prevState,
          isPaymentSuccess: true,
          name: name,
          paymentId: orderId,
        };
      });
    } else {
      setPaymentState((prevState) => {
        return {
          ...prevState,
          isPaymentFailed: true,
        };
      });
    }
  };

  const { isPaymentSuccess, paymentId, isPaymentFailed } = paymentState;

  return (
    <Fragment>
      <section className="contributor-section">
        {PLANS && PLANS.length
          ? PLANS.map((plan, index) => {
              return (
                <div className="subscription-plan" key={plan.id}>
                  <div className={`plan-row`}>
                    <div className="plan-title">
                      <span>{plan.name}</span>
                    </div>
                    <div className="plan-description-one">
                      <p className="para-normal para-description">Monthly</p>
                      <span className="price">
                        {`$${plan.price.toFixed(2)} USD`}
                      </span>
                      <br />
                      {plan.description_one ? (
                        <span className="para-normal">
                          {plan.description_one}
                        </span>
                      ) : (
                        ''
                      )}
                      {plan.description_two ? (
                        <p className="para-normal">{plan.description_two}</p>
                      ) : (
                        ''
                      )}
                    </div>

                    <div className="subscribe-button">
                      {paypalSDKReady || index === 0 ? (
                        <PayPalButton
                          shippingPreference="NO_SHIPPING"
                          onButtonReady={() => setPaypalSDKReady(true)}
                          onSuccess={(details, data) => {
                            updatePaymentStatus(details, data.orderID);
                          }}
                          createSubscription={(data, actions) => {
                            return actions.subscription.create({
                              plan_id: plan.planId,
                            });
                          }}
                          onError={(details, data) => {
                            updatePaymentStatus(details, data.orderID);
                          }}
                          style={{
                            shape: 'rect',
                            color: 'blue',
                            label: 'subscribe',
                          }}
                          options={{
                            vault: true,
                            intent: 'subscription',
                            clientId:
                              'AUPF1TZNCMS_Fm6WpcL06sF8y1zQR1uz5st0PtDKqpvIQcIHnIRGvNboB4mbXOQ1TNXRkrHuAAwrrxYo',
                          }}
                        />
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          : ''}
      </section>
      {isPaymentSuccess ? (
        <PaymentSuccessComponent
          paymentId={paymentId}
          description={messages.payment_success_message}
        />
      ) : (
        ''
      )}

      {isPaymentFailed ? (
        <PaymentFailureComponent
          description={messages.payment_failure_message}
          page={`cart-page`}
        />
      ) : (
        ''
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { userReducer } = state;
  return { ...userReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContributorPlanComponent);
