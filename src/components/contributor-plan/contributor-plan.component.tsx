import React, { ReactElement, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { connect } from 'react-redux';

import './contributor-plan.component.scss';

const ContributorPlanComponent: React.FC<any> = (): ReactElement => {
  const [paypalSDKReady, setPaypalSDKReady] = useState(false);
  return (
    <section className="contributor-section">
      <div className="subscription-plan">
        <div className={`plan-row`}>
          <div className="plan-title">
            <span>Silver Contributor</span>
          </div>
          <div className="plan-description-one">
            <p className="para-normal para-description">Monthly</p>
            <span className="price">$10</span> <br />
            <span className="para-normal">Billed for 12 months</span>
            <p className="para-normal">
              Subscription will be paused automatically, if billing cycle is
              missed for 2 months.
            </p>
          </div>

          <div className="subscribe-button">
            <PayPalButton
              shippingPreference="NO_SHIPPING"
              onButtonReady={() => setPaypalSDKReady(true)}
              onSuccess={(details, data) => {
                console.log('dataa', data, details);
                // // OPTIONAL: Call your server to save the transaction
                // return fetch('/paypal-transaction-complete', {
                //   method: 'post',
                //   body: JSON.stringify({
                //     orderID: data.orderID,
                //   }),
                // });
              }}
              createSubscription={(data, actions) => {
                return actions.subscription.create({
                  plan_id: 'P-00645188CD6228332MCP53QQ',
                });
              }}
              onError={(details, data) => {
                console.log('details', details, data);
              }}
              style={{
                shape: 'rect',
                color: 'blue',
                label: 'subscribe',
              }}
              options={{
                vault: true,
                clientId: 'sb',
                merchantId: '3S3P6MPUEKNZG',
              }}
            />
          </div>
        </div>
      </div>

      <div className="subscription-plan">
        <div className={`plan-row`}>
          <div className="plan-title">
            <span>Gold Contributor</span>
          </div>
          <div className="plan-description-one">
            <p className="para-normal para-description">Monthly</p>
            <span className="price">$19</span> <br />
            <span className="para-normal">Billed for 12 months</span>
            <p className="para-normal">
              Subscription will be paused automatically, if billing cycle is
              missed for 2 months.{' '}
            </p>
          </div>

          <div className="subscribe-button">
            {paypalSDKReady ? (
              <PayPalButton
                shippingPreference="NO_SHIPPING"
                onSuccess={(details, data) => {
                  console.log('dataa', data, details);
                  // // OPTIONAL: Call your server to save the transaction
                  // return fetch('/paypal-transaction-complete', {
                  //   method: 'post',
                  //   body: JSON.stringify({
                  //     orderID: data.orderID,
                  //   }),
                  // });
                }}
                createSubscription={(data, actions) => {
                  return actions.subscription.create({
                    plan_id: 'P-7LF88802MJ4268053MCP6NGA',
                  });
                }}
                onError={(details, data) => {
                  console.log('details', details, data);
                }}
                style={{
                  shape: 'rect',
                  color: 'blue',
                  label: 'subscribe',
                }}
                options={{
                  vault: true,
                  clientId: 'sb',
                  merchantId: '3S3P6MPUEKNZG',
                }}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      <div className="subscription-plan">
        <div className={`plan-row`}>
          <div className="plan-title">
            <span>Platinum Contributor</span>
          </div>
          <div className="plan-description-one">
            <p className="para-normal para-description">Monthly</p>
            <span className="price">$30</span> <br />
            <span className="para-normal">Billed for 12 months</span>
            <p className="para-normal">
              Subscription will be paused automatically, if billing cycle is
              missed for 2 months.
            </p>
          </div>

          <div className="subscribe-button">
            {paypalSDKReady ? (
              <PayPalButton
                shippingPreference="NO_SHIPPING"
                onSuccess={(details, data) => {
                  console.log('dataa', data, details);
                  // // OPTIONAL: Call your server to save the transaction
                  // return fetch('/paypal-transaction-complete', {
                  //   method: 'post',
                  //   body: JSON.stringify({
                  //     orderID: data.orderID,
                  //   }),
                  // });
                }}
                createSubscription={(data, actions) => {
                  return actions.subscription.create({
                    plan_id: 'P-1EK089283N940084PMCP6OPY',
                  });
                }}
                onError={(details, data) => {
                  console.log('details', details, data);
                }}
                style={{
                  shape: 'rect',
                  color: 'blue',
                  label: 'subscribe',
                }}
                options={{
                  vault: true,
                  clientId: 'sb',
                  merchantId: '3S3P6MPUEKNZG',
                }}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </section>
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
