import React from 'react';
import { useNavigate } from 'react-router-dom';
import person from '../../../img/popup/person.svg';
import Logout from '../../../img/popup/logout.svg';
import './style.scss';

const PopUp = () => {
    const navigate = useNavigate();   
    const handleClick = (route) => {
      navigate(route);
    };
    const data = {
        count: 5,
        rate: 'Бесплатный',
        min: 0,
        max: 10
    };
  return (
    <div id='pop_up'>
        <div className="head">
            <h3 onClick={() => handleClick('/user/profile')}><img src={person} alt="#" />Мой профиль</h3>
            <button className='notification' onClick={() => handleClick('/user/notifications')}><span>1</span></button>
        </div>
        <div className="application">
            <p className='count'>{data.max - data.count} заявок осталось</p>
            <p className='rate'>{data.rate}</p>
            <div className="progress_bar">
                <p>{data.min}</p>
                <p>{data.max}</p>
                <div><span>{data.count}</span></div>
            </div>
        </div>
        <h4>Помощь</h4>
        <ul>
            <li onClick={() => handleClick('/user/base')}>База знаний</li>
            <li onClick={() => handleClick('/user/createquizes')}>Галерея шаблонов</li>
            <li>Ответы на частые вопросы</li>
            <li>Новые фичи в Qz</li>
            <li>Предложить идею</li>
        </ul>
        <div className="bottom">
            <p>Оферта</p>
            <p>Copyright © 2013-2020</p>
            <button><img src={Logout} alt="#" />Выйти</button>            
        </div>
        <div className="btns">
            <button></button>
            <button></button>
            <button></button>
        </div>
    </div>
  )
}
export default PopUp;