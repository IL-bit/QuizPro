import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import './App.scss';
import Auth from './pages/Auth';
import Users from './pages/Users';
import BlockedUsers from './pages/BlockedUsers';
import User from './pages/User';
import Statist from './pages/Statist';
import Deposit from './pages/Deposit';
import WriteOff from './pages/WriteOff';
import WriteOffError from './pages/WriteOffError';
import BannedWords from './pages/BannedWords';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuth);   
  // useEffect(() => {
  //   dispatch(islog());
  // }, [isAuthenticated]);  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="/users" element={<PrivateRoute element={<Users />} isAuthenticated={isAuthenticated} />} />
        <Route path="/user/*" element={<PrivateRoute element={<User />} isAuthenticated={isAuthenticated} />} />
        <Route path="/statist" element={<PrivateRoute element={<Statist />} isAuthenticated={isAuthenticated} />} />  
        <Route path="/deposits" element={<PrivateRoute element={<Deposit />} isAuthenticated={isAuthenticated} />} />
        <Route path="/bannedUsers" element={<PrivateRoute element={<BlockedUsers />} isAuthenticated={isAuthenticated} />} />
        <Route path="/writeOff" element={<PrivateRoute element={<WriteOff />} isAuthenticated={isAuthenticated} />} />    
        <Route path="/writeOffError" element={<PrivateRoute element={<WriteOffError />} isAuthenticated={isAuthenticated} />} />   
        <Route path="/bannedWodrs" element={<PrivateRoute element={<BannedWords />} isAuthenticated={isAuthenticated} />} />    
      </Routes>
    </BrowserRouter>
  );    
}

export default App;