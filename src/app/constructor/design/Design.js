import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, changeBackgroundColor, changeTextColor, changeButtonColor, changeButtonTextColor, changeFont, changeButtonStyle } from '../../../actions';
import { HexColorPicker } from "react-colorful";
import './style.scss';
import LeftBar from '../../components/constructor/leftbar/LeftBar';
import light from '../../img/Constructor/design/light-theme.svg';
import dark from '../../img/Constructor/design/dark-theme.svg';
import quiz from '../../img/Constructor/design/quiz-theme.svg';
import down from '../../img/Constructor/design/down.svg';



const Design = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.createQuiz.data.theme.theme);
  const buttonStyle = useSelector(state => state.createQuiz.data.theme.buttonStyle);

  const backgroundColor = useSelector(state => state.createQuiz.data.theme.backgroundColor);
  const textColor = useSelector(state => state.createQuiz.data.theme.textColor);
  const buttonColor = useSelector(state => state.createQuiz.data.theme.buttonColor);
  const buttonTextColor = useSelector(state => state.createQuiz.data.theme.buttonTextColor);

  const [activeItem, setActiveItem] = useState(theme);
  const [activeButtonStyle, setActiveButtonStyle] = useState(buttonStyle);
  const [BackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [TextColor, setTextColor] = useState(textColor);
  const [ButtonColor, setButtonColor] = useState(buttonColor);
  const [ButtonTextColor, setButtonTextColor] = useState(buttonTextColor);
  
  const [activeColorPicker, setActiveColorPicker] = useState(null);
  const colorPickerRef = useRef(null);

  const handleButtonClick = (theme) => {
    setActiveItem(theme);
    dispatch(changeTheme(theme));
  };

  const handleButtonStyleClick = (style) => {
    setActiveButtonStyle(style);
    dispatch(changeButtonStyle(style));
  };

  const toggleColorPicker = (picker) => {
    setActiveColorPicker(prev => (prev === picker ? null : picker)); 
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
    dispatch(changeBackgroundColor(color)); 
  };
  const handleTextColorChange = (color) => {
    setTextColor(color);
    dispatch(changeTextColor(color)); 
  };
  const handleButtonColorChange = (color) => {
    setButtonColor(color);
    dispatch(changeButtonColor(color)); 
  };
  const handleButtonTextColorChange = (color) => {
    setButtonTextColor(color);
    dispatch(changeButtonTextColor(color)); 
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
          <LeftBar />
        </div>
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
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
              <div className="left">

                <div className="colors">
                  <p>Цвет фона</p>
                  <div className="color">
                    <button style={{ background: BackgroundColor }} onClick={() => toggleColorPicker('background')}></button>
                    <img src={down} alt="#" className={activeColorPicker === 'background' ? 'active' : ''}/>
                  </div>
                  {activeColorPicker === 'background' && (
                    <div ref={colorPickerRef} style={{ position: 'absolute', zIndex: 999, left: 'auto', top: '80px', right: 0}}>
                      <HexColorPicker color={BackgroundColor} onChange={handleBackgroundColorChange} />
                    </div>
                  )}
                </div>

                <div className="colors">
                  <p>Цвет текста</p>
                  <div className="color">
                    <button style={{ background: TextColor }} onClick={() => toggleColorPicker('text')}></button>
                    <img src={down} alt="#" className={activeColorPicker === 'text' ? 'active' : ''}/>
                  </div>
                  {activeColorPicker === 'text' && (
                    <div ref={colorPickerRef} style={{ position: 'absolute', zIndex: 999, left: 'auto', top: '80px', right: 0}}>
                      <HexColorPicker color={TextColor} onChange={handleTextColorChange} />
                    </div>
                  )}
                </div>

                <div className="fonts">
                  <p>Шрифт</p>
                  <div className="font">
                    <p>Gilroy</p>
                    <img src={down} alt="#" />
                  </div>
                </div>
              </div>

              <div className="right">

                <div className="colors">
                  <p>Цвет кнопок</p>
                  <div className="color">
                    <button style={{ background: ButtonColor }} onClick={() => toggleColorPicker('button')}></button>
                    <img src={down} alt="#" className={activeColorPicker === 'button' ? 'active' : ''}/>
                  </div>
                  {activeColorPicker === 'button' && (
                    <div ref={colorPickerRef} style={{ position: 'absolute', zIndex: 999, left: 'auto', top: '80px', right: 0}}>
                      <HexColorPicker color={ButtonColor} onChange={ handleButtonColorChange} />
                    </div>
                  )}
                </div>

                <div className="colors">
                  <p>Цвет текста кнопок</p>
                  <div className="color">
                    <button style={{ background: ButtonTextColor }} onClick={() => toggleColorPicker('buttonText')}></button>
                    <img src={down} alt="#" className={activeColorPicker === 'buttonText' ? 'active' : ''}/>
                  </div>
                  {activeColorPicker === 'buttonText' && (
                    <div ref={colorPickerRef} style={{ position: 'absolute', zIndex: 999, left: 'auto', top: '80px', right: 0}}>
                      <HexColorPicker color={ButtonTextColor} onChange={handleButtonTextColorChange} />
                    </div>
                  )}
                </div>

                <div className="styles_button">
                  <p>Cтиль кнопок</p>
                  <div className="style_button">
                    <div 
                        className={`style-option ${activeButtonStyle === 'style1' ? 'active' : ''}`} 
                        onClick={() => handleButtonStyleClick('style1')}
                    ></div>
                    <div 
                        className={`style-option ${activeButtonStyle === 'style2' ? 'active' : ''}`} 
                        onClick={() => handleButtonStyleClick('style2')}
                    ></div>
                    <div 
                        className={`style-option ${activeButtonStyle === 'style3' ? 'active' : ''}`} 
                        onClick={() => handleButtonStyleClick('style3')}
                    ></div>
                    <div 
                        className={`style-option ${activeButtonStyle === 'style4' ? 'active' : ''}`} 
                        onClick={() => handleButtonStyleClick('style4')}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;