import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlign3, resetBackground } from '../../../../../actions'; // Импортируйте ваше действие
import './style.scss';
import align_background from '../../../../img/Constructor/create/align_background.svg';
import align_standart from '../../../../img/Constructor/create/align_standart.svg';
import align_arrow_open from '../../../../img/Constructor/create/align_arrow_open.svg';
import align_arrow_closed from '../../../../img/Constructor/create/align_arrow_closed.svg';

const Instrument3 = () => {
    const dispatch = useDispatch();
    const isvideo = useSelector((state) => state.createQuiz.data.isvideo2);
    const [activeIndex, setActiveIndex] = useState(2); // Устанавливаем индекс по умолчанию на 2 (Стандратная)
    const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);
    const [modalClass, setModalClass] = useState('close'); // Состояние для управления классом модального окна
    const [activeItem, setActiveItem] = useState({ img: align_standart, text: 'Стандратная', align: 'canvas' }); // Устанавливаем активный элемент по умолчанию
    const [activeButtonIndex, setActiveButtonIndex] = useState(0); // Состояние для хранения индекса активной кнопки
    const modalRef = useRef(null); // Реф для модального окна

    const items = [
        { img: align_background, text: 'Фоновая картинка', align: 'background-left' },
        { img: align_standart, text: 'Стандратная', align: 'canvas' },
    ];
    const handleVideoChange = (index) => {
        setActiveBackgroundIndex(index);
        dispatch(resetBackground('canvas3', index));
    };
    const handleAlignClick = (align, index) => {
        dispatch(setAlign3(align)); // Диспатчим действие с новым значением align
        setActiveIndex(index); // Устанавливаем активный индекс
        setActiveItem(items[index]); // Устанавливаем активный элемент
        setActiveButtonIndex(0); // Устанавливаем activeButtonIndex в 0
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalClass('close'); // Устанавливаем класс close
        }
    };

    useEffect(() => {
        if (isvideo) {
            setActiveBackgroundIndex(1);
        }
        // Добавляем обработчик события клика
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Убираем обработчик события при размонтировании компонента
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleModal = () => {
        setModalClass(modalClass === 'open' ? 'close' : 'open'); // Переключаем класс модального окна
    };

    const handleButtonClick = (index, align) => {
        setActiveButtonIndex(index);
        dispatch(setAlign3(align)); // Устанавливаем активный индекс кнопки
    };
    const modalStyle = {
        height: '100px'
    }
    return (
        <div className="instrumens">
            <div className="background">
                <p>Фон</p>
                <div>
                    <button                            
                        className={`${activeBackgroundIndex === 0 ? 'active' : ''}`} 
                        onClick={() => handleVideoChange(0)}>Изображение</button>
                    <button
                        className={`${activeBackgroundIndex === 1 ? 'active' : ''}`} 
                        onClick={() => handleVideoChange(1)}>Видео</button>
                </div>
            </div>
            <div className="design">
                <p>Дизайн</p>
                <div onClick={toggleModal}>
                    <img src={activeItem.img || "#"} alt={activeItem.text || "#"} />
                    <span>{activeItem.text || "Выберите выравнивание"}</span> {/* Отображаем текст активного элемента */}
                    <img 
                        src={modalClass === 'open' ? align_arrow_open : align_arrow_closed} 
                        alt="#" 
                    />
                </div>
                <div className={`modal ${modalClass}`} ref={modalRef} style={modalStyle}>
                    {items.map((item, index) => (
                        <div 
                            key={index}
                            className={`item ${activeIndex === index ? 'active' : ''}`} 
                            onClick={() => handleAlignClick(item.align, index)}
                        >
                            <img src={item.img} alt={item.text} />
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>
            {activeItem.align === 'background-left' ? ( // Условный рендеринг для .align-3
                <div className="align-3">
                    <p>Выравнивание</p>
                    <div>
                        <button 
                            className={activeButtonIndex === 0 ? 'active' : ''} 
                            onClick={() => handleButtonClick(0, 'background-left')}
                        >
                        </button>
                        <button 
                            className={activeButtonIndex === 1 ? 'active' : ''} 
                            onClick={() => handleButtonClick(1, 'background-center')}
                        >
                        </button>
                        <button 
                            className={activeButtonIndex === 2 ? 'active' : ''} 
                            onClick={() => handleButtonClick(2, 'background-right')}
                        >
                        </button>
                    </div>
                </div>
            ) : activeItem.align === 'canvas' ? ( // Условный рендеринг для .align
                <div className="align">
                    <p>Выравнивание</p>
                    <div>
                        <button 
                            className={activeButtonIndex === 0 ? 'active' : ''} 
                            onClick={() => handleButtonClick(0, 'canvas')}
                        >
                        </button>
                        <button 
                            className={activeButtonIndex === 1 ? 'active' : ''} 
                            onClick={() => handleButtonClick(1, 'standart-right')}
                        >
                        </button>
                    </div>
                </div>
            ) : null} {/* Если align равен 'canvas-center', ничего не отображаем */}
        </div> 
    );
}

export default Instrument3;