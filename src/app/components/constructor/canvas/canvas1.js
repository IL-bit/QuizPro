import React, { useState } from 'react';
import './style.scss';
import pen from '../../../img/Constructor/create/pen.svg';

const Canvas1 = ({ data, onChange, onImageChange, onRemoveField, onImage2Change, onButtonBlur }) => {
    const handleInputChange = (event) => {
        const { dataset, innerText } = event.target;
        onChange('canvas1', dataset.name, innerText);
    };
  
    const handleButtonBlur = (event) => {
        const { dataset, innerText } = event.target;
      onButtonBlur('canvas1', dataset.name, innerText);
    }; 

    const handleImageChange = (event) => {
        onImageChange(event);
    };
    
    const handleImage2Change = (event) => {
        onImage2Change(event);
    };
  

  return (
    <div id="canvas1">
      <div className="canvas">
        <input type="file" onChange={handleImageChange} style={{ display: 'none' }} className='logoImgs'/>
        <button onClick={() => document.querySelector('.logoImgs').click()}></button>
        <div className="img" style={{ backgroundImage: `url(${data.img})` }}></div>
        <div className="right">
          <div className="logo">
            <input type="file" onChange={handleImage2Change} style={{ display: 'none' }} className='logoImg'/>
            <button onClick={() => document.querySelector('.logoImg').click()} style={{ backgroundImage: `url(${data.logo})` }}></button>
            <p contentEditable="true" suppressContentEditableWarning={true} data-name="description" onInput={handleInputChange}>{data.description}<img src={pen} alt="#" /></p>                        
          </div>
          <h1 contentEditable="true" suppressContentEditableWarning={true} data-name="title" onInput={handleInputChange}>{data.title}</h1>
          <h3 contentEditable="true" suppressContentEditableWarning={true} data-name="subtitle" onInput={handleInputChange}>{data.subtitle}</h3>
          <button contentEditable="true" suppressContentEditableWarning={true} onBlur={handleButtonBlur}>{data.button}</button>
          <p contentEditable="true" suppressContentEditableWarning={true} data-name="tel" onInput={handleInputChange}>{data.tel}</p>
          <p contentEditable="true" suppressContentEditableWarning={true} data-name="name" onInput={handleInputChange}>{data.name}</p>
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

  )
}

export default Canvas1;