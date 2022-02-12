import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { PayPalButton } from 'react-paypal-button-v2';

import './cart-container.scss';
import {
  removeFromCart,
  getCartItems,
  emptyCart,
  updateCartItems,
  updatePaymentTransaction,
} from '../../../actions/cart';
import { IProductDetails } from '../../../interfaces/cart-state.model';
import { constants, messages } from '../../../constants';
import PaymentSuccessComponent from '../../common/payment-success/payment-success.component';
import PaymentFailureComponent from '../../common/payment-failure/payment-failure.component';
import { useHistory } from 'react-router-dom';

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
    // trackPaymentTransaction();
  }, []);

  // Callback function to process order success transaction
  const trackPaymentTransaction = (paymentDetail, orderId) => {
    const user = localStorage.getItem('userData');
    if (props.products && props.products.length && user) {
      const { userId } = JSON.parse(user);
      const { status, update_time } = paymentDetail;
      const order = {
        userId,
        paypalOrderId: orderId,
        status,
        dateTime: update_time,
      };
      const orderDetails = {
        products: props.products,
        order,
      };

      props.updatePaymentTransaction(orderDetails);
      props.emptyCart();
    }
  };

  const removeItem = (product: IProductDetails) => {
    props.removeFromCart(product);
  };

  const clickHandler = (e, product) => {
    const obj = Object.assign({}, product);
    if (e && e.target && e.target.checked) {
      obj.price = parseFloat(obj.yearlyPrice);
      props.updateCartItems(obj);
    } else {
      obj.price = parseFloat(obj.monthlyPrice);
      props.updateCartItems(obj);
    }
  };

  //Update payment status in state

  const updatePaymentStatus = (paymentDetail, orderId) => {
    const { status, payer } = paymentDetail;
    if (status === constants.COMPLETED) {
      const name = payer && payer.name && payer.name.given_name;

      trackPaymentTransaction(paymentDetail, orderId);
      setPaymentState((prevState) => {
        return {
          ...prevState,
          isPaymentSuccess: true,
          amount: 1.0,
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

  const { products, settings } = props;
  const { isPaymentSuccess, paymentId, isPaymentFailed } = paymentState;
  const user = localStorage.getItem('userData');
  const history = useHistory();

  // check Data sentinels settings
  let isEnabled = false;
  if (settings && settings.length) {
    const key = 'enableSandbox';
    const config = settings.find((set) => set.name === key);
    if (config?.value) {
      isEnabled = true;
    }
  }
  return (
    <Fragment>
      {products && products.length ? (
        <div className="cart-container">
          <div className="cart-title horizontal-line">
            <h1>Shopping Cart</h1>
          </div>
          <div className="cart-items">
            <div className="cart-header">
              <div>Name</div>
              <div>Price</div>
              <div>Quantity</div>
              <div></div>
            </div>

            {products.map((product, idx) => {
              return (
                <div className="cart-item" key={idx}>
                  <div className="item-name">
                    {product.description}

                    {product.yearlyPrice ? (
                      <div className="yearly-price">
                        <input
                          type="checkbox"
                          onClick={(e) => clickHandler(e, product)}
                        />
                        <span>
                          Billed ${product.yearlyPrice.toFixed(2)} &nbsp;every
                          12 months <br />
                          <span>At 8.5% Discount</span>
                        </span>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="item-price">
                    {product.additional_fee
                      ? `${product.price.toFixed(
                          2,
                        )} + ${product.additional_fee.toFixed(2)}`
                      : `${product.price.toFixed(2)}`}

                    {product.yearlyPrice ? ' USD/mo' : ' USD'}
                  </div>
                  <div className="item-quantity">{product.quantity}</div>
                  <div className="item-action">
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => removeItem(product)}
                    >
                      X
                    </span>
                  </div>
                </div>
              );
            })}
            <div style={{ borderBottom: '1px solid #000' }}></div>
          </div>

          {user ? (
            <div className="cart-summary">
              <div className="cart-summary-header">
                <div>Order Summary</div>
                <div> {products.length} items</div>
              </div>
              {products.map((product) => {
                return (
                  <div className="cart-summary-item" key={product.id}>
                    <div>{product.description}</div>
                    <div>
                      {product.additional_fee
                        ? `${(product.price + product.additional_fee).toFixed(
                            2,
                          )} USD`
                        : `${product.price.toFixed(2)} USD`}
                    </div>
                  </div>
                );
              })}
              <div className="cart-summary-item">
                <div className="cart-total">TOTAL</div>
                <div>${sumPropsValue(products, 'price').toFixed(2)} USD</div>
              </div>
              <div className="paypal-button">
                <PayPalButton
                  shippingPreference="NO_SHIPPING"
                  amount={
                    isEnabled
                      ? '0.01'
                      : sumPropsValue(products, 'price').toFixed(2)
                  }
                  onSuccess={(details, data) => {
                    updatePaymentStatus(details, data.orderID);
                  }}
                  onError={(details, data) => {
                    updatePaymentStatus(details, data.orderID);
                  }}
                  options={{
                    clientId: isEnabled
                      ? process.env.REACT_APP_PAYPAL_SANDBOX_CLIENTID
                      : process.env.REACT_APP_PAYPAL_LIVE_CLIENTID,
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="sign-in-section">
              <p>Please login to checkout</p>
              <button
                className="btn-basic"
                onClick={() => history.push('sign-in')}
              >
                Sign In
              </button>
              <p className="create-account">
                Create an Account <a href="sign-up">here</a>
              </p>
            </div>
          )}
        </div>
      ) : !isPaymentSuccess ? (
        <div className="cart-empty-container">
          <p className="cart-empty">Your Cart is empty</p>
        </div>
      ) : (
        ''
      )}

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
  const { cartReducer, configReducer } = state;
  return {
    products: cartReducer.products,
    settings: configReducer.settings,
    isLoading: configReducer.isLoading,
    error: configReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: () => dispatch(getCartItems()),
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    emptyCart: () => dispatch(emptyCart()),
    updateCartItems: (product) => dispatch(updateCartItems(product)),
    updatePaymentTransaction: (orderDetails) =>
      dispatch(updatePaymentTransaction(orderDetails)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
