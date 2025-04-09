import './menu.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup, closePopup } from '../../../actions';
import { LOGIN, REGISTER, FORGOT } from '../../../middleware';
import closeSvg from '../img/menu_close.svg';
import logoSvg from '../img/logo.svg';

const Menu = () => {
    const dispatch = useDispatch();    
    const appConfig = window.appConfig;  
    const isAuth = useSelector((state) => state.isAuth);
    const isOpen = useSelector((state) => state.pop_up);    
    const [showLogin, setShowLogin] = useState(true);    
    const [formData, setFormData] = useState({
        login: { email: '', password: '', name: '' },
        register: { email: '', password: '', password2: '', name: '' },
        forgot: { email: '' }
    });

    const handleClosePopup = () => {
        dispatch(closePopup());
    };
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };
    const handleScroll = (item) => {
        dispatch(closePopup());
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleChange = (formType) => (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [formType]: {
                ...prevState[formType],
                [name]: value
            }
        }));
    };
    const handleSubmit = (formType, action) => (e) => {
        e.preventDefault();
        console.log(`Данные для ${formType}:`, formData[formType]);
        dispatch(action(formData[formType]));
    };

    useEffect(() => {
        if (isOpen === 'burger') {
            const timer = setInterval(() => {
                setShowLogin((prev) => !prev);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isOpen]);
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#login') {
                dispatch(togglePopup('log_in'));
            } else if (hash === '#register') {
                dispatch(togglePopup('regist'));
            } else if (hash === '#reset') {
                dispatch(togglePopup('reset'));
            }
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [dispatch]);
    const renderForm = () => {
        switch (isOpen) {
            case 'log_in':
                return (
                    <form id="log_in" onSubmit={handleSubmit('login', LOGIN)}>
                        <button className="close" onClick={handleClosePopup}>
                            <p><img src={closeSvg} alt="#" />Закрыть</p>
                        </button>
                        <h2 className="pc">Войти<span>Нет аккаунта? <a href="#" onClick={() => handleToggle('regist')}>Зарегистрироваться</a></span></h2>
                        <h2 className="mob">Войти<br/><span>Нет аккаунта? <a href="#" onClick={() => handleToggle('regist')}>Зарегистрироваться</a></span></h2>
                        <input type="email" 
                            placeholder='Введите почту'
                            value={formData.login.email} 
                            onChange={handleChange('login')} 
                            name='email'
                            required />
                        <input type="password" 
                            placeholder='Введите пароль'
                            value={formData.login.password} 
                            onChange={handleChange('login')} 
                            name='password'
                            required />  
                        <button type="submit">войти</button>                  
                        <button onClick={() => handleToggle('reset')}>Я забыл(а) пароль</button>
                        <p className="pc">Нажимая на кнопку, вы соглашаетесь <a href={appConfig.polit}>с политикой<br/>конфиденциальности и политикой использования<br/>персональных данных</a></p>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href={appConfig.polit}>с политикой конфиденциальности и политикой<br/>использования персональных данных</a></p>
                    </form>
                );
            case 'regist':
                return (
                    <form id="regist" onSubmit={handleSubmit('register', REGISTER)}>
                        <button className="close" onClick={handleClosePopup}>
                            <p><img src={closeSvg} alt="#" />Закрыть</p>
                        </button>
                        <h2>Зарегистрироваться</h2>
                        <p>Есть аккаунт? <a href="#" onClick={() => handleToggle('log_in')}>Войти</a></p>
                        <input type="text" placeholder="Введите имя"
                            value={formData.register.name} 
                            onChange={handleChange('register')} 
                            name='name'
                            required/>
                        <input type="email" placeholder="Введите почту"
                            value={formData.register.email} 
                            onChange={handleChange('register')} 
                            name='email'
                            required/>
                        <input type="password" placeholder="Введите пароль"
                            value={formData.register.password} 
                            onChange={handleChange('register')} 
                            name='password'
                            required/>
                        <input type="password" placeholder="Повторите пароль"
                            value={formData.register.password2} 
                            onChange={handleChange('register')} 
                            name='password2'
                            required/>
                        <button>Зарегистрироваться</button>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href={appConfig.polit}>с политикой конфиденциальности и политикой<br/> использования персональных данных</a></p>
                    </form>
                );
            case 'reset':
                return (
                    <form id="reset" onSubmit={handleSubmit('forgot', FORGOT)}>
                        <button className="close" onClick={handleClosePopup}>
                            <p><img src={closeSvg} alt="#" />Закрыть</p>
                        </button>
                        <h2>Восстановить пароль</h2>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Введите почту" 
                            className="form" 
                            value={formData.forgot.email} 
                            onChange={handleChange('forgot')} 
                            required/>
                        <button type="submit">сбросить пароль</button>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href={appConfig.polit}>с политикой конфиденциальности и политикой<br/>использования персональных данных</a></p>
                    </form>
                );
            case 'send':
                return (
                    <div id="send">
                        <button className="close" onClick={handleClosePopup}>
                            <p><img src={closeSvg} alt="#" />Закрыть</p>
                        </button>
                        <h2>Отправили письмо<br/>на вашу почту</h2>
                        <p>Зайдите на ваш email<br/>и восстановите пароль</p>
                        <button onClick={() => handleToggle('log_in')}>вернуться к авторизации</button>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href={appConfig.polit}>с политикой конфиденциальности и политикой<br/>использования персональных данных</a></p>
                    </div>
                );
            case 'burger':
                return (
                    <div id="burger">
                        <header>
                            <img src={logoSvg} alt="#" />
                            <button onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90' : handleToggle('log_in')}}>Создать квиз</button>
                            <button onClick={handleClosePopup}></button>
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
                        {showLogin && !isAuth ? (
                            <button className="log_in" onClick={() => handleToggle('log_in')}>Войти</button>
                        ) : (
                            <button className="regist" onClick={() => handleToggle('regist')}>Регистрация</button>
                        )}
                        {isAuth ? (<p onClick={() => handleToggle('reset')}>Забыли пароль?</p>) : null }
                    </div>
                );
            case 'auth':
                return (
                    <form id='auth'>
                        <button className="close" onClick={handleClosePopup}>
                            <p><img src={closeSvg} alt="#" />Закрыть</p>
                        </button>
                        <h2>Вы авторизованы</h2>
                        <p><a href='http://qzpro.ru:90'>Перейти в Личный кабинет</a></p>
                    </form>
                );
            default:
                return null; 
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