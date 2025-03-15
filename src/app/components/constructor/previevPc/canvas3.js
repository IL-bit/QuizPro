import React from 'react';
import './canvas3.scss';
import { useSelector } from 'react-redux';
import user from '../../../img/Constructor/create/user2.svg';
import letter from '../../../img/Constructor/create/Letter.svg';
import phone from '../../../img/Constructor/create/Phone2.svg';

const Canvas3 = () => {
    const { createQuiz } = useSelector((state) => state);
    const theme = createQuiz.data.theme.theme; // Get the current theme
    const alignClass = createQuiz.data.canvas3.aling;
    const canvasClass = 'canvas3 ' + alignClass;

    // Determine colors based on the theme
    const backgroundColor = theme === 'user' ? createQuiz.data.theme.backgroundColor : ''; 
    const textColor = theme === 'user' ? createQuiz.data.theme.textColor : ''; 
    const buttonColor = theme === 'user' ? createQuiz.data.theme.buttonColor : ''; 
    const buttonTextColor = theme === 'user' ? createQuiz.data.theme.buttonTextColor : ''; 

    return (
        <div className={canvasClass} style={{ backgroundColor }}>
            {createQuiz.data.canvas3.video ? (
                <video loop autoPlay muted className="img">
                    <source src={createQuiz.data.canvas3.video} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            ) : (
                <div className="img" style={{ backgroundImage: `url(${createQuiz.data.canvas3.img})` }}></div>
            )}
            <div className="right">
                <h1 style={{ color: textColor }}>{createQuiz.data.canvas3.title}</h1>
                <h3 style={{ color: textColor }}>{createQuiz.data.canvas3.subtitle}</h3>
                <div className="inputs">
                    {createQuiz.data.canvas3.name && (
                        <div className="name">
                            <p style={{ color: textColor }}>Имя*</p>
                            <input type="text" placeholder='Иван' style={{ borderColor: buttonColor }} />
                            <img src={user} alt="#" />
                        </div>
                    )}
                    {createQuiz.data.canvas3.email && (
                        <div className="email">
                            <p style={{ color: textColor }}>Email*</p>
                            <input type="text" placeholder='Mail@example.com' style={{ borderColor: buttonColor }} />
                            <img src={letter} alt="#" />
                        </div>
                    )}
                    {createQuiz.data.canvas3.phone && (
                        <div className="phone">
                            <p style={{ color: textColor }}>Телефон*</p>
                            <input type="text" placeholder='+7 (900) 000-00-00' style={{ borderColor: buttonColor }} />
                            <img src={phone} alt="#" />
                        </div>
                    )}
                </div>
                <button style={{ backgroundColor: buttonColor, color: buttonTextColor }}>Отправить</button>
            </div>
        </div>
    );
}

export default Canvas3;