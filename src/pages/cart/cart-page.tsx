import React, { Fragment, ReactElement } from 'react';

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
            <div className="cart-item-detail">
              <p>Data Security</p>
              <p>Price: $99.99</p>
            </div>
            <div className="cart-button-container">
              <button>Remove</button>
            </div>
          </div>

          <div className="cart-total"> Cart total</div>
        </div>
      </section>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default CartPage;
