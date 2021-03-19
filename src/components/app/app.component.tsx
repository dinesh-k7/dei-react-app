import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../common/scroll/scroll-top.component';
import Header from '../common/header/header.component';
import Footer from '../common/footer/footer.component';
import DataSecurityPage from '../../pages/data-security/data-security-page';
import BrandingPage from '../../pages/branding/branding-page';
import LandingPage from '../../pages/landing/landing-page';
import SmbPage from '../../pages/smb/smb-page';
import StartupPage from '../../pages/startup/startup-page';
import ConsultationPage from '../../pages/consultation/consultation-page';
import EnterprisePage from '../../pages/enterprise/enterprise-page';
import SDWANServicePage from '../../pages/enterprise/sdwan-service/sdwan-service.page';
import CableServicePage from '../../pages/enterprise/cable-service/cable-service.page';
import CloudServicePage from '../../pages/enterprise/cloud-service/cloud-service.page';
import CarrierServicePage from '../../pages/enterprise/carrier-service/carrier-service.page';
import UcaasServicePage from '../../pages/enterprise/ucaas-service/ucaas-service.page';
import CartPage from '../../pages/cart/cart-page';
import WebsiteDevelopmentPage from '../../pages/website-development/website-development-page';
import '../../assets/scss/styles.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/enterprise" exact>
          <EnterprisePage />
        </Route>
        <Route path="/enterprise/sdwan-service">
          <SDWANServicePage />
        </Route>
        <Route path="/enterprise/cloud-service">
          <CloudServicePage />
        </Route>
        <Route path="/enterprise/cable-service">
          <CableServicePage />
        </Route>
        <Route path="/enterprise/carrier-service">
          <CarrierServicePage />
        </Route>
        <Route path="/enterprise/ucaas-service">
          <UcaasServicePage />
        </Route>
        <Route path="/cart-page">
          <CartPage />
        </Route>
        <Route path="/website-development">
          <WebsiteDevelopmentPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
