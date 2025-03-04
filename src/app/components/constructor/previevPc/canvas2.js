import React from 'react';
import './canvas2.scss';
import { useSelector } from 'react-redux';
import arrow_back from '../../../img/Constructor/previev/arrow_back.svg';
import arrow_next from '../../../img/Constructor/previev/arrow_next.svg';

const Canvas2 = () => {
    const { createQuiz } = useSelector((state) => state);


  return (
    <div className='canvas2'>
        <h1>{createQuiz.data.title}</h1>
        <h3>{createQuiz.data.canvas2[0].question}</h3>        
        <div className="answers">
            <div className="item">
                <button className='active'></button>
                <p>1234567890</p>
            </div>
            <div className="item">
                <button></button>
                <p>1234567890</p>
            </div>
            <div className="item">
                <button></button>
                <p>1234567890</p>
            </div>
            <div className="item">
                <button></button>
                <p>1234567890</p>
            </div>
            <div className="item">
                <button></button>
                <p>1234567890</p>
            </div>
        </div>
        <div className="progress">
            <p>Готово: <span>12%</span></p>
            <div className='prog'><div></div></div>
            <a href="http://qzpro.ru">Создано в <span>QZ.pro</span></a>
            <button><img src={arrow_back} alt="#" /></button>
            <button>Далее <img src={arrow_next} alt="#" /></button>
        </div>
    </div>
  )
}

export default Canvas2;