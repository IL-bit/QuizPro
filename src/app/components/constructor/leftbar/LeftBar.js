import React, { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TURNONQUIZ } from '../../../../middleware';
import './style.scss';
import logo from '../../../img/Constructor/leftbar/logo.svg';
import pen from '../../../img/Constructor/leftbar/pen.svg';
import arrow1 from '../../../img/Constructor/leftbar/arrow1.svg';
import arrow2 from '../../../img/Constructor/leftbar/arrow2.svg';
import install from '../../../img/Constructor/leftbar/install.svg';
import at from '../../../img/Constructor/leftbar/at.svg';
import extend from '../../../img/Constructor/leftbar/extend.svg';
import integ from '../../../img/Constructor/leftbar/integ.svg';
import settings from '../../../img/Constructor/leftbar/settings.svg';
import design from '../../../img/Constructor/leftbar/design.svg';
import eye from '../../../img/Constructor/leftbar/eye.svg';
import Balance from '../../../img/leftbar/balance.svg';
import Balance2 from '../../../img/leftbar/balance2.svg';
import PopUp from '../../lk/pop-up/PopUp';

const LeftBar = () => {
  const navigate = useNavigate();   
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance);
  const currentQuizID = useSelector((state) => state.createQuiz.currentQuizID);
  const token = useSelector((state) => state.Token);
  const [isModalActive, setIsModalActive] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClick = (route) => {
    navigate(route);
  };
  const handleAccountClick = () => {
    setIsPopupVisible(true);
  };
  const handleDocumentClick = (event) => {
    if (!event.target.closest('.account') && !event.target.closest('.pop-up')) {
      setIsPopupVisible(false);
    }
  };
  const handleOpenModal = () => {
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  const handleOn = () => {
    dispatch(TURNONQUIZ(token, currentQuizID));
  };
  return (
    <>
      <div id="LeftBarConstr">
        <div className="head">
          <img src={logo} alt="#" />
          <button onClick={() => handleClick('/user')}></button>
        </div>
        <nav>
          <div className="edit" onClick={() => handleClick(`/user/quiz/${currentQuizID}`)}>
            <img src={pen} alt="#" />
            <p>Редактор</p>
            <img src={arrow1} alt="#"/>
          </div>
          <div className="install" onClick={() => handleClick(`/user/quiz/${currentQuizID}/install`)}>
            <img src={install} alt="#" />
            <p>Установка</p>
            <img src={arrow2} alt="#"/>
          </div>
          <div className="advert" onClick={() => handleClick(`/user/quiz/${currentQuizID}/startadvert`)}>
            <img src={at} alt="#" />
            <p>Запуск рекламы</p>
            <img src={arrow2} alt="#"/>
          </div>        
        </nav>
        <div className="extensions" onClick={() => handleClick(`/user/quiz/${currentQuizID}/plugins`)}>
          <img src={extend} alt="#" />
          <p>Расширения</p>
          <img src={arrow2} alt="#" />
        </div>
        <div className="design" onClick={() => handleClick(`/user/quiz/${currentQuizID}/design`)}>
          <img src={design} alt="#" />
          <p>Дизайн</p>
          <img src={arrow2} alt="#" />
        </div>
        <div className="integrations" onClick={() => handleClick(`/user/quiz/${currentQuizID}/integrations`)}>
          <img src={integ} alt="#" />
          <p>Интеграции</p>
          <img src={arrow2} alt="#" />
        </div>
        <div className="settings" onClick={() => handleClick(`/user/quiz/${currentQuizID}/settings`)}>
          <img src={settings} alt="#" />
          <p>Настройки</p>
          <img src={arrow2} alt="#" />
        </div>
        <div className="prev">
          <img src={eye} alt="#" />
          <p>Предпросмотр</p>
          <button onClick={() => handleClick(`/user/quiz/${currentQuizID}/previev/pc`)}></button>
          <button onClick={() => handleClick(`/user/quiz/${currentQuizID}/previev/mob`)}></button>
        </div>
        <button className="publish" onClick={() => handleOn()}>Опубликовать</button>
      </div>  
      <div id="LeftBarConstrMobile">
        <div className="head">
          <button className="burger" onClick={handleOpenModal}></button>
          <img src={logo} alt="#" />
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
      <div id="modalConstr" className={isModalActive ? 'active' : ''}>
        <div className="close" onClick={handleCloseModal}></div>
        <nav>
          <div className="edit" onClick={() => handleClick(`/user/quiz/${currentQuizID}`)}>
            <img src={pen} alt="#" />
            <p>Редактор</p>
            <img src={arrow1} alt="#"/>
          </div>
          <div className="install" onClick={() => handleClick(`/user/quiz/${currentQuizID}/install`)}>
            <img src={install} alt="#" />
            <p>Установка</p>
            <img src={arrow2} alt="#"/>
          </div>
          <div className="advert" onClick={() => handleClick(`/user/quiz/${currentQuizID}/startadvert`)}>
            <img src={at} alt="#" />
            <p>Запуск рекламы</p>
            <img src={arrow2} alt="#"/>
          </div>        
        </nav>
        <div className="extensions" onClick={() => handleClick(`/user/quiz/${currentQuizID}/plugins`)}>
          <img src={extend} alt="#" />
          <p>Расширения</p>
          <img src={arrow2} alt="#" />
        </div>
        <div className="design" onClick={() => handleClick(`/user/quiz/${currentQuizID}/design`)}>
          <img src={design} alt="#" />
          <p>Дизайн</p>
          <img src={arrow2} alt="#" />
        </div>
        <div className="integrations" onClick={() => handleClick(`/user/quiz/${currentQuizID}/integrations`)}>
          <img src={integ} alt="#" />
          <p>Интеграции</p>
          <img src={arrow2} alt="#" />
        </div>
        <div className="settings" onClick={() => handleClick(`/user/quiz/${currentQuizID}/settings`)}>
          <img src={settings} alt="#" />
          <p>Настройки</p>
          <img src={arrow2} alt="#" />
        </div>
        <div className="prev">
          <img src={eye} alt="#" />
          <p>Предпросмотр</p>
          <button onClick={() => handleClick(`/user/quiz/${currentQuizID}/previev/pc`)}></button>
          <button onClick={() => handleClick(`/user/quiz/${currentQuizID}/previev/mob`)}></button>
        </div>
        <button className="publish" onClick={() => handleOn()}>Опубликовать</button>
      </div>
      <div id="modal_bg" className={isModalActive ? 'active' : ''}></div>
    </>

  )
}
export default LeftBar;