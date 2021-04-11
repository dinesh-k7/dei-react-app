import React, { Fragment, ReactElement } from 'react';

import CartContainer from '../../components/container/cart-container/cart-container';
import './cart-page.scss';

const CartPage: React.FC = (): ReactElement => {
  return (
    <Fragment>
      <section className="cart-page-grid">
        <CartContainer />
      </section>
      <div className="landing-border"></div>
    </Fragment>
  );
};

export default CartPage;
