import React, { ReactElement } from 'react';

const ErrorMessageContainer: React.FC = (quoteError: any): ReactElement => {
  const errorKeys = Object.keys(quoteError);
  return (
    <div className="error-messages">
      <ul>
        {errorKeys && errorKeys.length
          ? errorKeys.map((objKey, idx) => {
              return (
                <li key={idx}>
                  {quoteError[objKey] && quoteError[objKey].message}
                </li>
              );
            })
          : ''}
      </ul>
    </div>
  );
};

export default ErrorMessageContainer;
