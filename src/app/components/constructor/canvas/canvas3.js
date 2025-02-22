import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inputChange, buttonBlur, imageChange } from '../../../../actions.js';
import './style.scss';
import arrow from '../../../img/Constructor/create/arrow.svg';
import close from '../../../img/Constructor/create/close.svg';

const Canvas3 = () => {
  const dispatch = useDispatch();
  const { createQuiz } = useSelector((state) => state);

  const handleInput = (field, value) => {
    dispatch(inputChange('canvas3', field, value));
  };

  const handleButtonB = (field, value) => {
    dispatch(buttonBlur('canvas3', field, value));
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      dispatch(imageChange('canvas3', e.target.result)); 
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div id="canvas3">
        <div className="canvas">
          <input type="file" onChange={handleImage} style={{ display: 'none' }} className='logoImgs'/>
          <button onClick={() => document.querySelector('.logoImgs').click()}></button>
          <div className="img" style={{ backgroundImage: `url(${createQuiz.data.canvas3.img})` }}></div>
          <div className="right">
            <h1 contentEditable="true" suppressContentEditableWarning={true} data-name="title" onBlur={(e) => handleInput('title', e.currentTarget.textContent)}>{createQuiz.data.canvas3.title}</h1>
            <h3 contentEditable="true" suppressContentEditableWarning={true} data-name="subtitle" onBlur={(e) => handleInput('subtitle', e.currentTarget.textContent)}>{createQuiz.data.canvas3.subtitle}</h3>
            <div className="inputs">
              {createQuiz.data.canvas3.name && (
                <div className="name">
                  <p>Имя*</p>
                  <div><img src="#" alt="#" />{createQuiz.data.canvas3.name}</div>
                  <button onClick={() => handleButtonB('name', null)}></button>
                </div>
              )}
              {createQuiz.data.canvas3.email && (
                <div className="email">
                  <p>Email*</p>
                  <div><img src="#" alt="#" />{createQuiz.data.canvas3.email}</div>
                  <button onClick={() => handleButtonB('email', null)}></button>
                </div>
              )}
              {createQuiz.data.canvas3.phone && (
                <div className="phone">
                  <p>Телефон*</p>
                  <div><img src="#" alt="#" />{createQuiz.data.canvas3.phone}</div>
                  <button onClick={() => handleButtonB('phone', null)}></button>
                </div>
              )}
            </div>
            <button onClick={() => console.log('Отправить')}>Отправить</button>
          </div>
        </div>
        <div className="instrumens">
          <div className="background">
            <p>Фон</p>
            <div>
              <button className='active'>Изображение</button>
              <button>Видео</button>
            </div>
          </div>
          <div className="design">
            <p>Дизайн</p>
            <div>Стандартная</div>
          </div>
          <div className="align">
            <p>Выравнивание</p>
            <div>
              <button className='active'></button>
              <button></button>
            </div>
          </div>                
        </div> 
      </div>  
      <div className="start">
        <p><img src={close} alt="#" />Отключить стартовую страницу</p>
        <p>Настроить вопросы<img src={arrow} alt="#" /></p>
      </div>        
    </>
  );
}

export default Canvas3;