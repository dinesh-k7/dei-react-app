import React, { Fragment, ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import ConfigFormComponent from '../../components/config-form/config-form.component';
import { configFormData } from '../../constants/form-data/config-form';
import HeroContainer from './container/hero/hero-container';
import { getUser } from '../../actions/user';
import NotFoundPage from '../not-found/not-found-page';

const ConfigPage: React.FC = (props: any): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'DEI - Config Page ',
    },
  });
  const history = useHistory();
  const { getUser, isAdmin } = props;

  // on Component mount, call dispatch get user
  useEffect(() => {
    // Get userId from local storage
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { userId } = JSON.parse(userData);
      getUser(userId);
    } else {
      history.push('/not-found');
    }
  }, []);

  return (
    <Fragment>
      {isAdmin ? (
        <>
          <HeroContainer />

          <ConfigFormComponent formFields={configFormData} />
        </>
      ) : (
        <NotFoundPage page={`config`} />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { userReducer } = state;
  return { ...userReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (userId) => dispatch(getUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPage);
