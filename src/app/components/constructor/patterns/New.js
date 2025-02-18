import React from 'react';
import { useNavigate } from 'react-router-dom';
import add from '../../../img/Constructor/patterns/add.svg'

const New = () => {
  const navigate = useNavigate();   
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div className="item">
      <div><img src={add} alt="#" /></div>
      <h5>Создать квиз без шаблона</h5>
      <button onClick={() => handleClick('/user/createquiz/new')}>Создать с нуля</button>
    </div>
  )
}

export default New;