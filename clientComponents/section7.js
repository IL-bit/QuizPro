"use client";
import { togglePopup } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import swipeSvg from '../img/swipe.svg';

const Section7 = () => {
    const dispatch = useDispatch();    
    const appData = [
        { id: 1, cardTitle: "1", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 2, cardTitle: "2", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 3, cardTitle: "3", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 4, cardTitle: "4", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 5, cardTitle: "5", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 6, cardTitle: "6", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 7, cardTitle: "7", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 8, cardTitle: "8", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 9, cardTitle: "9", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 10, cardTitle: "10", convers: "19%", name: "Привели 1.000.000₽ в нишуё дачных домов", link: "", img: "" },
        { id: 11, cardTitle: "11", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" },
        { id: 12, cardTitle: "12", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "", img: "" }
      ];
    const isAuth = useSelector((state) => state.isAuth);
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    let startX = 0;
    let isSwiping = false;
    let tempIndex = currentIndex;
    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    };

    const handleTouchMove = (e) => {
        if (!isSwiping) return;

        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        const sliderTrack = sliderRef.current.querySelector('.slider-track');
        sliderTrack.style.transition = 'none';
        sliderTrack.style.transform = `translateX(-${tempIndex * 100 + (diffX / window.innerWidth) * 100}%)`;
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
    return(
        <div className="mob">
            <div className="slider" ref={sliderRef}>
                <div className="slider-list">
                    <div className="slider-track" style={{ transition: 'transform 0.3s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
                        {appData.slice(0, 6).map((item, index) => (
                            <div className="card" key={item.id} aria-labelledby={`card-title-${index}`}
                            onTouchStart={handleTouchStart} 
                            onTouchMove={handleTouchMove} 
                            onTouchEnd={handleTouchEnd} style={{ opacity: currentIndex === index ? 1 : 0, visibility: currentIndex === index ? 'visible' : 'hidden', transition: 'opacity 0.5s ease' }}
                            >
                                <p id={`card-title-${index}`}>{item.cardTitle}</p>
                                <p>Конверсия <span>{item.convers}</span></p>
                                <Image  alt="Изображение квиза"/>
                                <h5>{item.name}</h5>
                                <Link href="#" title="Смотреть квиз" aria-label="Смотреть квиз">Смотреть квиз</Link>
                                <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = 'http://quizforbiz.ru:90': handleToggle('log_in')}}>попробовать бесплатно</button>
                            </div>
                        ))}
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

export default Section7;