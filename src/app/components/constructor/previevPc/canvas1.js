import React from 'react';
import './canvas1.scss';
import { useSelector } from 'react-redux';

const Canvas1 = ({ handleButtonClick }) => {  
    const { createQuiz } = useSelector((state) => state);
    const alignClass = createQuiz.data.canvas1.aling;
    const canvasClass = alignClass === 'canvas-center' ? 'canvas-center' : 'canvas ' + alignClass;

  return (
    <div className={canvasClass}>
        {createQuiz.data.canvas1.video ? (
            <video loop autoPlay muted className="img">
                <source src={createQuiz.data.canvas1.video} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
        ) : (
        <div className="img" style={{ backgroundImage: `url(${createQuiz.data.canvas1.img})` }}></div>
        )}
        <div className="right">
            <div className="logo">
                <button style={{ backgroundImage: `url(${createQuiz.data.canvas1.logo})`  }}></button>
                <p>{createQuiz.data.canvas1.description}</p>                        
            </div>
            <h1>{createQuiz.data.canvas1.title}</h1>
            <h3>{createQuiz.data.canvas1.subtitle}</h3>
            <button onClick={() => handleButtonClick('canvas2')}>{createQuiz.data.canvas1.button}</button>
            <a href="http://qzpro.ru">Создано в <span>QZ.pro</span></a>
            <p>{createQuiz.data.canvas1.tel}</p>
            <p>{createQuiz.data.canvas1.name}</p>
        </div>
    </div>
  )
}

export default Canvas1;