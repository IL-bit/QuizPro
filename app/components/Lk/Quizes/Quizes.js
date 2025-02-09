import React from 'react';
import './style.scss';
import Quiz_small from './QuizSmall/quiz_small';

const Quizes = () => {
  return (
    <div id="Quizes">
        <div className="head">
            <h2>Созданные квизы</h2>
            <input type="search" />
            <button>Выдать доступ другому пользователю</button>            
        </div>
        <div className="content">
          <Quiz_small />
          <Quiz_small />
          <Quiz_small />
          <Quiz_small />
        </div>
    </div>
  )
}
export default Quizes;