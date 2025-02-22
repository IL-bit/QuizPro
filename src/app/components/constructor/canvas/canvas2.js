import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setCurrentQuestion, incremenCountQuestion } from '../../../../actions';
import './style.scss';
import answer1 from '../../../img/Constructor/create/answer1.svg';
import answer2 from '../../../img/Constructor/create/answer2.svg';
import answer3 from '../../../img/Constructor/create/answer3.svg';
import answer4 from '../../../img/Constructor/create/answer4.svg';
import pen from '../../../img/Constructor/create/pen3.svg';
import arrow from '../../../img/Constructor/create/arrow.svg';
import close from '../../../img/Constructor/create/close.svg';
import Answers from './answers/Answers';
import AnswersImg from './answers_img/AnswersImg';
import Calculator from './calculator/Calculator';
import AnswersAndImg from './answers_and_img/AnswersAndImg';


const Canvas2 = () => {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.createQuiz.currentQuestionIndex);
  const currentQuestion = useSelector((state) => state.createQuiz.currentQuestion);
  const handleButtonClick = (componentName) => {
    dispatch(setCurrentQuestion(componentName));
  };

  const renderComponent = () => {
    switch (currentQuestion) {
      case 'Answers':
        return <Answers />;
      case 'AnswersImg':
        return <AnswersImg />;
      case 'AnswersAndImg':
        return <AnswersAndImg />;
      case 'Calculator':
        return <Calculator />;
      default:
        return (
          <div className="type">
            <input type="text" placeholder='Впишите заголовок вопроса' />
            <div className="index">{index + 1}</div>
            <div className="btns">
              <button onClick={() => handleButtonClick("Answers")}>
                <img src={answer1} alt="#" />Варианты ответов
              </button>
              <button onClick={() => handleButtonClick("AnswersImg")}>
                <img src={answer2} alt="#" />Варианты с картинками
              </button>
              <button onClick={() => handleButtonClick("AnswersAndImg")}>
                <img src={answer3} alt="#" />Варианты и картинка
              </button>
              <button onClick={() => handleButtonClick("Calculator")}>
                <img src={answer4} alt="#" />Калькулятор
              </button>
            </div>
          </div>
        );
    }
  };
  return (
    <>
      <div id="canvas2">
        <div className="head">
          <h2>Заголовок страницы</h2><img src={pen} alt="#" />
        </div>
        <div className="canvas">
          {renderComponent()}
        </div>
      </div>    
      <div className="start">
        <p><img src={close} alt="#" />Очистить все</p>
        <p>Настроить форму<img src={arrow} alt="#" /></p>
      </div>
    </>

  )
}

export default Canvas2;