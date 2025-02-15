import React from 'react';
import './style.scss';
import trash from '../../../img/history/trash.svg';

const Dprocess = () => {
  return (
    <div className="paid item">
        <div className='id'>2</div>
        <p className='date'>08.12.2024</p>
        <p className='money'>590 ₽</p>
        <div>Оплачено</div>
        <button className='trash'><img src={trash} alt="#" /></button>
    </div>
  )
}
export default Dprocess;