import React from 'react';
import Image from 'next/image';
import person from '../../../../../public/person.svg';
import Logout from '../../../../../public/logout.svg';
import './style.scss';

const Pop_up = () => {
    const data = {
        count: 5,
        rate: 'Бесплатный',
        min: 0,
        max: 10
    };
  return (
    <div id='pop_up'>
        <div className="head">
            <h3><Image src={person} alt='#'/>Мой профиль</h3>
            <button className='notification' onClick={() => window.location.href = '/user/notifications'}><span>1</span></button>
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
            <li onClick={() => window.location.href = '/user/base'}>База знаний</li>
            <li>Галерея шаблонов</li>
            <li>Ответы на частые вопросы</li>
            <li>Новые фичи в Qz</li>
            <li>Предложить идею</li>
        </ul>
        <div className="bottom">
            <p>Оферта</p>
            <p>Copyright © 2013-2020</p>
            <button><Image alt='#' src={Logout}/>Выйти</button>            
        </div>
        <div className="btns">
            <button></button>
            <button></button>
            <button></button>
        </div>
    </div>
  )
}
export default Pop_up;