import React from 'react';
import './style.scss';

const Quizes = () => {
  return (
    <div id="Quizes">
        <div className="head">
            <h2>Созданные квизы</h2>
            <input type="search" />
            <button>Выдать доступ другому пользователю</button>            
        </div>
        <div className="content"></div>
    </div>
  )
}
export default Quizes;