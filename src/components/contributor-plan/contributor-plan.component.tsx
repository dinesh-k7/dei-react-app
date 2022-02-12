import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { connect } from 'react-redux';
import { getPaypalPlans } from '../../actions/config';
import { constants, messages } from '../../constants';
import LoaderComponent from '../common/loader/loader.component';
import PaymentFailureComponent from '../common/payment-failure/payment-failure.component';
import PaymentSuccessComponent from '../common/payment-success/payment-success.component';

import './contributor-plan.component.scss';

const ContributorPlanComponent: React.FC<any> = (props: any): ReactElement => {
  const [paypalSDKReady, setPaypalSDKReady] = useState(false);
  const [paymentState, setPaymentState] = useState({
    isPaymentFailed: false,
    isPaymentSuccess: false,
    name: '',
    amount: 0,
    paymentId: '',
  });

  useEffect(() => {
    props.getPaypalPlans(constants.CONTRIBUTOR_PAYPAL_PRODUCT_ID);
  }, []);

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
  const { isLoading, plans } = props;

  return (
    <Fragment>
      <section className="contributor-section">
        {plans && plans.length
          ? plans.map((plan, index) => {
              return (
                <div className="subscription-plan" key={plan.id}>
                  <div className={`plan-row`}>
                    <div className="plan-title">
                      <span>{plan.name}</span>
                    </div>
                    <div className="plan-description-one">
                      <p className="para-normal para-description">Monthly</p>
                      <span className="price">{`$${plan.price} USD`}</span>
                      <br />
                      {plan.total_cycles ? (
                        <span className="para-normal">
                          Billed for {plan.total_cycles} months
                        </span>
                      ) : (
                        ''
                      )}
                      {plan.payment_failure_threshold ? (
                        <p className="para-normal">
                          Subscription will be paused automatically, if billing
                          cycle is missed for {plan.payment_failure_threshold}{' '}
                          months.
                        </p>
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
                              plan_id: plan.id,
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
                              process.env.REACT_APP_REGION === 'PROD'
                                ? process.env.REACT_APP_PAYPAL_LIVE_CLIENTID
                                : process.env.REACT_APP_PAYPAL_SANDBOX_CLIENTID,
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

        {isLoading ? <LoaderComponent /> : ''}
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
  const { configReducer } = state;
  return { ...configReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPaypalPlans: (productId) =>
      dispatch(getPaypalPlans(productId, constants.CONTRIBUTOR)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContributorPlanComponent);
