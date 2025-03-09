import React, { useState, useEffect, useRef } from 'react';
import './canvas2.scss';
import { useSelector } from 'react-redux';
import arrow_back from '../../../img/Constructor/previev/arrow_back.svg';
import arrow_next from '../../../img/Constructor/previev/arrow_next.svg';

const Canvas2 = () => {
  const rangeInputRef = useRef(null);
  const rangeDivRef = useRef(null);
  const { createQuiz } = useSelector((state) => state);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(createQuiz.data.canvas2.length);

  const handleNextClick = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
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
    return Math.round((currentIndex / (totalQuestions - 1)) * 100);
  };

  useEffect(() => {
    const rangeInput = rangeInputRef.current;
    const rangeDiv = rangeDivRef.current;
    const countInput = document.getElementById('count');
  
    if (rangeInput && rangeDiv && countInput) {
      const updateDivWidth = () => {
        const value = rangeInput.value;
        const max = rangeInput.max;
        const width = (value / (max / 100)) ; // ширина до положения ползунка
        rangeDiv.style.width = `${width}%`;
        rangeDiv.style.left = '0';
      };
  
      rangeInput.addEventListener('input', updateDivWidth);
      updateDivWidth(); // Установить начальную ширину
  
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
        console.log(value);
      });
  
      return () => {
        rangeInput.removeEventListener('input', updateDivWidth);
        countInput.removeEventListener('input', () => {});
      };
    }
  }, [createQuiz.data.canvas2[currentIndex].name === 'Calculator']);

  return (
    <div className='canvas2'>
      <h1>{createQuiz.data.title}</h1>
      {createQuiz.data.canvas2.length > 0 && (
        <>
          <h3>{createQuiz.data.canvas2[currentIndex].question}</h3>
          {createQuiz.data.canvas2[currentIndex].name === 'Answers' ? (
            <div className="answers">
              {createQuiz.data.canvas2[currentIndex].answers.map((answer, answerIndex) => (
                <div className="item" key={answerIndex}>
                  <button></button>
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="calc">
              <input type="text" id='count'/>
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
                <p>{createQuiz.data.canvas2[currentIndex].min}</p>
                <p>{createQuiz.data.canvas2[currentIndex].max}</p>
              </div>
            </div>
          )}
        </>
      )}
      <div className="progress">
        <p>Готово: <span>{calculateProgress()}%</span></p>
        <div className='prog'><div style={{ width: `${calculateProgress()}%` }}></div></div>
        <a href="http://qzpro.ru">Создано в <span>QZ.pro</span></a>
        <button onClick={handleBackClick}><img src={arrow_back} alt="#" /></button>
        <button onClick={handleNextClick}>Далее <img src={arrow_next} alt="#" /></button>
      </div>
    </div>
  );
}

export default Canvas2;