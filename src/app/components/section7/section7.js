import './section7.scss';
import { togglePopup } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useRef } from 'react';
import swipeSvg from '../img/swipe.svg';
import logoSvg from '../img/logo2.svg';
import cursor from '../img/cursor.svg';
import cursor2 from '../img/cursor_mob.svg';

const Section7 = () => {
    const dispatch = useDispatch();    
    const appData = window.appData;
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
        <section className="row" id="seventh_section" aria-labelledby="section7-title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <img src={logoSvg} alt="Логотип компании" className="logo" />
                <h2 id="section7-title" className="pc">Десятки квизов в разных нишах<br /><b>приносят прибыль</b> клиентам <span>прямо сейчас</span></h2>
                <h3 className="pc">Мы собрали базу <b>самых прибыльных</b> и актуальных опросников.<br />Вам остается выбрать нишу и <b>получать заявки</b></h3>
                <h2 id="section7-title" className="mob">Десятки квизов в разных<br />нишах <b>приносят прибыль</b><br/>клиентам <span>прямо сейчас</span></h2>
                <h3 className="mob">Мы собрали базу <b>самых прибыльных</b><br/>и актуальных опросников.<br /><br />Вам остается выбрать нишу<br/>и <b>получать заявки</b></h3>
                <div className="pc">
                    <div className="cards">
                        {appData.slice(0, 3).map((item, index) => (
                            <div className="card" key={item.id} aria-labelledby={`card-title-${index}`}>
                                <p id={`card-title-${index}`}>{item.cardTitle}</p>
                                <p>Конверсия <span>{item.convers}</span></p>
                                <img src="#" alt="Изображение квиза" />
                                <h5>{item.name}</h5>
                                <a href="#" title="Смотреть квиз" aria-label="Смотреть квиз">Смотреть квиз</a>
                                <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>попробовать бесплатно</button>
                            </div>
                        ))}
                    </div>
                    <div className="cards">
                        {appData.slice(3, 6).map((item, index) => (
                            <div className="card" key={item.id} aria-labelledby={`card-title-${index}`}>
                                <p id={`card-title-${index}`}>{item.cardTitle}</p>
                                <p>Конверсия <span>{item.convers}</span></p>
                                <img src="#" alt="Изображение квиза" />
                                <h5>{item.name}</h5>
                                <a href="#" title="Смотреть квиз" aria-label="Смотреть квиз">Смотреть квиз</a>
                                <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>попробовать бесплатно</button>
                            </div>
                        ))}
                    </div>
                </div>
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
                                        <img src="#" alt="Изображение квиза" />
                                        <h5>{item.name}</h5>
                                        <a href="#" title="Смотреть квиз" aria-label="Смотреть квиз">Смотреть квиз</a>
                                        <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>попробовать бесплатно</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img src={swipeSvg} alt="#" className="swipe" />
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

                <div className="more_funct" id="pc" onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>
                    <img src={cursor} alt="Иконка курсора"/>
                    <p>Смотреть больше квизов</p>
                </div>
                <div className="more_funct" id="mob" onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>
                    <img src={cursor2} alt="Иконка курсора"/>
                    <p>Смотреть больше квизов</p>
                </div>
            </div>
        </section>
    )
}

export default Section7;