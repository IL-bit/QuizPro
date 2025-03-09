import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../actions';
import './style.scss';
import LeftBar from '../../components/constructor/leftbar/LeftBar';
import light from '../../img/Constructor/design/light-theme.svg';
import dark from '../../img/Constructor/design/dark-theme.svg';
import quiz from '../../img/Constructor/design/quiz-theme.svg';

const Design = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.createQuiz.data.theme.theme);
  // Состояние для хранения идентификатора активного элемента
  const [activeItem, setActiveItem] = useState(theme); // Изначально активен элемент с темной темой

  const handleButtonClick = (theme) => {
    setActiveItem(theme); // Устанавливаем активный элемент
    dispatch(changeTheme(theme));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-3">
          <LeftBar />
        </div>
        <div className="col-xxl-9">
          <div id="design">
            <h2>Дизайн</h2>
            <div className="design">
              <div className={`item ${activeItem === 'light' ? 'active' : ''}`}>
                <img src={light} alt="#" />
                <button onClick={() => handleButtonClick('light')}></button>
                <p>Светлая тема</p>
              </div>
              <div className={`item ${activeItem === 'dark' ? 'active' : ''}`}>
                <img src={dark} alt="#" />
                <button onClick={() => handleButtonClick('dark')}></button>
                <p>Темная тема</p>
              </div>
              <div className={`item ${activeItem === 'quiz' ? 'active' : ''}`}>
                <img src={quiz} alt="#" />
                <button onClick={() => handleButtonClick('quiz')}></button>
                <p>Фирменная QZ.pro</p>
              </div>
            </div>
            <div className="settigns-themes">
              <h3>Настройки темы</h3>
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;