import './section1.scss';
import { togglePopup } from '../../../actions';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

const Section1 = () => {
    const dispatch = useDispatch();
    const typingTextElement = useRef(null);
    const easyElement = useRef(null);
    const text = "за 5 минут"; 
    let index = 0;

    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };

    const type = () => {
        if (index < text.length) {
            typingTextElement.current.textContent += text.charAt(index); 
            index++;
            setTimeout(type, 300); // Задержка между символами
        } else {
            // После завершения печатания, ждем 3 секунды и начинаем заново
            setTimeout(() => {
                index = 0; // Сбрасываем индекс
                typingTextElement.current.textContent = ''; // Очищаем текст
                easyElement.current.classList.remove('show'); // Убираем класс show
                setTimeout(() => {
                    easyElement.current.classList.add('show'); // Добавляем класс show перед новым циклом
                    type(); // Запускаем анимацию снова
                }, 200); // Небольшая задержка перед началом нового цикла
            }, 2200);
        }
    };

    useEffect(() => {
        easyElement.current.classList.add('show'); 
        type(); // Запускаем анимацию при монтировании
    }, []);

    return(
        <section className="row" id="first_section" aria-labelledby="section1-heading">
            <div className="col-xxl-8 col-12 mx-auto">
                <header>
                    <h1 id="section1-heading">Квиз-сайты для бизнеса</h1>
                    <h2>Бесплатно и просто создайте<br /><b>квиз-сайт</b> для бизнеса</h2>
                </header>
                <div className="min" ref={typingTextElement}></div>
                <div id="easy" ref={easyElement}></div>
                <h3 className="pc">Тестируйте маркетинговые квизы <b>без абонентской платы.<br />Платите по факту - </b>за теплые и целевые заявки</h3>
                <h3 className="mob">Тестируйте маркетинговые квизы<br /><b>без абонентской платы.<br /><br />Платите по факту - </b>за теплые<br />и целевые заявки</h3>
                <button aria-label="Попробовать бесплатно" onClick={() => handleToggle('log_in')}>попробовать бесплатно</button>
            </div>
        </section>
    )
}

export default Section1;