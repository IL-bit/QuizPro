"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../redux/actions';
import swipeSvg from '../img/swipe.svg';
import video from '../img/video.svg';
import fast from '../img/fastquiz.svg';
import shop from '../img/shop.svg';
import calculator from '../img/calculator.svg';
import company from '../img/company.svg';
import smthnew from '../img/smthnew.svg';

const Section11 = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.isAuth);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    let startX = 0;
    let isSwiping = false;
    let tempIndex = currentIndex; // Временный индекс для отслеживания во время свайпа

    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true; // Устанавливаем флаг, что начался свайп
    };

    const handleTouchMove = (e) => {
        if (!isSwiping) return; // Если не свайпим, выходим

        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        const sliderTrack = sliderRef.current.querySelector('.slider-track');
        sliderTrack.style.transition = 'none'; // Отключаем переход для плавного перемещения
        sliderTrack.style.transform = `translateX(-${tempIndex * 100 + (diffX / window.innerWidth) * 100}%)`; // Обновляем трансформацию
    };

    const handleTouchEnd = (e) => {
        if (!isSwiping) return; // Если не свайпим, выходим

        const currentX = e.changedTouches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 50 && tempIndex < 5) {
            // Swipe left, если не последняя карточка
            tempIndex = Math.min(tempIndex + 1, 5); // Увеличиваем временный индекс, но не больше 5
        } else if (diffX < -50 && tempIndex > 0) {
            // Swipe right, если не первая карточка
            tempIndex = Math.max(tempIndex - 1, 0); // Уменьшаем временный индекс, но не меньше 0
        }

        // Устанавливаем окончательную позицию слайдера
        const sliderTrack = sliderRef.current.querySelector('.slider-track');
        sliderTrack.style.transition = 'transform 0.3s ease'; // Включаем переход для плавного перемещения
        sliderTrack.style.transform = `translateX(-${tempIndex * 100}%)`; // Устанавливаем позицию на основе временного индекса

        // Обновляем состояние currentIndex только после завершения свайпа
        setCurrentIndex(tempIndex);

        isSwiping = false; // Сбрасываем флаг
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };
    return(
        <div className="mob">
        <div className="slider" ref={sliderRef}>                       
            <div className="slider-list">
                <div className="slider-track" style={{ transition: 'transform 0.3s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
                    <div className="slide card"                          onTouchStart={handleTouchStart} 
             onTouchMove={handleTouchMove} 
             onTouchEnd={handleTouchEnd} style={{ opacity: currentIndex === 0 ? 1 : 0, visibility: currentIndex === 0 ? 'visible' : 'hidden', transition: 'opacity 0.5s ease' }}>
                       <Image src={fast} alt="Быстрый опросник" />
                        <h5 id="card-title-1"><b>Быстрый опросник</b></h5>
                        <p>Один из самых эффективных<br />способов стабильно<br />получать заявки</p>
                    </div>
                    <div className="slide card"                          onTouchStart={handleTouchStart} 
             onTouchMove={handleTouchMove} 
             onTouchEnd={handleTouchEnd} style={{ opacity: currentIndex === 1 ? 1 : 0, visibility: currentIndex === 1 ? 'visible' : 'hidden', transition: 'opacity 0.5s ease' }}>
                        <Image src={company} alt="Страница о компании" />
                        <h5 id="card-title-2"><b>Страница о компании</b></h5>
                        <p>Мини-сайт с информацией<br />о вашем бизнесе и квиз<br />в одном месте</p>
                    </div>
                    <div className="slide card"                          onTouchStart={handleTouchStart} 
             onTouchMove={handleTouchMove} 
             onTouchEnd={handleTouchEnd} style={{ opacity: currentIndex === 2 ? 1 : 0, visibility: currentIndex === 2 ? 'visible' : 'hidden', transition: 'opacity 0.5s ease' }}>
                        <Image src={shop} alt="Магазин" />
                        <h5 id="card-title-3"><b>Магазин</b></h5>
                        <p>Поможет подобрать клиенту нужный<br />товар или предложить несколько<br />вариантов</p>
                    </div>
                    <div className="slide card"                          onTouchStart={handleTouchStart} 
             onTouchMove={handleTouchMove} 
             onTouchEnd={handleTouchEnd} style={{ opacity: currentIndex === 3 ? 1 : 0, visibility: currentIndex === 3 ? 'visible' : 'hidden', transition: 'opacity 0.5s ease' }}>
                        <Image src={calculator} alt="Калькулятор" />
                        <h5 id="card-title-4"><b>Калькулятор</b></h5>
                        <p>Соберёт контакты, рассчитает<br />стоимость и создаст чат<br />с вашим менеджером</p>
                    </div>
                    <div className="slide card"                          onTouchStart={handleTouchStart} 
             onTouchMove={handleTouchMove} 
             onTouchEnd={handleTouchEnd} style={{ opacity: currentIndex === 4 ? 1 : 0, visibility: currentIndex === 4 ? 'visible' : 'hidden', transition: 'opacity 0.5s ease' }}>
                        <Image src={video} alt="Видео-консультант" />
                        <h5 id="card-title-5"><b>Видео-консультант</b></h5>
                        <p>Живое общение с клиентом<br />и ответы на самые частые вопросы</p>
                    </div>
                    <div className="slide card"                          onTouchStart={handleTouchStart} 
             onTouchMove={handleTouchMove} 
             onTouchEnd={handleTouchEnd} style={{ opacity: currentIndex === 5 ? 1 : 0, visibility: currentIndex === 5 ? 'visible' : 'hidden', transition: 'opacity 0.5s ease' }}>
                        <Image src={smthnew} alt="Что-то новое" />
                        <h5 id="card-title-6"><b>Что-то новое...</b></h5>
                        <p>Превью вариации квиза, который будет в<br />разработке в будущем. Чтобы показать<br />амбиции. Квиз дота2. Найди мать</p>
                    </div>                                
                </div>
            </div>
            <Image src={swipeSvg} alt="#" className="swipe"/>
            <div className="indic">
                {[...Array(6)].map((_, index) => (
                    <button
                        key={index}
                        className={currentIndex === index ? 'activ' : ''}
                        onClick={() => handleIndicatorClick(index)}
                    ></button>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Section11;