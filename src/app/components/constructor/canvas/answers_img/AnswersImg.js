import React from 'react';
import './style.scss';
import trash2 from '../../../../img/Constructor/create/trash2.svg';
import move from '../../../../img/Constructor/create/move.svg';
import answer2 from '../../../../img/Constructor/create/answer2.svg';
import plus from '../../../../img/Constructor/create/plus.svg';
import close from '../../../../img/Constructor/create/close.svg';

const AnswersImg = () => {
  return (
    <div className="type">
        <div>
            <div id="answersImg">
                <div className="head">
                    <img src={answer2} alt="#" />
                    <h4>Впишите заголовок вопроса</h4>
                    <div className="index">1</div>
                </div>
                <div className="answer">
                    <p>Добавьте ответ</p>
                    <input type="file"/>
                    <button></button>
                    <div className="delete">
                        <img src={trash2} alt="#" />
                    </div>
                    <div className="move">    
                        <img src={move} alt="#" />       
                    </div>
                </div>
                <div className="answer">
                    <p>Добавьте ответ</p>
                    <input type="file"/>
                    <button></button>
                    <div className="delete">
                        <img src={trash2} alt="#" />
                    </div>
                    <div className="move">    
                        <img src={move} alt="#" />       
                    </div>
                </div>
                <div className="answer">
                    <p>Добавьте ответ</p>
                    <input type="file"/>
                    <button></button>
                    <div className="delete">
                        <img src={trash2} alt="#" />
                    </div>
                    <div className="move">    
                        <img src={move} alt="#" />       
                    </div>
                </div>
                <div className="answer">
                    <p>Добавьте ответ</p>
                    <input type="file"/>
                    <button></button>
                    <div className="delete">
                        <img src={trash2} alt="#" />
                    </div>
                    <div className="move">    
                        <img src={move} alt="#" />       
                    </div>
                </div>
                <p>Добавьте ответ или нажмите <span>“Enter↵”</span></p>
                <p className="delete"><img src={close} alt="#" />Удалить этот вопрос</p>
            </div>
            <div><img src={plus} alt="#" /></div>            
        </div>

    </div>
  )
}

export default AnswersImg;