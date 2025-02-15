import React from 'react';
import './style.scss';
import trash from '../../../img/history/trash.svg';

const Whistory = () => {
  return (
    <div className="whistory">
        <div className="id">#ID23</div>
        <p className="date">08.12.2024</p>
        <p className="money">590 ₽</p>
        <button className="trash"><img src={trash} alt="#" /></button>
    </div>
  )
}
export default Whistory;