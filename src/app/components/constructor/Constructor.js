import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buttonClick } from '../../../actions.js';
import './style.scss';
import Canvas1 from './canvas/canvas1';
import Canvas2 from './canvas/canvas2';
import Canvas3 from './canvas/canvas3';

const Constructor = () => {
  const dispatch = useDispatch();
  const { createQuiz } = useSelector((state) => state);
  useEffect(() => {
    console.log(createQuiz);
  }, [createQuiz]);

  const handleButton = (index) => {
    dispatch(buttonClick(index));
  };

  return (
    <div id="constructor">
      <button className={createQuiz.currentSection === 0 ? 'activ' : ''} onClick={() => handleButton(0)}>Стартовая страница</button>
      <button className={createQuiz.currentSection === 1 ? 'activ' : ''} onClick={() => handleButton(1)}>Вопросы</button>
      <button className={createQuiz.currentSection === 2 ? 'activ' : ''} onClick={() => handleButton(2)}>Форма контактов</button>
      <div className="body">
        {createQuiz.currentSection === 0 && <Canvas1 />}
        {createQuiz.currentSection === 1 && <Canvas2 />}
        {createQuiz.currentSection === 2 && <Canvas3 />}
      </div>
    </div>
  )
}

export default Constructor;