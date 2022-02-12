import React, { ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
const ProtectedRoute = ({
  component: Component,
  user,
  path,
  ...rest
}: any): ReactElement => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user || path === '/sign-in') {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
