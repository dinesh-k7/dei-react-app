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
import StartupKitPage from '../../pages/startup-kit/startup-kit-page';
import EnterprisePage from '../../pages/enterprise/enterprise-page';
import SDWANServicePage from '../../pages/enterprise/sdwan-service/sdwan-service.page';
import CableServicePage from '../../pages/enterprise/cable-service/cable-service.page';
import CloudServicePage from '../../pages/enterprise/cloud-service/cloud-service.page';
import CarrierServicePage from '../../pages/enterprise/carrier-service/carrier-service.page';
import UcaasServicePage from '../../pages/enterprise/ucaas-service/ucaas-service.page';
import CartPage from '../../pages/cart/cart-page';
import WebsiteDevelopmentPage from '../../pages/website-development/website-development-page';
import SecurePage from '../../pages/smb/secure/secure-page';
import DevelopPage from '../../pages/smb/develop/develop-page';
import SecurityIntro from '../../pages/enterprise/container/security-intro/security-intro';
import DataConnectivityIntro from '../../pages/enterprise/container/data-connectivity-intro/data-connectivity-intro';
import CloudIntro from '../../pages/enterprise/container/cloud-intro/cloud-intro';
import IOTIntro from '../../pages/enterprise/container/iot-intro/iot-intro';
import VoiceIntro from '../../pages/enterprise/container/voice-intro/voice-intro';
import PSIntro from '../../pages/enterprise/container/ps-intro/ps-intro';

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
        <Route path="/startup-kit">
          <StartupKitPage />
        </Route>
        <Route path="/enterprise" exact>
          <EnterprisePage />
        </Route>
        <Route path="/enterprise/sdwan-service">
          <SDWANServicePage />
        </Route>
        <Route path="/enterprise/cloud-quote">
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
        <Route path="/develop">
          <DevelopPage />
        </Route>
        <Route path="/secure">
          <SecurePage />
        </Route>
        <Route path="/enterprise/security-service">
          <SecurityIntro />
        </Route>
        <Route path="/enterprise/data-connectivity-service">
          <DataConnectivityIntro />
        </Route>
        <Route path="/enterprise/cloud-service">
          <CloudIntro />
        </Route>
        <Route path="/enterprise/iot-service">
          <IOTIntro />
        </Route>
        <Route path="/enterprise/voice-service">
          <VoiceIntro />
        </Route>
        <Route path="/enterprise/professional-service">
          <PSIntro />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
