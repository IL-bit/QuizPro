import React, { useState } from 'react';
import './style.scss';
import arrow from '../../img/Constructor/create/arrow.svg';
import close from '../../img/Constructor/create/close.svg';
import Canvas1 from './canvas/canvas1';
import Canvas3 from './canvas/canvas3';

const constructorData = {
    canvas1: {
      title: 'Введите заголовок формы',
      subtitle: 'Дополнительный текст-описание',
      img: null,
      logo: null,
      name: 'ООО «Название компании»',
      description: 'Название или слоган компании',
      tel: '+7 (900) 000-00-00',
      button: 'Начать'
    },
    canvas2: {
      // данные для canvas2
    },
    canvas3: {
      title: 'Введите заголовок формы',
      subtitle: 'Дополнительный текст-описание',
      img: null,
      name: 'Иван',
      email: 'Mail@example.com',
      phone: '+7 (900) 000-00-00'
    }
};

const Constructor = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, setData] = useState(constructorData);
  
    const handleButtonClick = (index) => {
      setActiveIndex(index);
    };
    const handleInputChange = (canvas, field, value) => {
        setData((prevData) => {
          const newData = { ...prevData };
          newData[canvas][field] = value;
          return newData;
        });
    };
 
    const handleButtonBlur = (canvas, field, value) => {
        setData((prevData) => {
          const newData = { ...prevData };
          newData[canvas][field] = value;
          return newData;
        });
    };    
    const handleRemoveField = (canvas, field) => {
        setData((prevData) => {
          const newData = { ...prevData };
          newData[canvas][field] = null;
          return newData;
        });
    };       
    const handleImageChange = (canvas, event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          setData((prevData) => {
            const newData = { ...prevData };
            newData[canvas].img = event.target.result;
            return newData;
          });
        };
        reader.readAsDataURL(file);
    };
    const handleImage2Change = (canvas, event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          setData((prevData) => {
            const newData = { ...prevData };
            newData[canvas].logo = event.target.result;
            return newData;
          });
        };
        reader.readAsDataURL(file);
    };

  return (
    <div id="constructor">
      <button className={activeIndex === 0 ? 'activ' : ''} onClick={() => handleButtonClick(0)}>Стартовая страница</button>
      <button className={activeIndex === 1 ? 'activ' : ''} onClick={() => handleButtonClick(1)}>Вопросы</button>
      <button className={activeIndex === 2 ? 'activ' : ''} onClick={() => handleButtonClick(2)}>Форма контактов</button>
        <div className="body">
        {activeIndex === 0 && <Canvas1 data={data.canvas1} onChange={handleInputChange} onImageChange={(event) => handleImageChange('canvas1', event)} onRemoveField={(field) => handleRemoveField('canvas1', field)} onImage2Change={(event) => handleImage2Change('canvas1', event)} onButtonBlur={handleButtonBlur} />}
        {activeIndex === 1 && <div>Вопросы</div>}
        {activeIndex === 2 && <Canvas3 data={data.canvas3} onChange={handleInputChange} onImageChange={(event) => handleImageChange('canvas3', event)} onRemoveField={(field) => handleRemoveField('canvas3', field)} onImage2Change={(event) => handleImage2Change('canvas3', event)} onButtonBlur={handleButtonBlur} />}
            <div className="start">
                <p><img src={close} alt="#" />Отключить стартовую страницу</p>
                <p>Настроить вопросы<img src={arrow} alt="#" /></p>
            </div>
        </div>
    </div>
  )
}

export default Constructor;