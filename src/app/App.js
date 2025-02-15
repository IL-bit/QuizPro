import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Auth from './Auth.js';
import Start from './lk/start/Start.js';
import User from './lk/rate/Rate.js';
import Application from './lk/applications/Applications.js';
import Notifications from './lk/notifications/Notifications.js';
import Base from './lk/base/Base.js';
import Advert from './lk/base/advert/Advert.js';
import Analytics from './lk/base/analytics/Analytics.js';
import Content from './lk/base/content/Content.js';
import Payment from './lk/base/payment/Payment.js';
import Settings from './lk/base/settings/Settings.js';
import IntegServ from './lk/base/integrations/servises/Servises.js';
import IntegSites from './lk/base/integrations/sites/Sites.js';
import Conversion from './lk/conversion/Conversion.js';
import Profile from './lk/profile/Profile.js';
import Balance from './lk/balance/Balance.js';
import Deposits from './lk/history/Deposits.js';
import WriteOff from './lk/history/WriteOff.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/user" element={<Start />} />
          <Route path="/user/rates" element={<User />} />
          <Route path="/user/applications" element={<Application />} />
          <Route path="/user/notifications" element={<Notifications />} />
          <Route path="/user/base" element={<Base />} />
          <Route path="/user/base/advert" element={<Advert />} />
          <Route path="/user/base/analytics" element={<Analytics />} />
          <Route path="/user/base/content" element={<Content />} />
          <Route path="/user/base/integrations/sites" element={<IntegSites />} />
          <Route path="/user/base/integrations/servises" element={<IntegServ />} />
          <Route path="/user/base/payment" element={<Payment />} />
          <Route path="/user/base/settings" element={<Settings />} />
          <Route path="/user/quiz/conversion" element={<Conversion />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/balance" element={<Balance />} />
          <Route path="/user/deposits" element={<Deposits />} />
          <Route path="/user/writeoff" element={<WriteOff />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
