import React from 'react';
import './style.scss';
import QuizSmall from './quizSmall/QuizSmall';

const Quizes = () => {
  return (
    <div id="Quizes">
        <div className="head">
            <h2>Созданные квизы</h2>
            <input type="search" />
            <button>Выдать доступ другому пользователю</button>            
        </div>
        <div className="content">
            <QuizSmall />
            <QuizSmall />
            <QuizSmall />
            <QuizSmall />
        </div>
    </div>
  )
}
export default Quizes;