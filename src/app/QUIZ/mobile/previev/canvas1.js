import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';

const Canvas1 = ({ handleButtonClick }) => {  
    const quiz = useSelector((state) => state.quiz);
    const theme = quiz.data.theme.theme;

    // Determine colors based on the theme
    const backgroundColor = theme === 'user' ? quiz.data.theme.backgroundColor : ''; 
    const textColor = theme === 'user' ? quiz.data.theme.textColor : ''; 
    const buttonColor = theme === 'user' ? quiz.data.theme.buttonColor : ''; 
    const buttonTextColor = theme === 'user' ? quiz.data.theme.buttonTextColor : ''; 

    const logoStyle = quiz.data.canvas1.logo ? { background: `url(${quiz.data.canvas1.logo})` } : { backgroundColor: 'rgba(66, 87, 102, 0.52)' };

    return (
        <div id='canvas1Mob' style={{ backgroundColor }}>
            {quiz.data.canvas1.mobileVideo ? (
                <video loop autoPlay muted className="img">
                    <source src={quiz.data.canvas1.video} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            ) : (
                <div className="img" style={{ background: `url(${quiz.data.canvas1.mobile})` }}></div>
            )}
            <div className="right">
                <h1 style={{ color: textColor }}>{quiz.data.canvas1.title}</h1>
                <h3 style={{ color: textColor }}>{quiz.data.canvas1.subtitle}</h3>
                <button onClick={() => handleButtonClick('canvas2')} style={{ backgroundColor: buttonColor, color: buttonTextColor }}>
                    {quiz.data.canvas1.button}
                </button>
                <a href="http://qzpro.ru" style={{ color: textColor, textDecorationColor: buttonColor }}>Создано в <span style={{ color: buttonColor }}>QZ.pro</span></a>
                <p style={{ color: textColor }}>{quiz.data.canvas1.tel}</p>
                <p style={{ color: textColor }}>{quiz.data.canvas1.name}</p>
            </div>
        </div>
    );
}

export default Canvas1;