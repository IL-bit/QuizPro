import React, { useState, useEffect, useRef } from 'react';
import './canvas2.scss';
import { useSelector } from 'react-redux';
import arrow_back from '../../../img/Constructor/previev/arrow_back.svg';
import arrow_next from '../../../img/Constructor/previev/arrow_next.svg';

const Canvas2 = ({ handleButtonClick }) => {
  const url = 'http://qzpro.ru';
  const ID = useSelector((state) => state.quiz.currentQuizID);
  const rangeInputRef = useRef(null);
  const rangeDivRef = useRef(null);
  const quiz = useSelector((state) => state.quiz);
  const theme = quiz.data.theme.theme; // Get the current theme
  const button = quiz.data.theme.button_style; // Get the current theme
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(quiz.data.canvas2.length);

  // Determine colors based on the theme
  const backgroundColor = theme === 'user' ? quiz.data.theme.background_color : ''; 
  const textColor = theme === 'user' ? quiz.data.theme.text_color : ''; 
  const buttonColor = theme === 'user' ? quiz.data.theme.button_color : ''; 
  const buttonTextColor = theme === 'user' ? quiz.data.theme.button_text_color : ''; 
  const buttonStyle = button === 'style1' || button === 'style2' ? quiz.data.theme.button_color : ''; 
  console.log(buttonStyle);

  const handleNextClick = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleButtonClick('canvas3');
    }
  };

  const handleBackClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateProgress = () => {
    if (totalQuestions === 0) {
      return 0;
    }
    return Math.round((currentIndex / totalQuestions) * 100);
  };

  useEffect(() => {
    const rangeInput = rangeInputRef.current;
    const rangeDiv = rangeDivRef.current;
    const countInput = document.getElementById('count');
  
    if (rangeInput && rangeDiv && countInput) {
      const updateDivWidth = () => {
        const value = rangeInput.value;
        const max = rangeInput.max;
        const width = (value / (max / 100)); // Width to the slider position
        rangeDiv.style.width = `${width}%`;
        rangeDiv.style.left = '0';
      };
  
      rangeInput.addEventListener('input', updateDivWidth);
      updateDivWidth(); // Set initial width
  
      countInput.addEventListener('input', () => {
        const value = countInput.value;
        const min = rangeInput.min;
        const max = rangeInput.max;
        
        if (!isNaN(value) && value >= min && value <= max) {
          rangeInput.value = value;
          updateDivWidth();
        } else {
          countInput.value = '';
        }
      });
  
      return () => {
        rangeInput.removeEventListener('input', updateDivWidth);
        countInput.removeEventListener('input', () => {});
      };
    }
  }, [quiz.data.canvas2[currentIndex].name]);
  const renderQuiz = () => {
    switch (quiz.data.canvas2[currentIndex].name) {
      case 'Answers':
        return (
          <div className="answers">
            {quiz.data.canvas2[currentIndex].answers.map((answer, answerIndex) => (
              <div className="item" key={answerIndex}>
                <button style={{ backgroundColor: buttonColor, color: buttonTextColor }}></button>
                <p style={{ color: textColor }}>{answer}</p>
              </div>
            ))}
          </div>
        );
      case 'Calculator':
        return (
          <div className="calc">
            <input type="text" id='count' style={{ borderColor: buttonColor }} />
            <div className="range">
              <div ref={rangeDivRef}><div></div></div>
              <input
                type="range"
                id="range"
                min={quiz.data.canvas2[currentIndex].min}
                max={quiz.data.canvas2[currentIndex].max}
                step={quiz.data.canvas2[currentIndex].step}
                ref={rangeInputRef}
              />
            </div>
            <div className="text">
              <p style={{ color: textColor }}>{quiz.data.canvas2[currentIndex].min}</p>
              <p style={{ color: textColor }}>{quiz.data.canvas2[currentIndex].max}</p>
            </div>
          </div>
        );
      case 'AnswersImg':
        return (
          <div className='answersImg'>
            <div className="left">
              {quiz.data.canvas2[currentIndex].answers.map((answer, answerIndex) => (
                <div className="item" key={answerIndex}>
                  <button style={{ backgroundColor: buttonColor, color: buttonTextColor }}></button>
                  <p style={{ color: textColor }}>{answer}</p>
                </div>
              ))}
            </div>
            <div className="right" style={{background: `url(${quiz.data.canvas2[currentIndex].imgs[0]})`}}></div>
          </div>
        );
      case 'AnswersAndImg': 
        return (
          <div className='answersAndImg'>
            <div className="items">
              {quiz.data.canvas2[currentIndex].answers.map((answer, answerIndex) => (
                <div className="item" key={answerIndex}>
                  <div className="img" style={{background: `url(${quiz.data.canvas2[currentIndex].imgs[answerIndex]})`}}></div>
                  <div className="btns">
                    <button style={{ backgroundColor: buttonColor, color: buttonTextColor }}></button>
                    <p style={{ color: textColor }}>{answer}</p>                  
                  </div>
                </div>
              ))}              
            </div>
          </div>
        );
      default: return null
    }
  }
  const COUNT = async (index) => { 
    try {
        const response = await fetch(`${url}/api/quiz/counter`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: ID, counter: index})
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();    
        console.log('ok', ID, index);
    } catch (error) {       
        console.error("Error occurred:", error); 
    }
  };
  return (
    <div className='canvas2' style={{ backgroundColor }}>
      <h1 style={{ color: textColor }}>{quiz.data.title}</h1>
      {quiz.data.canvas2.length > 0 ? renderQuiz() : null}
      <div className="progress">
        <p style={{ color: textColor }}>Готово: <span style={{ color: buttonColor }}>{calculateProgress()}%</span></p>
        <div className='prog'><div style={{ width: `${calculateProgress()}%`, background: buttonColor }}></div></div>
        <a href="http://qzpro.ru" style={{ color: textColor, textDecorationColor: buttonColor }}>Создано в <span style={{ color: buttonColor }}>QZ.pro</span></a>
        <button onClick={handleBackClick} style={{ color: buttonTextColor, border: `0.85px solid ${buttonColor}` }}>
          <img src={arrow_back} alt="#" />
        </button>
        <button onClick={() => {handleNextClick(); COUNT(currentIndex + 1)}} style={{ backgroundColor: buttonStyle, color: buttonTextColor, border: `0.85px solid ${buttonColor}` }}>
          Далее <img src={arrow_next} alt="#" />
        </button>
      </div>
    </div>
  );
}

export default Canvas2;