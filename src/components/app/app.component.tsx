import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import DataSecurityPage from '../../pages/data-security/data-security-page';
import BrandingPage from '../../pages/branding/branding-page';
import '../../assets/scss/styles.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <DataSecurityPage />
        </Route>
        <Route path="/branding">
          <BrandingPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
