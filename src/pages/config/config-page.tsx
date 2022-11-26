import React, { Fragment, ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import ConfigFormComponent from '../../components/config-form/config-form.component';
import { configFormData } from '../../constants/form-data/config-form';
import HeroContainer from './container/hero/hero-container';
import { getUser } from '../../actions/user';
import NotFoundPage from '../not-found/not-found-page';
import LoaderComponent from '../../components/common/loader/loader.component';
// import { createLoadingSelector } from '../../selectors/selector';

const ConfigPage: React.FC = (props: any): ReactElement => {
  // Google page event track
  window['dataLayer'].push({
    event: 'pageview',
    page: {
      url: window.location.href,
      title: 'DEI®️ - Config Page ',
    },
  });
  const history = useHistory();
  const { getUser, isAdmin, isFetching } = props;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {isFetching ? <LoaderComponent /> : ''}
      {!isFetching && isAdmin ? (
        <>
          <HeroContainer />
          <ConfigFormComponent formFields={configFormData} />
        </>
      ) : (
        ''
      )}
      {isAdmin !== undefined && isAdmin === false ? (
        <NotFoundPage page={`config`} />
      ) : (
        ''
      )}
    </Fragment>
  );
};

// // Show loading on GET_USER_REQUEST
// const loadingSelector = createLoadingSelector(['GET_USER']);

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
