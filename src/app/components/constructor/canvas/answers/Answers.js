import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incremenCountQuestion, addQuestion } from '../../../../../actions';
import './style.scss';
import trash2 from '../../../../img/Constructor/create/trash2.svg';
import move from '../../../../img/Constructor/create/move.svg';
import answer1 from '../../../../img/Constructor/create/answer1.svg';
import plus from '../../../../img/Constructor/create/plus.svg';
import close from '../../../../img/Constructor/create/close.svg';

const Answers = () => {
    const dispatch = useDispatch();
    const index = useSelector((state) => state.createQuiz.currentQuestionIndex);
    const count = useSelector((state) => state.createQuiz.countQuestion);
    const [data, setData] = useState({
        name: 'Answers',
        question: 'Впишите заголовок вопроса',
        answers: []
    });
    const [answers, setAnswers] = useState([{
        id: 1,
        text: 'Добавьте ответ',
        delete: <img src={trash2} alt="#" />,
        move: <img src={move} alt="#" />
    }]);

    const addAnswer = () => {
        if (answers.length < 4) {
            setAnswers([...answers, {
            id: answers.length + 1,
            text: 'Добавьте ответ',
            delete: <img src={trash2} alt="#" />,
            move: <img src={move} alt="#" />
            }]);
        }
    };

    const deleteAnswer = (id) => {
        setAnswers(answers.filter((answer) => answer.id !== id));
    };
    const handleIncrement = () => {
        dispatch(addQuestion(data));
        dispatch(incremenCountQuestion());
    }
    const handleInput = (value) => {
        setData({ ...data, question: value });
    }
    const handleAnswerChange = (e, id) => {
        const newAnswersData = [...data.answers];
        newAnswersData[id - 1] = e.target.textContent;
        setData({ ...data, answers: newAnswersData });
    }

  return (
    <div className="type">
        <div>
            <div id="answers">
                <div className="head">
                    <img src={answer1} alt="#" />
                    <h4 contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} onBlur={(e) => handleInput(e.currentTarget.textContent)}>{data.question}</h4>
                    <div className="index">{index + 1}</div>
                </div>
                {answers.map((answer, index) => (
                    <div key={answer.id} className="answer">
                        <p contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} onBlur={(e) => handleAnswerChange(e, answer.id)}>{answer.text}</p>
                        <div className="delete" onClick={() => deleteAnswer(answer.id)}>
                            {answer.delete}
                        </div>
                        <div className="move">    
                            {answer.move}
                        </div>
                    </div>
                ))}
                <p onClick={addAnswer} style={{ display: answers.length > 3 ? 'none' : 'block' }}>Добавить ответ</p>
                <p className="delete"><img src={close} alt="#" />Удалить этот вопрос</p>
            </div>
            <div onClick={handleIncrement} style={{ display: count === 5 ? 'none' : 'flex' }}><img src={plus} alt="#" /></div>            
        </div>

    </div>
  )
}

export default Answers;