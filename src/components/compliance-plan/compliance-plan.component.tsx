import React, { Fragment, ReactElement, useState } from 'react';
//import { PayPalButton } from 'react-paypal-button-v2';
import { connect } from 'react-redux';
import { getPaypalPlans } from '../../actions/config';
import { messages, nistPlans, hippaPlans } from '../../constants';
import { SDWANFormData } from '../../constants/form-data/sdwan-form';
//import LoaderComponent from '../common/loader/loader.component';
import PaymentFailureComponent from '../common/payment-failure/payment-failure.component';
// import PaymentSuccessComponent from '../common/payment-success/payment-success.component';
import EnterpriseQuoteComponent from '../enterprise-quote/enterprise-quote.component';

import hippaLC from '../../assets/images/HIPAA_LP.png';
import cyberInsurance from '../../assets/images/cyber_insurance.png';

import './compliance-plan.component.scss';

const CompliancePlanComponent: React.FC<any> = (): ReactElement => {
  //const [paypalSDKReady, setPaypalSDKReady] = useState(false);
  const [paymentState] = useState({
    isPaymentFailed: false,
    isPaymentSuccess: false,
    name: '',
    amount: 0,
    paymentId: '',
  });

  // useEffect(() => {
  //   const {
  //     HIPPA_PAYPAL_PRODUCT_ID,
  //     NIST_PAYPAL_PRODUCT_ID,
  //     HIPPA,
  //     NIST,
  //   } = constants;
  //   // props.getPaypalPlans(HIPPA_PAYPAL_PRODUCT_ID, HIPPA);
  //   //props.getPaypalPlans(NIST_PAYPAL_PRODUCT_ID, NIST);
  // }, []);

  //Update payment status in state

  // const updatePaymentStatus = (paymentDetail, orderId) => {
  //   const { status, payer } = paymentDetail;
  //   if (status === constants.COMPLETED) {
  //     const name = payer && payer.name && payer.name.given_name;
  //     setPaymentState((prevState) => {
  //       return {
  //         ...prevState,
  //         isPaymentSuccess: true,
  //         name: name,
  //         paymentId: orderId,
  //       };
  //     });
  //   } else {
  //     setPaymentState((prevState) => {
  //       return {
  //         ...prevState,
  //         isPaymentFailed: true,
  //       };
  //     });
  //   }
  // };

  const { isPaymentFailed } = paymentState;
  // const { isLoading } = props;

  return (
    <Fragment>
      <section className="compliance-section">
        <div className="nist-container">
          <div className="nist-title">
            <h1>NIST CSF/GDPR/PIPEDA/CMMC Compliance Manager</h1>
          </div>
          <div className="devices-section">
            {nistPlans && nistPlans.length
              ? nistPlans.map((plan) => {
                  return (
                    <div className="device-detail" key={plan.id}>
                      <div className="plan-title">
                        <b>{plan.name_one}</b>
                        <b> {plan.name_two} </b>
                      </div>
                      <div className="plan-description">
                        <p className="para-normal para-description">Monthly</p>
                        <p
                          className="para-normal para-description"
                          style={{ marginTop: '0px' }}
                        >
                          Services per Company
                        </p>
                        <span className="price">{`$${plan.price} USD`}</span>
                        <span className="price">+</span>
                        <span className="price">
                          ${plan.setup_price} Setup fee
                        </span>
                        <br />
                        <br />
                        {plan.total_cycles ? (
                          <span className="para-normal">
                            Billed for {plan.total_cycles} months
                          </span>
                        ) : (
                          ''
                        )}
                        <ul>
                          {plan.features.map((f, idx) => {
                            return (
                              <li
                                key={f.id}
                                className={idx === 5 ? 'feature' : ''}
                              >
                                {f.description}
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* <div className="subscribe-button">
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
                                  : process.env
                                      .REACT_APP_PAYPAL_SANDBOX_CLIENTID,
                            }}
                          />
                        ) : (
                          ''
                        )}
                      </div>
                    */}
                    </div>
                  );
                })
              : ''}
          </div>
        </div>

        {/* Hippa container section starts */}
        <div className="hippa-container">
          <img src={hippaLC} alt="HIPPA" className="hippa-image" />
          <div className="hippa-title">
            <h1>HIPAA Compliance Manager</h1>
          </div>
          <div className="devices-section">
            {hippaPlans && hippaPlans.length
              ? hippaPlans.map((plan) => {
                  return (
                    <div className="device-detail" key={plan.id}>
                      <div className="plan-title">
                        <b>{plan.name_one}</b>
                        <b> {plan.name_two} </b>
                      </div>
                      <div className="plan-description">
                        <p className="para-normal para-description">Monthly</p>
                        <p
                          className="para-normal para-description"
                          style={{ marginTop: '0px' }}
                        >
                          Services per Practitioner
                        </p>
                        <span className="price">{`$${plan.price} USD`}</span>
                        <span className="price">+</span>
                        <span className="price">
                          ${plan.setup_price} Setup fee
                        </span>
                        <br />
                        <br />
                        {plan.total_cycles ? (
                          <span className="para-normal">
                            Billed for {plan.total_cycles} months
                          </span>
                        ) : (
                          ''
                        )}
                        <ul>
                          {plan.features.map((f, indx) => {
                            return (
                              <li
                                className={indx === 5 ? 'feature' : ''}
                                key={f.id}
                              >
                                {f.description}
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* <div className="subscribe-button">
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
                                  : process.env
                                      .REACT_APP_PAYPAL_SANDBOX_CLIENTID,
                            }}
                          />
                        ) : (
                          ''
                        )}
                      </div> */}
                    </div>
                  );
                })
              : ''}
          </div>
        </div>

        <img src={cyberInsurance} alt="Cyber Insurance" className="ci-image" />

        {/* {isLoading ? <LoaderComponent /> : ''} */}
      </section>
      <EnterpriseQuoteComponent
        fromPage={`compliance`}
        formFields={SDWANFormData}
      />
      {/* {isPaymentSuccess ? (
        <PaymentSuccessComponent
        amount={amount}
          paymentId={paymentId}
          description={messages.payment_success_message}
        />
      ) : (
        ''
      )} */}

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
    getPaypalPlans: (productId, action) =>
      dispatch(getPaypalPlans(productId, action)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompliancePlanComponent);
