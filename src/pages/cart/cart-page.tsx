import React, { Fragment, ReactElement } from 'react';

import { PayPalButton } from 'react-paypal-button-v2';

import './cart-page.scss';

const CartPage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <section className="cart-page-grid">
        <div className="cart-title">
          <h1>Cart</h1>
          <div className="hero-subtitle-container"></div>
        </div>
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-item">
              <div className="cart-item-detail">
                <p className="product-name">Data Security</p>
                <p className="product-quantity">Quantity: 1</p>
                <p className="product-price">Price: $99.99</p>
              </div>
              <div className="cart-button-container">
                <button>Remove</button>
              </div>
            </div>

            <div className="cart-item">
              <div className="cart-item-detail">
                <p className="product-name">Data Security</p>
                <p className="product-quantity">Quantity: 1</p>
                <p className="product-price">Price: $99.99</p>
              </div>
              <div className="cart-button-container">
                <button>Remove</button>
              </div>
            </div>
          </div>

          <div className="cart-total">
            <div className="cart-total-items">
              Total Items:
              <p>
                <b>2</b>
              </p>
            </div>
            <div className="cart-total-amount">
              Total Amount:
              <p>
                <b>$199.98</b>
              </p>
            </div>
            <br />
            <div>
              <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  // alert(
                  //   'Transaction completed by ' + details.payer.name.given_name,
                  // );
                  // // OPTIONAL: Call your server to save the transaction
                  // return fetch('/paypal-transaction-complete', {
                  //   method: 'post',
                  //   body: JSON.stringify({
                  //     orderID: data.orderID,
                  //   }),
                  // });
                }}
              />
            </div>
            <hr />
          </div>
        </div>
      </section>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default CartPage;
