import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../../actions';
import './style.scss';
import Logo from '../../../img/leftbar/logo.svg';
import Arrow from '../../../img/leftbar/arrow.svg';
import Arrow2 from '../../../img/leftbar/arrow2.svg';
import Support from '../../../img/leftbar/support.svg';
import Logout from '../../../img/leftbar/logout.svg';
import Rate from '../../../img/leftbar/rate.svg';
import applications from '../../../img/leftbar/applic.svg';
import Balance from '../../../img/leftbar/balance.svg';
import Balance2 from '../../../img/leftbar/balance2.svg';
import PopUp from '../pop-up/PopUp';

const LeftBar = () => {
  const navigate = useNavigate();   
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance);
  const [isModalActive, setIsModalActive] = useState(false);
  const handleClick = (route) => {
    navigate(route);
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAccountClick = () => {
    setIsPopupVisible(true);
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest('.account') && !event.target.closest('.pop-up')) {
      setIsPopupVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const handleOpenModal = () => {
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
  };
  return (
    <>
      <div id="LeftBarLk" className='pc'>
          <div className="head">
            <img src={Logo} alt="#" />
            <div className='balance'>
              <p><img src={Balance} alt="#" />Баланс</p>
              <button onClick={() => handleClick('/user/balance')}><img src={Balance2} alt="#" /><p>{balance} ₽</p></button>
            </div>
            <div className="account" onClick={handleAccountClick}>
              <button className="base">D</button>
              <div className="new">1</div>
              {isPopupVisible && <PopUp />}
            </div>
          </div>
          <div className="applications" onClick={() => handleClick('/user/applications')}>
              <img src={applications} alt="#" />
              <p>Все заявки</p>
              <div className="count">22</div>
          </div>
          <div className="rate" onClick={() => handleClick('/user/rates')}>
              <img src={Rate} alt="#" />
              <p>Тариф</p>
              <div className="rates activ">Base</div>
              <div className="rates">Optim</div>
              <div className="rates">Prem</div>
              <div className="plus">+</div>
          </div>
          <nav>
            <div className="btns">
              <button onClick={() => handleClick('/user/createquizes')}>Создать квиз <img src={Arrow} alt="#" /></button>
              <button>Недавние <img src={Arrow2} alt="#" /></button>
              <button onClick={() => handleClick('/user')}>Мои квизы</button>    
              <a href="#"><img src={Support} alt="#" />Написать в поддержку</a>     
            </div>
            <a href="#" onClick={() => handleLogOut()}><img src={Logout} alt="#" />Сменить аккаунт</a>
          </nav>
          <div className="refer">
            <p>Партнёрская программа</p>
            <button onClick={() => handleClick('/user/referal')}>Заработать</button>          
          </div>
      </div>   
      <div id="LeftBarLkMobile" className='mobile'>
        <div className="head">
          <button className="burger" onClick={handleOpenModal}></button>
          <img src={Logo} alt="#" />
          <div className='balance'>
            <p><img src={Balance} alt="#" />Баланс</p>
            <button onClick={() => handleClick('/user/balance')}><img src={Balance2} alt="#" /><p>{balance} ₽</p></button>
          </div>
          <div className="account" onClick={handleAccountClick}>
            <button className="base">D</button>
            <div className="new">1</div>
          </div>
          {isPopupVisible && <PopUp />}          
        </div>
      </div>
      <div id="modal" className={isModalActive ? 'active' : ''}>
        <button className="close" onClick={handleCloseModal}></button>
        <div className="applications" onClick={() => handleClick('/user/applications')}>
          <img src={applications} alt="#" />
          <p>Все заявки</p>
          <div className="count">22</div>
        </div>
        <div className="rate" onClick={() => handleClick('/user/rates')}>
          <img src={Rate} alt="#" />
          <p>Тариф</p>
          <div className="rates activ">Base</div>
          <div className="rates">Optim</div>
          <div className="rates">Prem</div>
          <div className="plus">+</div>
        </div>
        <nav>
          <div className="btns">
            <button onClick={() => handleClick('/user/createquizes')}>Создать квиз <img src={Arrow} alt="#" /></button>
            <button>Недавние <img src={Arrow2} alt="#" /></button>
            <button onClick={() => handleClick('/user')}>Мои квизы</button>    
            <a href="#"><img src={Support} alt="#" />Написать в поддержку</a>     
          </div>
          <a href="#" onClick={() => handleLogOut()}><img src={Logout} alt="#" />Сменить аккаунт</a>
        </nav>
        <div className="refer">
          <p>Партнёрская программа</p>
          <button onClick={() => handleClick('/user/referal')}>Заработать</button>          
        </div>
      </div>
      <div id="modalBg" className={isModalActive ? 'active' : ''}></div>
    </>

  )
}
export default LeftBar;