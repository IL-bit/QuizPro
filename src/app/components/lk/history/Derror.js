import React from 'react';
import './style.scss';
import trash from '../../../img/history/trash.svg';

const Dprocess = () => {
  return (
    <div className="error item">
        <div className='id'>3</div>
        <p className='date'>08.12.2024</p>
        <p className='money'>590 ₽</p>
        <div>Ошибка</div>
        <button className='trash'><img src={trash} alt="#" /></button>
    </div>
  )
}
export default Dprocess;