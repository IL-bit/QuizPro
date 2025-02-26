import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incremenCountQuestion, addQuestion, updateQuestion } from '../../../../../actions';
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
    const canvas2 = useSelector((state) => state.createQuiz.data.canvas2);
    
    const [data, setData] = useState({
        name: 'Answers',
        question: 'Впишите заголовок вопроса',
        answers: []
    });
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        // Проверяем, есть ли объект с текущим индексом в canvas2
        if (canvas2[index]) {
            const currentQuestionData = canvas2[index];
            setData(currentQuestionData);
            setAnswers(currentQuestionData.answers.map((text, idx) => ({
                id: idx + 1, // Используем индекс для уникального ID
                text
            })));
        } else {
            // Если данных нет, сбрасываем состояние
            setData({
                name: 'Answers',
                question: 'Впишите заголовок вопроса',
                answers: []
            });
            setAnswers([{
                id: 1,
                text: 'Добавьте ответ'
            }]);
        }
    }, [canvas2, index]);

    const addAnswer = () => {
        if (answers.length < 4) {
            setAnswers([...answers, {
                id: Date.now(), // Use timestamp for a unique ID
                text: 'Добавьте ответ'
            }]);
        }
    };

    const deleteAnswer = (id) => {
        setAnswers(answers.filter((answer) => answer.id !== id));
    };

    const handleIncrement = () => {
        const newQuestionData = {
            ...data,
            answers: answers.map(answer => answer.text) // Сохраняем текст ответов
        };

        // Обновляем существующий объект в canvas2
        dispatch(updateQuestion({ index, newQuestionData }));
        dispatch(incremenCountQuestion());
    };

    const handleInput = (value) => {
        setData({ ...data, question: value });
    };

    const handleAnswerChange = (e, index) => {
        const newAnswersData = [...answers];
        newAnswersData[index].text = e.target.textContent; // Обновляем текст ответа
        setAnswers(newAnswersData);
    };
  return (
    <div className="type">
        <div>
            <div id="answers">
                <div className="head">
                    <img src={answer1} alt="#" />
                    <h4 contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} onBlur={(e) => handleInput(e.currentTarget.textContent)}>{data.question}</h4>
                    <div className="index">{index + 1}</div>
                </div>
                {answers.map((answer, idx) => (
                    <div key={answer.id} className="answer">
                        <p contentEditable="true" spellcheck="false" suppressContentEditableWarning={true} onBlur={(e) => handleAnswerChange(e, idx)}>{answer.text}</p>
                        <div className="delete" onClick={() => deleteAnswer(answer.id)}>
                            <img src={trash2} alt="#" />
                        </div>
                        <div className="move">    
                            <img src={move} alt="#" />
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