import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../common/scroll/scroll-top.component';
import Header from '../common/header/header.component';
import Footer from '../common/footer/footer.component';
import NotFoundPage from '../../pages/not-found/not-found-page';

import ProtectedRoute from '../common/protected-route/protected-route';

import { Suspense } from 'react';
import LogoutPage from '../../pages/logout/logout-page';
import LoaderComponent from '../common/loader/loader.component';
import SecurityPage from '../../pages/security/security-page';
import Help from '../../pages/help/help-page';
import { field, signInFormData } from '../../constants/form-data/sign-in-form';
import SentinelsClub from '../../pages/sentinels/sentinels-club';

const SecurityIntro = React.lazy(
  () =>
    import('../../pages/enterprise/container/security-intro/security-intro'),
);

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

const ItServicePage = React.lazy(
  () => import('../../pages/branding/branding-page'),
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

const ActivateAccountComponent = React.lazy(
  () => import('../activate-account/activate-account.component'),
);

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

const DevelopPage = React.lazy(
  () => import('../../pages/smb/develop/develop-page'),
);

const PSIntro = React.lazy(
  () => import('../../pages/enterprise/container/ps-intro/ps-intro'),
);

const SignUpPage = React.lazy(() => import('../../pages/signup/signup-page'));

const SignInPage = React.lazy(() => import('../../pages/signin/signin-page'));

const ResetPasswordPage = React.lazy(
  () => import('../../pages/reset-password/reset-password-page'),
);

const OrderHistoryPage = React.lazy(
  () => import('../../pages/order-history/order-history-page'),
);

const ContributionPage = React.lazy(
  () => import('../../pages/contribution/contribution-page'),
);

const ConfigPage = React.lazy(() => import('../../pages/config/config-page'));
const ContactUsPage = React.lazy(
  () => import('../../pages/contactus/contactus-page'),
);

const ProfilePage = React.lazy(
  () => import('../../pages/profile/profile-page'),
);

const CompliancePage = React.lazy(
  () => import('../../pages/compliance/compliance-page'),
);
const SentinelsClubPage = React.lazy(
  () => import('../../pages/sentinels/sentinels-club'),
);

const TermsPage = React.lazy(() => import('../../pages/terms/terms-page'));

const PrivacyPage = React.lazy(
  () => import('../../pages/privacy/privacy-page'),
);

const WallOfLovePage = React.lazy(
  () => import('../../pages/wall-of-love/wall-of-love-page'),
);

const App = (): ReactElement => {
  // Checked local storage to see whether user data is present or not
  const user = localStorage.getItem('userData');
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header user={user} />
      <Suspense
        fallback={
          <div
            style={{ height: '400px', display: 'grid', paddingTop: '400px' }}
          >
            <LoaderComponent />
          </div>
        }
      >
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/#IT" render={() => <LandingPage />} />
          <Route path="/data-security" render={() => <DataSecurityPage />} />
          <Route
            path="/activate-account"
            render={() => <ActivateAccountComponent />}
          />
          <Route path="/branding" render={() => <BrandingPage />} />

          <Route path="/smb" render={() => <SmbPage />} />

          <Route path="/startup" render={() => <StartupPage />} />

          <Route path="/startup-kit" render={() => <StartupKitPage />} />

          <Route path="/terms" render={() => <TermsPage />} />

          <Route path="/privacy" render={() => <PrivacyPage />} />

          <Route path="/it-plexus" exact render={() => <ItServicePage />} />

          <Route path="/help" render={() => <Help formFields={field} />} />

          {[
            '/enterprise/sdwan-service',
            '/enterprise/cyber-security',
            '/enterprise/dei-backup',
            '/enterprise/point-to-point',
            '/enterprise/mpls',
            '/enterprise/cloud-backup',
            '/enterprise/it-consulting',
            '/enterprise/unified-communications',
          ].map((path, index) => {
            return (
              <Route
                path={path}
                render={() => <SDWANServicePage path={path} />}
                key={index}
              />
            );
          })}

          {[
            '/enterprise/colocation',
            '/enterprise/cloud-quote',
            '/enterprise/public-cloud',
            '/enterprise/backup-service',
            '/enterprise/storage',
            '/enterprise/virtual-servers',
          ].map((path, index) => {
            return (
              <Route
                path={path}
                render={() => <CloudServicePage path={path} />}
                key={index}
              />
            );
          })}

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
            path="/enterprise/data-plexus-service"
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

          {[
            '/enterprise/ucaas-service',
            '/enterprise/cloud-backup',
            '/enterprise/physical-security',
            '/enterprise/dei-vsa',
            '/enterprise/conferencing',
            '/enterprise/contact-center',
            '/enterprise/sip-trunk',
            '/enterprise/hosted-voip',
            '/enterprise/pots',
            '/enterprise/pri',
            '/enterprise/hands-free',
          ].map((path, index) => {
            return (
              <Route
                path={path}
                render={() => <UcaasServicePage path={path} />}
                key={index}
              />
            );
          })}

          <Route path="/cart-page" render={() => <CartPage />} />

          {['/website-development', '/dao-builder'].map((path, index) => {
            return (
              <Route
                path={path}
                render={() => <WebsiteDevelopmentPage path={path} />}
                key={index}
              />
            );
          })}

          <Route path="/develop" render={() => <DevelopPage />} />

          <Route path="/logout" render={() => <LogoutPage />} />

          {['/data-sentinels', '/site-sentinels', '/secure'].map(
            (path, index) => {
              return (
                <Route path={path} render={() => <SecurePage />} key={index} />
              );
            },
          )}

          <Route path="/reconnect" render={() => <ReconnectPage />} />

          <Route path="/sign-in" render={() => <SignInPage />} />

          <Route path="/contributors" render={() => <ContributionPage />} />

          <Route path="/security" render={() => <SecurityPage />} />

          <Route path="/wall-of-love" render={() => <WallOfLovePage />} />

          {['/nwo-registration'].map((path, index) => {
            return (
              <Route
                path={path}
                render={() => <SignUpPage type={`nwo`} />}
                key={index}
              />
            );
          })}

          <ProtectedRoute
            exact
            path="/sign-up"
            user={user}
            component={SignUpPage}
          />

          <Route
            exact
            path="/active-ego-registration"
            render={() => <SignUpPage type={`active-ego`} />}
          />

          <Route
            exact
            path="/freelance-certification"
            render={() => <SignUpPage type={`freelancer`} />}
          />

          <Route
            exact
            path="/dao-registration"
            render={() => <SignUpPage type={`dao`} />}
          />

          <Route
            exact
            path="/dao-consultation"
            render={() => <SignUpPage type={`dao-consultation`} />}
          />

          <Route
            exact
            path="/climate-push-registration"
            render={() => <SignUpPage type={`business`} />}
          />

          <Route
            exact
            path="/climate-push-personal-registration"
            render={() => <SignUpPage type={`personal`} />}
          />

          <Route
            exact
            path="/compliance-central"
            render={() => <CompliancePage />}
          />
          <Route
            exact
            path="/sentinels-club"
            render={() => <SentinelsClubPage />}
          />

          <Route path="/order-history" render={() => <OrderHistoryPage />} />

          <Route
            path="/resend-activation-link"
            render={() => <ResetPasswordPage fromPage={`resend`} />}
          />
          <Route path="/reset-password" render={() => <ResetPasswordPage />} />
          <Route path="/configuration" render={() => <ConfigPage />} />
          <Route path="/contactus" render={() => <ContactUsPage />} />
          <Route path="/profile" render={() => <ProfilePage />} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
