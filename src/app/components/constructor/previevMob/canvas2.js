import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import arrow_back from '../../../img/Constructor/previev/arrow_back.svg';
import arrow_next from '../../../img/Constructor/previev/arrow_next.svg';

const Canvas2 = ({ handleButtonClick }) => {
  const rangeInputRef = useRef(null);
  const rangeDivRef = useRef(null);
  const { createQuiz } = useSelector((state) => state);
  const theme = createQuiz.data.theme.theme; // Get the current theme
  const button = createQuiz.data.theme.buttonStyle; // Get the current theme
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(createQuiz.data.canvas2.length);

  // Determine colors based on the theme
  const backgroundColor = theme === 'user' ? createQuiz.data.theme.background_color : ''; 
  const textColor = theme === 'user' ? createQuiz.data.theme.text_color : ''; 
  const buttonColor = theme === 'user' ? createQuiz.data.theme.button_color : ''; 
  const buttonTextColor = theme === 'user' ? createQuiz.data.theme.button_text_color : ''; 
  const buttonStyle = button === 'style1' || button === 'style2' ? createQuiz.data.theme.button_color : ''; 

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
  }, [createQuiz.data.canvas2[currentIndex].name]);
  const renderQuiz = () => {
    switch (createQuiz.data.canvas2[currentIndex].name) {
      case 'Answers':
        return (
          <div className="answers">
            {createQuiz.data.canvas2[currentIndex].answers.map((answer, answerIndex) => (
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
                min={createQuiz.data.canvas2[currentIndex].min}
                max={createQuiz.data.canvas2[currentIndex].max}
                step={createQuiz.data.canvas2[currentIndex].step}
                ref={rangeInputRef}
              />
            </div>
            <div className="text">
              <p style={{ color: textColor }}>{createQuiz.data.canvas2[currentIndex].min}</p>
              <p style={{ color: textColor }}>{createQuiz.data.canvas2[currentIndex].max}</p>
            </div>
          </div>
        );
      case 'AnswersImg':
        return (
          <div className='answersImg'>
            <div className="left">
              {createQuiz.data.canvas2[currentIndex].answers.map((answer, answerIndex) => (
                <div className="item" key={answerIndex}>
                  <button style={{ backgroundColor: buttonColor, color: buttonTextColor }}></button>
                  <p style={{ color: textColor }}>{answer}</p>
                </div>
              ))}
            </div>
            <div className="right" style={{background: `url(${createQuiz.data.canvas2[currentIndex].imgs[0]})`}}></div>
          </div>
        );
      case 'AnswersAndImg': 
        return (
          <div className='answersAndImg'>
            <div className="items">
              {createQuiz.data.canvas2[currentIndex].answers.map((answer, answerIndex) => (
                <div className="item" key={answerIndex}>
                  <div className="img" style={{background: `url(${createQuiz.data.canvas2[currentIndex].imgs[answerIndex]})`}}></div>
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
  };
  return (
    <div id='canvas2Mob' style={{ backgroundColor }}>
      <h1 style={{ color: textColor }}>{createQuiz.data.title}</h1>
      {createQuiz.data.canvas2.length > 0 ? renderQuiz() : null}
      <div className="progress">
        <p style={{ color: textColor }}>Готово: <span style={{ color: buttonColor }}>{calculateProgress()}%</span></p>
        <div className='prog'><div style={{ width: `${calculateProgress()}%`, background: buttonColor }}></div></div>
        <a href="http://quizforbiz.ru" style={{ color: textColor, textDecorationColor: buttonColor }}>Создано в <span style={{ color: buttonColor }}>QZ.pro</span></a>
        <button onClick={handleBackClick} style={{ color: buttonTextColor, border: `0.85px solid ${buttonColor}`, display: `${currentIndex === 0 ? 'none' : 'block'}` }}>
          <img src={arrow_back} alt="#" />
        </button>
        <button onClick={handleNextClick} style={{ backgroundColor: buttonStyle, color: buttonTextColor, border: `0.85px solid ${buttonColor}` }}>
          Далее <img src={arrow_next} alt="#" />
        </button>
      </div>
    </div>
  );
}

export default Canvas2;