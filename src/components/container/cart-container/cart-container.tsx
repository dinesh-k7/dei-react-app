import React, { Fragment, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

import { PayPalButton } from 'react-paypal-button-v2';

import './cart-container.scss';
import { removeFromCart, getCartItems, emptyCart } from '../../../actions/cart';
import { IProductDetails } from '../../../interfaces/cart-state.model';

const sumPropsValue = (items, prop) => items.reduce((a, b) => a + b[prop], 0);

const CartContainer: React.FC = (props: any): ReactElement => {
  useEffect(() => {
    props.fetchAllCartItems();
  }, []);

  const removeItem = (product: IProductDetails) => {
    props.removeFromCart(product);
  };

  const { products } = props;
  return (
    <Fragment>
      {products && products.length ? (
        <div className="cart-container">
          <div className="cart-items">
            {products.map((product, idx) => {
              return (
                <div className="cart-item" key={idx}>
                  <div className="cart-item-detail">
                    {/* <p className="product-name">{product.section}</p> */}
                    <p className="package-description">{product.description}</p>
                    <p className="product-quantity">
                      Quantity: {product.quantity}
                    </p>
                    <p className="product-price">
                      Price: ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="cart-button-container">
                    <button onClick={() => removeItem(product)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-total">
            <div className="cart-total-items">
              Total Items:
              <p>
                <b>{products.length}</b>
              </p>
            </div>
            <div className="cart-total-amount">
              Total Amount:
              <p>
                <b> ${sumPropsValue(products, 'price').toFixed(2)}</b>
              </p>
            </div>
            <br />
            <div>
              <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  alert(
                    'Transaction completed by ' + details.payer.name.given_name,
                  );
                  props.emptyCart();
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
      ) : (
        <div className="cart-empty-container">
          <p className="cart-empty">Your Cart is empty</p>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { cartReducer } = state;
  return {
    products: cartReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: () => dispatch(getCartItems()),
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    emptyCart: () => dispatch(emptyCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
