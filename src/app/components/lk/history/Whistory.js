import React from 'react';
import './style.scss';
import trash from '../../../img/history/trash.svg';

const Whistory = () => {
  return (
    <>
      <div className="whistory pc">
        <div className="id">#ID23</div>
        <p className="date">08.12.2024</p>
        <p className="money">590 ₽</p>
        <button className="trash"><img src={trash} alt="#" /></button>
      </div>    
      <div className="whistory mobile">
        <div className="left">
          <p>#ID Заявки</p>
          <p>Дата списания</p>
          <p>Сумма списания</p>
        </div>
        <div className="rigth">
          <div className="id">#ID23</div>
          <p className="date">08.12.2024</p>
          <p className="money">590 ₽</p>
        </div>
        <button className="trash"><img src={trash} alt="#" /></button>             
      </div>
    </>
  )
}
export default Whistory;