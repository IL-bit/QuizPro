import React from 'react';
import './style.scss';
import answer4 from '../../../../img/Constructor/create/answer4.svg';
import close from '../../../../img/Constructor/create/close.svg';
import plus from '../../../../img/Constructor/create/plus.svg';

const Calculator = () => {
  return (
    <div className="type">
        <div>
            <div id="calculator">
                <div className="head">
                    <img src={answer4} alt="#" />
                    <h4>Впишите заголовок вопроса</h4>
                    <div className="index">1</div>
                </div>
                <div className="range">
                    <p>Выбор значения из диапазона</p>
                    <div>
                        <input type="text" placeholder='0'/>
                        <div></div>
                        <input type="text" placeholder='100'/>                    
                    </div>
                </div>
                <div className="init_value">
                    <p>Начальное значение</p>
                    <input type="text" placeholder='50'/>
                </div>
                <div className="step">
                    <p>Шаг</p>
                    <input type="text" placeholder='1'/>
                </div>
                <p><img src={close} alt="#" />Удалить этот вопрос</p>
            </div>
            <div className='plus'><img src={plus} alt="#" /></div>            
        </div>
    </div>
  )
}

export default Calculator;