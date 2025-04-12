"use client";
import { useEffect, useRef } from 'react';

const FourStep = () => {
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
    });
    return (
        <>
            <div className="min" ref={typingTextElement}></div>
            <div id="pro" ref={easyElement}></div>
        </>
    )
};
export default FourStep;