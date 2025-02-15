import React from 'react';
import './style.scss';
import trash from '../../../img/history/trash.svg';

const Dprocess = () => {
  return (
    <div className="referal">
        <div className='id'>#ID23</div>
        <h5>Выплаты по реферальной программе</h5>
        <p className='date'>08.12.2024</p>
        <p className='money'>590 ₽</p>
        <div>Получен</div>
        <button className='trash'><img src={trash} alt="#" /></button>
    </div>
  )
}
export default Dprocess;