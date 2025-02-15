import React from 'react';
import './style.scss';
import trash from '../../../img/history/trash.svg';

const Dprocess = () => {
  return (
    <div className="process item">
        <div className='id'>1</div>
        <p className='date'>08.12.2024</p>
        <p className='money'>590 ₽</p>
        <div>В обработке</div>
        <button className='trash'><img src={trash} alt="#" /></button>
    </div>
  )
}
export default Dprocess;