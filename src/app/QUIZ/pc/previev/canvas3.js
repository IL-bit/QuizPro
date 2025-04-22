import React from 'react';
import './canvas3.scss';
import { useSelector } from 'react-redux';
import user from '../../../img/Constructor/create/user2.svg';
import letter from '../../../img/Constructor/create/Letter.svg';
import phone from '../../../img/Constructor/create/Phone2.svg';

const Canvas3 = () => {
    const url = 'http://qzpro.ru';
    const ID = useSelector((state) => state.quiz.currentQuizID);
    const quiz = useSelector((state) => state.quiz);
    const theme = quiz.data.theme.theme; // Get the current theme
    const alignClass = quiz.data.canvas3.aling;
    const canvasClass = 'canvas3 ' + alignClass;

    // Determine colors based on the theme
    const backgroundColor = theme === 'user' ? quiz.data.theme.background_color : ''; 
    const textColor = theme === 'user' ? quiz.data.theme.text_color : ''; 
    const buttonColor = theme === 'user' ? quiz.data.theme.button_color : ''; 
    const buttonTextColor = theme === 'user' ? quiz.data.theme.button_text_color : ''; 
    const COUNT = async () => { 
        try {
            const response = await fetch(`${url}/api/quiz/counter`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: ID, counter: 11})
            });
            if (!response.ok) {
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();    
            console.log('ok', ID);
        } catch (error) {       
            console.error("Error occurred:", error); 
        }
    };
    const APPLICATION = async () => { 
        try {
            const response = await fetch(`${url}/api/application/${ID}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: '', tel: '', email: ''})
            });
            if (!response.ok) {
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();    
            console.log('ok', ID);
        } catch (error) {       
            console.error("Error occurred:", error); 
        }
    };

    return (
        <div className={canvasClass} style={{ backgroundColor }}>
            {quiz.data.canvas3.video ? (
                <video loop autoPlay muted className="img">
                    <source src={quiz.data.canvas3.video} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            ) : (
                <div className="img" style={{ backgroundImage: `url(${quiz.data.canvas3.img})` }}></div>
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