import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import person from '../../../img/popup/person.svg';
import Logout from '../../../img/popup/logout.svg';
import './style.scss';

const PopUp = () => {
    const navigate = useNavigate();   
    const rates = useSelector((state) => state.rate);
    const application = useSelector((state) => state.applications);
    const notifications = useSelector((state) => state.notifications);
    const handleClick = (route) => {
      navigate(route);
    };
    const [data, setData] = useState({
        count: application.length,
        rate: rates,
        min: 0,
        max: 0
    });
    const [score, setScore] = useState(0);

    const handleMax = () => {
        let max = 0;
        if (rates === 'Бесплатный') {
            max = 10;
        } else if (rates === 'Оптимальный') {
            max = 150;
        } else if (rates === 'Премиум') {
            max = 300;
        }
        return max;
    };

    const handleScore = (max) => {
        const calculatedScore = (data.count * 100) / max;
        setScore(calculatedScore);
    };

    useEffect(() => {
        const max = handleMax();
        setData((prevData) => ({
            ...prevData,
            count: application.length,
            max: max
        }));
        handleScore(max);
    }, [application, rates])
  return (
    <div id='pop_up'>
        <div className="head">
            <h3 onClick={() => handleClick('/user/profile')}><img src={person} alt="#" />Мой профиль</h3>
            <button className='notification' onClick={() => handleClick('/user/notifications')}><span>{notifications.length}</span></button>
        </div>
        <div className="application">
            <p className='count'>{data.max - data.count} заявок осталось</p>
            <p className='rate'>{data.rate}</p>
            <div className="progress_bar">
                <p>{data.min}</p>
                <p>{data.max}</p>
                <div style={{ width: `${score}%`}}><span>{data.count}</span></div>
            </div>
        </div>
        <h4>Помощь</h4>
        <ul>
            <li onClick={() => handleClick('/user/base')}>База знаний</li>
            <li onClick={() => handleClick('/user/createquizes')}>Галерея шаблонов</li>
            <li onClick={() => window.location.href = 'http://qzpro.ru'}>Ответы на частые вопросы</li>
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