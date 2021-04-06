import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { PayPalButton } from 'react-paypal-button-v2';

import './cart-container.scss';
import {
  removeFromCart,
  getCartItems,
  emptyCart,
  updateCartItems,
} from '../../../actions/cart';
import { IProductDetails } from '../../../interfaces/cart-state.model';
import { constants } from '../../../constants';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green } from '@material-ui/core/colors';
import LoaderComponent from '../../common/loader/loader.component';

const sumPropsValue = (items, prop) => items.reduce((a, b) => a + b[prop], 0);

const CartContainer: React.FC = (props: any): ReactElement => {
  const [paymentState, setPaymentState] = useState({
    isPaymentFailed: false,
    isPaymentSuccess: false,
    name: '',
    amount: 0,
    paymentId: '',
  });
  useEffect(() => {
    props.fetchAllCartItems();
  }, []);

  const removeItem = (product: IProductDetails) => {
    props.removeFromCart(product);
  };

  const clickHandler = (e, product) => {
    const obj = Object.assign({}, product);
    if (e && e.target && e.target.checked) {
      obj.price = parseInt(obj.yearlyPrice.toFixed(2));
      props.updateCartItems(obj);
    } else {
      obj.price = parseInt(obj.monthlyPrice);
      props.updateCartItems(obj);
    }
  };

  //Update payment status in state

  const updatePaymentStatus = (paymentDetail, orderId) => {
    const { status, purchase_units, payer } = paymentDetail;
    if (status === constants.COMPLETED) {
      const name = payer && payer.name && payer.name.given_name;
      setPaymentState((prevState) => {
        return {
          ...prevState,
          isPaymentSuccess: true,
          amount: 1.0,
          name: name,
          paymentId: orderId,
        };
      });
    }
  };

  const { products } = props;
  const { isPaymentSuccess, paymentId, isPaymentFailed, name } = paymentState;

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
                    {product.yearlyPrice ? (
                      <div className="yearly-price">
                        <input
                          type="checkbox"
                          onClick={(e) => clickHandler(e, product)}
                        />
                        <span>
                          ${product.yearlyPrice.toFixed(2)} &nbsp;{' '}
                          <span>
                            Pay 12 months in advance for a 12% Discount
                          </span>
                        </span>
                      </div>
                    ) : (
                      ''
                    )}
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
                  props.emptyCart();
                  updatePaymentStatus(details, data.orderID);

                  // // OPTIONAL: Call your server to save the transaction
                  // return fetch('/paypal-transaction-complete', {
                  //   method: 'post',
                  //   body: JSON.stringify({
                  //     orderID: data.orderID,
                  //   }),
                  // });
                }}
                onError={(details, data) => {
                  console.log('details', details);
                  updatePaymentStatus(details, data.orderID);
                }}
                options={{
                  clientId: 'sb',
                  merchantId: '3S3P6MPUEKNZG',
                }}
              />
            </div>
            <hr />
          </div>
        </div>
      ) : !isPaymentSuccess ? (
        <div className="cart-empty-container">
          <p className="cart-empty">Your Cart is empty</p>
        </div>
      ) : (
        ''
      )}
      {isPaymentSuccess ? (
        <div className="payment-success">
          <CheckCircleIcon style={{ color: green[500], fontSize: 48 }} />
          <h3>Payment Complete</h3>
          <p className="success-description">
            Your payment is received and we will contact you soon.
          </p>
          <h4>Order Number</h4>
          <span className="order-number">{paymentId}</span>
        </div>
      ) : (
        ''
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
    updateCartItems: (product) => dispatch(updateCartItems(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
