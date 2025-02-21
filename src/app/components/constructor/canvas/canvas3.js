import React, { useState } from 'react';
import './style.scss';


const Canvas3 = ({ data, onChange, onImageChange, onRemoveField, onImage2Change, onButtonBlur }) => {
  const handleInputChange = (event) => {
    const { dataset, innerText } = event.target;
    onChange('canvas3', dataset.name, innerText);
};

const handleButtonBlur = (event) => {
    const { dataset, innerText } = event.target;
  onButtonBlur('canvas3', dataset.name, innerText);
}; 

  const handleImageChange = (event) => {
    onImageChange(event);
  };

  const handleRemoveField = (field) => {
    onRemoveField(field);
  };

  const handleImage2Change = (event) => {
    onImage2Change(event);
  };

  return (
    <div id="canvas3">
      <div className="canvas">
        <input type="file" onChange={handleImageChange} style={{ display: 'none' }} className='logoImgs'/>
        <button onClick={() => document.querySelector('.logoImgs').click()}></button>      
        <div className="img" style={{ backgroundImage: `url(${data.img})` }}></div>
        <div className="right">
          <h1 contentEditable="true" suppressContentEditableWarning={true} data-name="title" onInput={handleInputChange}>{data.title}</h1>
          <h3 contentEditable="true" suppressContentEditableWarning={true} data-name="subtitle" onInput={handleInputChange}>{data.subtitle}</h3>
          <div className="inputs">
          {data.name && (
              <div className="name">
                <p>Имя*</p>
                <div><img src="#" alt="#" />{data.name}</div>
                <button onClick={() => handleRemoveField('name')}></button>
              </div>
            )}
            {data.email && (
              <div className="email">
                <p>Email*</p>
                <div><img src="#" alt="#" />{data.email}</div>
                <button onClick={() => handleRemoveField('email')}></button>
              </div>
            )}
            {data.phone && (
              <div className="phone">
                <p>Телефон*</p>
                <div><img src="#" alt="#" />{data.phone}</div>
                <button onClick={() => handleRemoveField('phone')}></button>
              </div>
            )}
          </div>
          <button>Отправить</button>
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

export default Canvas3;