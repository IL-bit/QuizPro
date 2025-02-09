import React from 'react';
import './style.scss';
import Image from 'next/image';
import change from '../../../../../public/change.svg';
import widget from '../../../../../public/widget.svg';
import eye from '../../../../../public/eye.svg';
import convers from '../../../../../public/convers.svg';
import notes from '../../../../../public/notes.svg';
import trash from '../../../../../public/trash.svg';
const Quiz_small = () => {
  return (
    <div className='quiz_small'>
        <div className='quiz_small_head'>
          <p>№1</p>
          <h5>Натяжные потолки</h5>
          <input type="text"/>
          <button><Image src={change} alt='#' /></button>
        </div>
        <div className="quiz_small_btns">
            <button><Image src={notes} alt='#' />Заявки<div className="count">2</div></button>
            <button><Image src={convers} alt='#' />Конверсия</button>
            <button><Image src={widget} alt='#' />Редактировать</button>
            <button><Image src={eye} alt='#' />Предпросмотр</button>
        </div>
        <input type="checkbox" className='check'/>        
        <button className="delete"><Image src={trash} alt='#' /></button>
    </div>
  )
}
export default Quiz_small;