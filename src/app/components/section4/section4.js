import './section4.scss';
import { useEffect, useRef } from 'react';
import Step1 from './steps/step1/step1';
import Step2 from './steps/step2/step2';
import Step3 from './steps/step3/step3';
import Step4 from './steps/step4/step4';

const Section4 = () => {
    const typingTextElement = useRef(null);
    const easyElement = useRef(null);
    const text = "4 шага"; 
    let index = 0;
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
        <section className="row" id="fourth_section" aria-labelledby="section4-heading">
            <div className="col-xxl-12">
                <div className="min" ref={typingTextElement}></div>
                <div id="pro" ref={easyElement}></div>
                <header>
                    <h2 id="section4-heading">отделяют вас <b>от первых клиентов</b></h2>
                </header>
                <Step1/>
                <Step2/>
                <Step3/>
                <Step4/>
            </div>
        </section>
    )
}

export default Section4;