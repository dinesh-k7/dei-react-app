import React, { Fragment, ReactElement } from 'react';

import CartContainer from '../../components/container/cart-container/cart-container';
import './cart-page.scss';

const CartPage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <section className="cart-page-grid">
        <div className="cart-title">
          <h1>Cart</h1>
          <div className="hero-subtitle-container"></div>
        </div>
        <CartContainer />
      </section>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default CartPage;
