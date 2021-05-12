import React from 'react';
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  useHistory,
} from 'react-router-dom';

import ScrollToTop from '../common/scroll/scroll-top.component';
import Skeleton from '@material-ui/lab/Skeleton';

import Header from '../common/header/header.component';
import Footer from '../common/footer/footer.component';

const DataSecurityPage = React.lazy(
  () => import('../../pages/data-security/data-security-page'),
);

const BrandingPage = React.lazy(
  () => import('../../pages/branding/branding-page'),
);

const LandingPage = React.lazy(
  () => import('../../pages/landing/landing-page'),
);

const SmbPage = React.lazy(() => import('../../pages/smb/smb-page'));

const StartupPage = React.lazy(
  () => import('../../pages/startup/startup-page'),
);

const StartupKitPage = React.lazy(
  () => import('../../pages/startup-kit/startup-kit-page'),
);

const EnterprisePage = React.lazy(
  () => import('../../pages/enterprise/enterprise-page'),
);

const SDWANServicePage = React.lazy(
  () => import('../../pages/enterprise/sdwan-service/sdwan-service.page'),
);

const CableServicePage = React.lazy(
  () => import('../../pages/enterprise/cable-service/cable-service.page'),
);

const CloudServicePage = React.lazy(
  () => import('../../pages/enterprise/cloud-service/cloud-service.page'),
);

const CarrierServicePage = React.lazy(
  () => import('../../pages/enterprise/carrier-service/carrier-service.page'),
);

const UcaasServicePage = React.lazy(
  () => import('../../pages/enterprise/ucaas-service/ucaas-service.page'),
);

const CartPage = React.lazy(() => import('../../pages/cart/cart-page'));

const WebsiteDevelopmentPage = React.lazy(
  () => import('../../pages/website-development/website-development-page'),
);

const SecurePage = React.lazy(
  () => import('../../pages/smb/secure/secure-page'),
);

import { Suspense } from 'react';
const ReconnectPage = React.lazy(
  () => import('../../pages/reconnect/reconnect-page'),
);
const VoiceIntro = React.lazy(
  () => import('../../pages/enterprise/container/voice-intro/voice-intro'),
);
const IOTIntro = React.lazy(
  () => import('../../pages/enterprise/container/iot-intro/iot-intro'),
);

const CloudIntro = React.lazy(
  () => import('../../pages/enterprise/container/cloud-intro/cloud-intro'),
);
const DataConnectivityIntro = React.lazy(
  () =>
    import(
      '../../pages/enterprise/container/data-connectivity-intro/data-connectivity-intro'
    ),
);
const SecurityIntro = React.lazy(
  () =>
    import('../../pages/enterprise/container/security-intro/security-intro'),
);

const DevelopPage = React.lazy(
  () => import('../../pages/smb/develop/develop-page'),
);

const PSIntro = React.lazy(
  () => import('../../pages/enterprise/container/ps-intro/ps-intro'),
);

const SignUpPage = React.lazy(() => import('../../pages/signup/signup-page'));

const SignInPage = React.lazy(() => import('../../pages/signin/signin-page'));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<p>Loaing...</p>}>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route path="/data-security" render={() => <DataSecurityPage />} />

          <Route path="/branding" render={() => <BrandingPage />} />

          <Route path="/smb" render={() => <SmbPage />} />

          <Route path="/startup" render={() => <StartupPage />} />

          <Route path="/startup-kit" render={() => <StartupKitPage />} />

          <Route path="/enterprise" exact render={() => <EnterprisePage />} />
          <Route
            path="/enterprise/sdwan-service"
            render={() => <SDWANServicePage />}
          />
          <Route
            path="/enterprise/cloud-quote"
            render={() => <CloudServicePage />}
          />
          <Route
            path="/enterprise/cable-service"
            render={() => <CableServicePage />}
          />
          <Route
            path="/enterprise/carrier-service"
            render={() => <CarrierServicePage />}
          />
          <Route
            path="/enterprise/security-service"
            render={() => <SecurityIntro />}
          />
          <Route
            path="/enterprise/data-connectivity-service"
            render={() => <DataConnectivityIntro />}
          />
          <Route
            path="/enterprise/cloud-service"
            render={() => <CloudIntro />}
          />
          <Route path="/enterprise/iot-service" render={() => <IOTIntro />} />
          <Route
            path="/enterprise/voice-service"
            render={() => <VoiceIntro />}
          />
          <Route
            path="/enterprise/professional-service"
            render={() => <PSIntro />}
          />

          <Route
            path="/enterprise/ucaas-service"
            render={() => <UcaasServicePage />}
          />

          <Route path="/cart-page" render={() => <CartPage />} />

          <Route
            path="/website-development"
            render={() => <WebsiteDevelopmentPage />}
          />

          <Route path="/develop" render={() => <DevelopPage />} />

          <Route path="/secure" render={() => <SecurePage />} />

          <Route path="/reconnect" render={() => <ReconnectPage />} />

          <Route path="/sign-up" render={() => <SignUpPage />} />
        </Switch>
      </Suspense>
      <Footer />
      <Suspense fallback={''}>
        <Switch>
          <Route path="/sign-in" render={() => <SignInPage />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
