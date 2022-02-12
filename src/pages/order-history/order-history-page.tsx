import React, { Fragment, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

import { getOrders } from '../../actions/user';
import LoaderComponent from '../../components/common/loader/loader.component';
import './order-history-page.scss';

// Google page event track
window['dataLayer'].push({
  event: 'pageview',
  page: {
    url: window.location.href,
    title: 'Order History page',
  },
});

const OrderHistoryPage: React.FC = (props: any): ReactElement => {
  const { getOrders, orders, isLoading } = props;

  useEffect(() => {
    // Get userId from local storage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { userId } = JSON.parse(userData);
      getOrders(userId);
    }
  }, []);

  return (
    <Fragment>
      <section className="order-history-section">
        {orders && orders.length ? <h3>Order History</h3> : ''}
        {orders && !orders.length && isLoading ? <LoaderComponent /> : ''}
        {orders && orders.length
          ? orders.map((order, idx) => {
              return (
                <div className="order-history-row" key={idx}>
                  <div className="order-history-header">
                    <div>
                      Ordered <br />
                      {order.date}
                    </div>
                    <div>
                      {order.status === 'COMPLETED' ? 'Completed' : 'Failed'}
                    </div>
                  </div>
                  <div className="order-item">
                    <div>{order.itemDescription}</div>
                    <div>
                      ${order.price.toFixed(2)} <span>USD</span>
                    </div>
                  </div>
                  <div className="order-number">Order Id: {order.orderId}</div>
                </div>
              );
            })
          : ''}
        {orders && !orders.length && !isLoading ? (
          <div className="order-history-row no-order"> No Orders found</div>
        ) : (
          ''
        )}
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { userReducer } = state;
  return { ...userReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (userId) => dispatch(getOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryPage);
