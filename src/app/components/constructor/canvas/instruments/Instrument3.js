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
    const canvasAlign = useSelector((state) => state.createQuiz.data.canvas3.aling); 

    const items = [
        { img: align_background, text: 'Фоновая картинка', align: 'background-left' },
        { img: align_standart, text: 'Стандратная', align: 'canvas' },
    ];    

    const [activeIndex, setActiveIndex] = useState(2); // Устанавливаем индекс по умолчанию на 2 (Стандратная)
    const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);
    const [modalClass, setModalClass] = useState('close'); // Состояние для управления классом модального окна
    const [activeItem, setActiveItem] = useState(items[1]); // Убираем начальное значение
    const [activeButtonIndex, setActiveButtonIndex] = useState(0); // Состояние для хранения индекса активной кнопки
    const modalRef = useRef(null); // Реф для модального окна


    const handleVideoChange = (index) => {
        setActiveBackgroundIndex(index);
        dispatch(resetBackground('canvas3'));
    };

    const handleAlignClick = (align, index) => {
        dispatch(setAlign3(align)); 
        setActiveIndex(index); 
        setActiveButtonIndex(0); 
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalClass('close'); 
        }
    };

    useEffect(() => {
        if (isvideo) {
            setActiveBackgroundIndex(1);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isvideo]);

    useEffect(() => {
        console.log('canvasAlign изменился:', canvasAlign);
        // Устанавливаем activeIndex в зависимости от canvasAlign
        switch (canvasAlign) {
            case 'background-left':
                console.log('background-left');
                setActiveIndex(0);
                setActiveItem(items[0]);
                setActiveButtonIndex(0);
                break;

            case 'background-center':
                console.log('background-center');
                setActiveIndex(0);
                setActiveItem(items[0]);
                setActiveButtonIndex(1);
                break;

            case 'background-right':
                console.log('background-right');
                setActiveIndex(0);
                setActiveItem(items[0]);
                setActiveButtonIndex(2);
                break;

            case 'canvas':
                console.log('canvas');
                setActiveIndex(1);
                setActiveItem(items[1]);
                setActiveButtonIndex(0);
                break;
            default:
                console.log('default');
                setActiveIndex(1); // Значение по умолчанию
                setActiveItem(items[1]);
                setActiveButtonIndex(1);
        }
    }, [canvasAlign]); // Зависимость от canvasAlign

    useEffect(() => {
        // Обновляем activeItem в зависимости от activeIndex
        if (activeIndex !== null && activeIndex >= 0 && activeIndex < items.length) {
            setActiveItem(items[activeIndex]);
        }
    }, [activeIndex]); // Зависимость от activeIndex

    const toggleModal = () => {
        setModalClass(modalClass === 'open' ? 'close' : 'open'); 
    };

    const handleButtonClick = (index, align) => {
        setActiveButtonIndex(index);
        dispatch(setAlign3(align)); 
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