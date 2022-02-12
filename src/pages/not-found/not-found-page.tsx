import React, { Fragment, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import './not-found-page.scss';

const NotFoundPage: React.FC<any> = ({ page }: any): ReactElement => {
  const history = useHistory();
  const routeChange = () => {
    history.push('');
  };
  return (
    <Fragment>
      <section className="not-found-section">
        {!page ? (
          <>
            <h3>404</h3>
            <h3>Page Not Found!</h3>
            <p>
              We&apos;re sorry, the page you requested could not be found,Please
              go back to the homepage or contact us at
              support@thenewworldorder.com
            </p>
            <button onClick={routeChange} className="btn-basic">
              Home Page
            </button>
          </>
        ) : (
          <>
            <h3>401</h3>
            <h3>Not Authorized!</h3>
            <p>
              We&apos;re sorry, you are not Authorized to access this page. Your
              activity has been logged in the server. Please go back to the
              homepage.
            </p>
            <button onClick={routeChange} className="btn-basic">
              Home Page
            </button>
          </>
        )}
      </section>
    </Fragment>
  );
};

export default NotFoundPage;
