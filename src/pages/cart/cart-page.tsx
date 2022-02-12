import React, { Fragment, ReactElement } from 'react';

import CartContainer from '../../components/container/cart-container/cart-container';
import './cart-page.scss';

const CartPage: React.FC = (): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Cart Page',
    },
  });
  return (
    <Fragment>
      <section className="cart-page-grid">
        <CartContainer />
      </section>
    </Fragment>
  );
};

export default CartPage;
