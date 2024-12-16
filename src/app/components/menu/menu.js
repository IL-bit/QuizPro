import './menu.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup, closePopup } from '../../../actions';
import closeSvg from '../img/menu_close.svg';
import logoSvg from '../img/logo.svg';

const Menu = () => {
    const appConfig = window.appConfig;
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.pop_up);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#login') {
                dispatch(togglePopup('log_in')); // Открываем попап для входа
            } else if (hash === '#register') {
                dispatch(togglePopup('regist')); // Открываем попап для регистрации
            } else if (hash === '#reset') {
                dispatch(togglePopup('reset')); // Открываем попап для сброса пароля
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Вызовите при первом рендере

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [dispatch]);
    const [showLogin, setShowLogin] = useState(true);
    
    const handleClosePopup = () => {
        dispatch(closePopup());
    };
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };
    useEffect(() => {
        if (isOpen === 'burger') {
            const timer = setInterval(() => {
                setShowLogin((prev) => !prev); // Переключаем состояние каждые 5 секунд
            }, 5000);

            return () => clearInterval(timer); // Очистка таймера при размонтировании
        }
    }, [isOpen]);
    const handleScroll = (item) => {
        dispatch(closePopup());
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const renderForm = () => {
        switch (isOpen) {
            case 'log_in':
                return (
                    <form id="log_in">
                        <button className="close" onClick={() => handleClosePopup()}><p><img src={closeSvg} alt="#" />Закрыть</p></button>
                        <h2 className="pc">Войти<span>Нет аккаунта? <a href="#" onClick={() => handleToggle('regist')}>Зарегистрироваться</a></span></h2>
                        <h2 className="mob">Войти<br/><span>Нет аккаунта? <a href="#" onClick={() => handleToggle('regist')}>Зарегистрироваться</a></span></h2>
                        <input type="email" placeholder='Введите почту'/>
                        <input type="password" placeholder='Введите пароль'/>  
                        <button>войти</button>                  
                        <button onClick={() => handleToggle('reset')}>Я забыл(а) пароль</button>
                        <p className="pc">Нажимая на кнопку, вы соглашаетесь <a href={appConfig.polit} >с политикой<br/>конфиденциальности и политикой использования<br/>персональных данных</a></p>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href={appConfig.polit} >с политикой конфиденциальности и политикой<br/>использования персональных данных</a></p>
                    </form>
                );
            case 'regist':
                return (
                    <form id="regist">
                        <button className="close" onClick={() => handleClosePopup()}><p><img src={closeSvg} alt="#" />Закрыть</p></button>
                        <h2>Зарегистрироваться</h2>
                        <p>Есть аккаунт? <a href="#" onClick={() => handleToggle('log_in')}>Войти</a></p>
                        <input type="text" placeholder="Введите имя"/>
                        <input type="email" placeholder="Введите почту"/>
                        <input type="password" placeholder="Введите пароль"/>
                        <input type="password" placeholder="Повторите пароль"/>
                        <button>Зарегистрироваться</button>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href={appConfig.polit}>с политикой конфиденциальности и политикой<br/> использования персональных данных</a></p>
                    </form>
                );
            case 'reset':
                return (
                    <form id="reset">
                        <button className="close" onClick={() => handleClosePopup()}><p><img src={closeSvg} alt="#" />Закрыть</p></button>
                        <h2>Восстановить пароль</h2>
                        <input type="email" placeholder="Введите почту"/>
                        <button type="button" onClick={() => handleToggle('send')}>сбросить пароль</button>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href={appConfig.polit} >с политикой конфиденциальности и политикой<br/>использования персональных данных</a></p>
                    </form>
                );
            case 'send':
                return (
                    <div id="send">
                        <button className="close" onClick={() => handleClosePopup()}><p><img src={closeSvg} alt="#" />Закрыть</p></button>
                        <h2>Отправили письмо<br/>на вашу почту</h2>
                        <p>Зайдите на ваш email<br/>и восстановите пароль</p>
                        <button onClick={() => handleToggle('log_in')}>вернуться к авторизации</button>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href={appConfig.polit} >с политикой конфиденциальности и политикой<br/>использования персональных данных</a></p>
                    </div>
                );
            case 'burger':
                return (
                    <div id="burger">
                        <header>
                            <img src={logoSvg} alt="#" />
                            <button onClick={() => handleToggle('log_in')}>Создать квиз</button>
                            <button onClick={() => handleClosePopup()}></button>
                        </header>
                        <nav>
                            <ul>
                            <li onClick={() => handleScroll('third_section')}>О квизах</li>
                            <li onClick={() => handleScroll('fourth_section')}>Преимущества</li>
                            <li onClick={() => handleScroll('seventh_section')}>Кейсы</li>
                            <li onClick={() => handleScroll('eighth_section')}>Возможности</li>
                            <li onClick={() => handleScroll('fifth_section')}>Маркетологам</li>
                            </ul>
                        </nav>
                        {showLogin ? (
                            <button className="log_in" onClick={() => handleToggle('log_in')}>Войти</button>
                        ) : (
                            <button className="regist" onClick={() => handleToggle('regist')}>Регистрация</button>
                        )}
                        <p onClick={() => handleToggle('reset')}>Забыли пароль?</p>
                    </div>
                );
            default:
                return null; // Если значение не совпадает, ничего не отрисовываем
        }
    };

    return (
        <>
            <div id="menu" className={isOpen ? 'show' : 'hide'}>
                {renderForm()}
            </div>
            <div id="overview" className={isOpen ? 'show' : 'hide'}></div>
        </>
    );
}

export default Menu;