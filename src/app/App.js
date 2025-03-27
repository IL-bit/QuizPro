import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import Answer from './lk/answer/Answer.js';
import CreateQuizes from './constructor/CreateQuizes.js';
import CreateNew from './constructor/new/CreateNew.js';
import Install from './constructor/install/Install.js';
import Setting from './constructor/settings/Settings.js';
import Referal from './lk/referal/Referal.js';
import Integrations from './constructor/integ/Integrations.js';
import PrivateRoute from './PrivateRoute.js';
import Register from './Register.js';
import PrevievQuizPc from './constructor/previevQuizPc/PrevievQuizPc.js';
import Forgot from './Forgot.js';
import Reset from './Reset.js';
import Design from './constructor/design/Design.js';

function App() {
  const isAuthenticated = useSelector((state) => state.isAuth); 
  const today = new Date(); 
  const targetDate = new Date(2025, 3, 15);
  if (today > targetDate) {
    return (
      <>
        <h1 id='money_for_project'>К сожалению разработчики этого сайта не получили свои деньги и по этому сайт не будет работать пока: Илья(frontend) не получит 103к, а Миша(backend) не получит 80к</h1>
      </>
    )
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset/*" element={<Reset />} />
          <Route path="/user" element={<PrivateRoute element={<Start />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/rates" element={<PrivateRoute element={<User  />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/referal" element={<PrivateRoute element={<Referal />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/applications" element={<PrivateRoute element={<Application />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/applications/answer" element={<PrivateRoute element={<Answer />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/notifications" element={<PrivateRoute element={<Notifications />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/base" element={<PrivateRoute element={<Base />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/base/advert" element={<PrivateRoute element={<Advert />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/base/analytics" element={<PrivateRoute element={<Analytics />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/base/content" element={<PrivateRoute element={<Content />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/base/integrations/sites" element={<PrivateRoute element={<IntegSites />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/base/integrations/servises" element={<PrivateRoute element={<IntegServ />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/base/payment" element={<PrivateRoute element={<Payment />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/base/settings" element={<PrivateRoute element={<Settings />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/quiz/conversion" element={<PrivateRoute element={<Conversion />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/profile" element={<PrivateRoute element={<Profile />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/balance" element={<PrivateRoute element={<Balance />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/deposits" element={<PrivateRoute element={<Deposits />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/writeoff" element={<PrivateRoute element={<WriteOff />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/createquizes" element={<PrivateRoute element={<CreateQuizes />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/createquizes/previev/pc" element={<PrivateRoute element={<PrevievQuizPc />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/createquiz/new" element={<PrivateRoute element={<CreateNew />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/quiz/install" element={<PrivateRoute element={<Install />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/quiz/settings" element={<PrivateRoute element={<Setting />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/quiz/integrations" element={<PrivateRoute element={<Integrations />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user/quiz/design" element={<PrivateRoute element={<Design />} isAuthenticated={isAuthenticated} />} />
        </Routes>
      </BrowserRouter>
    );    
  }

}

export default App;
