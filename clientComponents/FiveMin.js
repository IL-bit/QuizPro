"use client";
import { useEffect, useRef } from 'react';

const FiveMin = () => {
    const typingTextElement = useRef(null);
    const easyElement = useRef(null);
    const text = "за 5 минут"; 
    let index = 0;
    let typingTimeout; // Для хранения идентификатора таймера
    let resetTimeout; // Для хранения идентификатора таймера сброса

    const type = () => {
        if (index < text.length) {
            typingTextElement.current.textContent += text.charAt(index); 
            index++;
            typingTimeout = setTimeout(type, 300); // Задержка между символами
        } else {
            // После завершения печатания, ждем 3 секунды и начинаем заново
            resetTimeout = setTimeout(() => {
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

        // Очистка таймеров при размонтировании
        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(resetTimeout);
        };
    }, []); // Пустой массив зависимостей

    return (
        <>
            <div className="min" ref={typingTextElement}></div>
            <div id="easy" ref={easyElement}></div>
        </>
    );
};

export default FiveMin;
