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
import CartSuccessImage from '../../../assets/images/cart_success_image.svg';
import CartErrorImage from '../../../assets/images/cart_error_image.svg';
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
  }, []);

  const history = useHistory();

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
                  <div className="item-price">${product.price.toFixed(2)}</div>
                  <div className="item-quantity">{product.quantity}</div>
                  <div className="item-action">
                    <span onClick={() => removeItem(product)}>X</span>
                  </div>
                </div>
              );
            })}
            <div style={{ borderBottom: '1px solid #000' }}></div>
          </div>

          <div className="cart-summary">
            <div className="cart-summary-header">
              <div>Order Summary</div>
              <div> {products.length} items</div>
            </div>
            {products.map((product, idx) => {
              return (
                <div className="cart-summary-item" key={product.id}>
                  <div>{product.description}</div>
                  <div>${product.price.toFixed(2)}</div>
                </div>
              );
            })}
            <div className="cart-summary-item">
              <div className="cart-total">TOTAL</div>
              <div>${sumPropsValue(products, 'price').toFixed(2)}</div>
            </div>
            <div className="paypal-button">
              <PayPalButton
                amount="0.01"
                shippingPreference="NO_SHIPPING"
                // onApprove={() => {
                //   console.log('approve');
                // }}
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
          <div>
            <img src={CartSuccessImage} alt={`Payment success image`} />
          </div>
          <div className="payment-success-message">
            <h3>Success</h3>
            <span>Order Number: {paymentId} 12121212 </span>

            <p className="success-description">
              Thank you for your purchase! We are the common denominator! <br />
              Sincerely, <br />
              <br />
              Mr. NWO <br />
              Technology Cultural Ataché
            </p>
            <button
              type="button"
              className="btn-branding"
              onClick={() => history.push('/')}
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        ''
      )}

      {isPaymentFailed ? (
        <div className="payment-error">
          <div>
            <img src={CartErrorImage} alt={`Payment error image`} />
          </div>
          <div className="payment-error-message">
            <h3>Something Went Wrong</h3>

            <p className="error-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              alias nisi doloribus. Quod ut tempore nesciunt beatae magni, atque
              facere voluptates quaerat saepe laboriosam dolores. Harum, sit
              eius? Fugiat, eos.
            </p>
            <button
              type="button"
              className="btn-branding"
              onClick={() => history.push('/cart-page')}
            >
              Try Again
            </button>
          </div>
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
