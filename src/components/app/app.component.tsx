import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import DataSecurityPage from '../../pages/data-security/data-security-page';
import BrandingPage from '../../pages/branding/branding-page';
import LandingPage from '../../pages/landing/landing-page';
import SmbPage from '../../pages/smb/smb-page';
import StartupPage from '../../pages/startup/startup-page';
import ConsultationPage from '../../pages/consultation/consultation-page';
import EnterprisePage from '../../pages/enterprise/enterprise-page';
import '../../assets/scss/styles.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/data-security">
          <DataSecurityPage />
        </Route>
        <Route path="/branding">
          <BrandingPage />
        </Route>
        <Route path="/smb">
          <SmbPage />
        </Route>
        <Route path="/startup">
          <StartupPage />
        </Route>
        <Route path="/consultation">
          <ConsultationPage />
        </Route>
        <Route path="/enterprise">
          <EnterprisePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
