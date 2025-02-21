import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import logo from '../../../img/Constructor/leftbar/logo.svg';
import pen from '../../../img/Constructor/leftbar/pen.svg';
import arrow1 from '../../../img/Constructor/leftbar/arrow1.svg';
import arrow2 from '../../../img/Constructor/leftbar/arrow2.svg';
import install from '../../../img/Constructor/leftbar/install.svg';
import advert from '../../../img/Constructor/leftbar/advert.svg';
import extend from '../../../img/Constructor/leftbar/extend.svg';
import integ from '../../../img/Constructor/leftbar/integ.svg';
import settings from '../../../img/Constructor/leftbar/settings.svg';
import design from '../../../img/Constructor/leftbar/design.svg';
import eye from '../../../img/Constructor/leftbar/eye.svg'

const LeftBar = () => {
  const navigate = useNavigate();   
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div id="LeftBarConstr">
      <div className="head">
        <img src={logo} alt="#" />
        <button onClick={() => handleClick('/user/createquizes')}></button>
      </div>
      <nav>
        <div className="edit" onClick={() => handleClick('/user/createquiz/new')}>
          <img src={pen} alt="#" />
          <p>Редактор</p>
          <img src={arrow1} alt="#"/>
        </div>
        <div className="install" onClick={() => handleClick('/user/quiz/install')}>
          <img src={install} alt="#" />
          <p>Установка</p>
          <img src={arrow2} alt="#"/>
        </div>
        <div className="advert">
          <img src={advert} alt="#" />
          <p>Запуск рекламы</p>
          <img src={arrow2} alt="#"/>
        </div>        
      </nav>
      <div className="extensions">
        <img src={extend} alt="#" />
        <p>Расширения</p>
        <img src={arrow2} alt="#" />
      </div>
      <div className="design">
        <img src={design} alt="#" />
        <p>Дизайн</p>
        <img src={arrow2} alt="#" />
      </div>
      <div className="integrations" onClick={() => handleClick('/user/quiz/integrations')}>
        <img src={integ} alt="#" />
        <p>Интеграции</p>
        <img src={arrow2} alt="#" />
      </div>
      <div className="settings" onClick={() => handleClick('/user/quiz/settings')}>
        <img src={settings} alt="#" />
        <p>Настройки</p>
        <img src={arrow2} alt="#" />
      </div>
      <div className="prev">
        <img src={eye} alt="#" />
        <p>Предпросмотр</p>
        <button></button>
        <button></button>
      </div>
      <button className="publish">Опубликовать</button>
    </div>
  )
}
export default LeftBar;