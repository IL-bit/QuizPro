import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import change from '../../../../img/quizes/change.svg';
import widget from '../../../../img/quizes/widget.svg';
import eye from '../../../../img/quizes/eye.svg';
import convers from '../../../../img/quizes/convers.svg';
import notes from '../../../../img/quizes/notes.svg';
import trash from '../../../../img/quizes/trash.svg';
const QuizSmall = () => {
  const navigate = useNavigate();   
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div className='quiz_small'>
        <div className='quiz_small_head'>
          <p>№1</p>
          <h5>Натяжные потолки</h5>
          <input type="text"/>
          <button><img src={change} alt="#" /></button>
        </div>
        <div className="quiz_small_btns">
            <button><img src={notes} alt="#" />Заявки<div className="count">2</div></button>
            <button onClick={() => handleClick('/user/quiz/conversion')}><img src={convers} alt="#"/>Конверсия</button>
            <button><img src={widget} alt="#" />Редактировать</button>
            <button><img src={eye} alt="#" />Предпросмотр</button>
        </div>
        <input type="checkbox" className='check'/>        
        <button className="delete"><img src={trash} alt="#" /></button>
    </div>
  )
}
export default QuizSmall;