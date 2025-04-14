import React, { useState } from 'react';
import LeftBar from './leftBar/LeftBar';
import Deposits from './userPages/deposits';
import Main from './userPages/main';
import History from './userPages/history';
import Rate from './userPages/rate';
import Referal from './userPages/referal';

const User = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handleChange = (index) => {
    setCurrentPage(index);
  };
  const renderPage = () => {
    switch (currentPage) {
      case 0: 
        return <Main />

      case 1: 
        return <Deposits />

      case 2: 
        return <History />

      case 3: 
        return <Rate />

      case 4: 
        return <Referal />

      default: return null
    }
  }
  return (
    <div className='container-fluid'>
      <div className="row">
        <LeftBar />       
        <div className="col-xxl-10" id='User'>
          <div className="head">
            <div onClick={() => handleChange(0)} className={currentPage === 0 ? 'active' : ''}>Основное</div>
            <div onClick={() => handleChange(1)} className={currentPage === 1 ? 'active' : ''}>Пополнение суммы</div>
            <div onClick={() => handleChange(2)} className={currentPage === 2 ? 'active' : ''}>Транзакции</div>
            <div onClick={() => handleChange(3)} className={currentPage === 3 ? 'active' : ''}>Настройки тарифа пользователя</div>
            <div onClick={() => handleChange(4)} className={currentPage === 4 ? 'active' : ''}>Приглашения</div>
          </div>
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default User;