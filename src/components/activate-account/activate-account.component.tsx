import React, { Fragment, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';

import { activateAccount } from '../../actions/user';
import LoaderComponent from '../common/loader/loader.component';
import { useHistory, useLocation } from 'react-router-dom';

// Google page event track
window['dataLayer'].push({
  event: 'pageview',
  page: {
    url: window.location.href,
    title: 'Order History page',
  },
});

const ActivateAccountComponent: any = (props: any): ReactElement => {
  const {
    activateAccount,

    isLoading,
    isActivationFailed,
    isActivationSuccess,
  } = props;
  const history = useHistory();

  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');
  const id = new URLSearchParams(search).get('id');
  const email = new URLSearchParams(search).get('email');
  const detail = {
    id,
    token,
    email,
  };
  useEffect(() => {
    activateAccount(detail);
  }, []);

  // If activate account is success, then re-direct the user back to login back page
  if (!isLoading && isActivationSuccess) {
    history.push('sign-in?activation=true');
  }

  if (!isLoading && isActivationFailed) {
    history.push('sign-in?activation=false');
  }

  return (
    <Fragment>
      <section className="activate-account-section">
        {isLoading ? <LoaderComponent /> : ''}
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
    activateAccount: (detail) => dispatch(activateAccount(detail)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivateAccountComponent);
