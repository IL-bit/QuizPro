import React from 'react';
import './canvas3.scss';
import { useSelector } from 'react-redux';
import user from '../../../img/Constructor/create/user2.svg';
import letter from '../../../img/Constructor/create/Letter.svg';
import phone from '../../../img/Constructor/create/Phone2.svg';

const Canvas3 = () => {
    const { createQuiz } = useSelector((state) => state);
    const alignClass = createQuiz.data.canvas1.aling;
    const canvasClass = alignClass === 'canvas-center' ? 'canvas-center' : 'canvas ' + alignClass;

  return (
    <div className={canvasClass}>
        {createQuiz.data.canvas3.video ? (
            <video loop autoPlay muted className="img">
            <source src={createQuiz.data.canvas1.video} type="video/mp4" />
            Ваш браузер не поддерживает видео.
            </video>
        ) : (
            <div className="img" style={{ backgroundImage: `url(${createQuiz.data.canvas3.img})` }}></div>
        )}
        <div className="right">
            <h1>{createQuiz.data.canvas3.title}</h1>
            <h3>{createQuiz.data.canvas3.subtitle}</h3>
            <div className="inputs">
                {createQuiz.data.canvas3.name && (
                <div className="name">
                    <p>Имя*</p>
                    <input type="text" placeholder='Иван'/>
                    <img src={user} alt="#" />
                </div>
                )}
                {createQuiz.data.canvas3.email && (
                <div className="email">
                    <p>Email*</p>
                    <input type="text" placeholder='Mail@example.com'/>
                    <img src={letter} alt="#" />
                </div>
                )}
                {createQuiz.data.canvas3.phone && (
                <div className="phone">
                    <p>Телефон*</p>
                    <input type="text" placeholder='+7 (900) 000-00-00'/>
                    <img src={phone} alt="#" />
                </div>
                )}
            </div>
            <button>Отправить</button>
        </div>
    </div>
  )
}

export default Canvas3;