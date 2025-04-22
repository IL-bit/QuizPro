import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import user from '../../../img/Constructor/create/user2.svg';
import letter from '../../../img/Constructor/create/Letter.svg';
import phone from '../../../img/Constructor/create/Phone2.svg';

const Canvas3 = () => {
    const quiz = useSelector((state) => state.quiz);
    const theme = quiz.data.theme.theme; // Get the current theme
    // Determine colors based on the theme
    const backgroundColor = theme === 'user' ? quiz.data.theme.backgroundColor : ''; 
    const textColor = theme === 'user' ? quiz.data.theme.textColor : ''; 
    const buttonColor = theme === 'user' ? quiz.data.theme.buttonColor : ''; 
    const buttonTextColor = theme === 'user' ? quiz.data.theme.buttonTextColor : ''; 

    return (
        <div id='canvas3Mob' style={{ backgroundColor }}>
            {quiz.data.canvas3.video ? (
                <video loop autoPlay muted className="img">
                    <source src={quiz.data.canvas3.mobileVideo} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            ) : (
                <div className="img" style={{ backgroundImage: `url(${quiz.data.canvas3.mobile})` }}></div>
            )}
            <div className="right">
                <h1 style={{ color: textColor }}>{quiz.data.canvas3.title}</h1>
                <h3 style={{ color: textColor }}>{quiz.data.canvas3.subtitle}</h3>
                <div className="inputs">
                    {quiz.data.canvas3.name && (
                        <div className="name">
                            <p style={{ color: textColor }}>Имя*</p>
                            <input type="text" placeholder='Иван' style={{ borderColor: buttonColor }} />
                            <img src={user} alt="#" />
                        </div>
                    )}
                    {quiz.data.canvas3.email && (
                        <div className="email">
                            <p style={{ color: textColor }}>Email*</p>
                            <input type="text" placeholder='Mail@example.com' style={{ borderColor: buttonColor }} />
                            <img src={letter} alt="#" />
                        </div>
                    )}
                    {quiz.data.canvas3.phone && (
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