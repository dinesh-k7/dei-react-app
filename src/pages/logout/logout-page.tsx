import React, { Fragment, ReactElement } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoaderComponent from '../../components/common/loader/loader.component';
import { clearUserData } from '../../actions/user';

const LogoutPage: React.FC = (props: any): ReactElement => {
  const history = useHistory();
  props.clearUserData();
  setTimeout(() => {
    history.push('/');
  }, 1000);

  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'Logout page',
    },
  });
  return (
    <Fragment>
      <LoaderComponent />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearUserData: () => dispatch(clearUserData()),
  };
};

export default connect(null, mapDispatchToProps)(LogoutPage);
