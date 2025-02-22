import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inputChange, buttonBlur, imageChange, image2Change } from '../../../../actions.js';
import './style.scss';
import pen from '../../../img/Constructor/create/pen.svg';
import arrow from '../../../img/Constructor/create/arrow.svg';
import close from '../../../img/Constructor/create/close.svg';

const Canvas1 = () => {
  const dispatch = useDispatch();
  const { createQuiz } = useSelector((state) => state);

  useEffect(() => {
    console.log(createQuiz);
  }, [createQuiz]);

  const handleInput = (field, value) => {
    console.log(`Field: ${field}, Value: ${value}`);
    dispatch(inputChange('canvas1', field, value));
  };

  const handleButtonB = (field, value) => {
    dispatch(buttonBlur('canvas1', field, value));
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      dispatch(imageChange('canvas1', e.target.result)); 
    };
    reader.readAsDataURL(file);
  };

  const handleImage2 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      dispatch(image2Change('canvas1', e.target.result)); 
    };
    reader.readAsDataURL(file);
  };
  

  return (
    <>
      <div id="canvas1">
        <div className="canvas">
          <input type="file" onChange={handleImage} style={{ display: 'none' }} className='logoImgs'/>
          <button onClick={() => document.querySelector('.logoImgs').click()}></button>
          <div className="img" style={{ backgroundImage: `url(${createQuiz.data.canvas1.img})` }}></div>
          <div className="right">
            <div className="logo">
              <input type="file" onChange={handleImage2} style={{ display: 'none' }} className='logoImg'/>
              <button onClick={() => document.querySelector('.logoImg').click()} style={{ backgroundImage: `url(${createQuiz.data.canvas1.logo})` }}></button>
              <p contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} data-name="description" onBlur={(e) => handleInput('description', e.target.innerText)}>{createQuiz.data.canvas1.description}<img src={pen} alt="#" /></p>                        
            </div>
            <h1 contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} data-name="title" onBlur={(e) => handleInput('title', e.currentTarget.textContent)}>{createQuiz.data.canvas1.title}</h1>
            <h3 contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} data-name="subtitle" onBlur={(e) => handleInput('subtitle', e.currentTarget.textContent)}>{createQuiz.data.canvas1.subtitle}</h3>
            <button contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} onBlur={(e) => handleButtonB('button', e.currentTarget.textContent)}>{createQuiz.data.canvas1.button}</button>
            <p contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} data-name="tel" onBlur={(e) => handleInput('tel', e.currentTarget.textContent)}>{createQuiz.data.canvas1.tel}</p>
            <p contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} data-name="name" onBlur={(e) => handleInput('name', e.currentTarget.textContent)}>{createQuiz.data.canvas1.name}</p>
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
            <div>Стандратная</div>
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
  )
}

export default Canvas1;