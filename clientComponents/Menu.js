"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup, closePopup, logIn } from '../redux/actions';
import closeSvg from '../img/menu_close.svg';
import logoSvg from '../img/logo.svg';

const Menu = () => {
    const dispatch = useDispatch();    
    const urlLk = useSelector((state) => state.url);
    const isAuth = useSelector((state) => state.isAuth);
    const isOpen = useSelector((state) => state.pop_up);  
    const [action, setAction] = useState('');
    const [isAction, setIsAction] = useState(false);
    const [showLogin, setShowLogin] = useState(true);    
    const [formData, setFormData] = useState({
        login: { email: '', password: '', name: '', is_landing: 1 },
        register: { email: '', password: '', password_confirmation: '', name: '', is_landing: 1 },
        forgot: { email: '' }
    });
    const url = 'https://api.quizforbiz.ru';
    const REGISTER = async (formData) => { 
        try {
            const response = await fetch(`${url}/api/register`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                // console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();
            if (data.success === true) {
                dispatch(logIn(data)); 
            }
        } catch (error) {       
            // console.log('REGISTER_ERROR');
        }
    };
    const REFRESH = async (token) => { 
        try {
            const response = await fetch(`${url}/api/refresh-token`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({}),
            });
            if (!response.ok) {
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();
            if (data.success === true) {
                dispatch({ type: 'REFRESH_SUCCESS', payload: data });
            } else {
                dispatch({ type: 'REFRESH_FAILED', payload: data });
            }
        } catch (error) { 
            dispatch({ type: 'REFRESH_ERROR'});
            console.error("Error occurred:", error); 
        }
    };
    const LOGIN = async (formData) => { 
        try {
            const response = await fetch(`${url}/api/login`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                setAction('wrong');
                setIsAction(true);                
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();
            if (data.success === true) {;
                dispatch(logIn(data)); 
                setAction('');
                setIsAction(false);
            }
        } catch (error) {       
            setAction('wrong');
            setIsAction(true);
            console.error(error);
        }
    };
    const FORGOT = async (formData) => { 
        try {
            const response = await fetch(`${url}/api/forgot`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                // console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();

        } catch (error) {       
            // console.log('FORGOT_ERROR'); 
        }
    };
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
        setAction('');
        setIsAction(false);
        setFormData(prevState => ({
            ...prevState,
            [formType]: {
                ...prevState[formType],
                [name]: value
            }
        }));
    };
    const handleSubmit = (formType, action) => async (e) => {
        e.preventDefault();
        await action(formData[formType]);
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
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        REFRESH(token);
    }, []);
    const renderForm = () => {
        switch (isOpen) {
            case 'log_in':
                return (
                    <form id="log_in" onSubmit={handleSubmit('login', LOGIN)}>
                        <button className="close" onClick={handleClosePopup}>
                            <p><Image src={closeSvg} alt="#"/>Закрыть</p>
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
                            placeholder={isAction ? "Неверный пароль или почта" : 'Введите пароль'} 
                            value={isAction ? "" : formData.login.password} 
                            onChange={handleChange('login')} 
                            name='password'
                            className={action}
                            required />  
                        <button type="submit">войти</button>                  
                        <button onClick={() => handleToggle('reset')}>Я забыл(а) пароль</button>
                        <p className="pc">Нажимая на кнопку, вы соглашаетесь <a href="#">с политикой<br/>конфиденциальности и политикой использования<br/>персональных данных</a></p>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href="#">с политикой конфиденциальности и политикой<br/>использования персональных данных</a></p>
                    </form>
                );
            case 'regist':
                return (
                    <form id="regist" onSubmit={handleSubmit('register', REGISTER)}>
                        <button className="close" onClick={handleClosePopup}>
                            <p><Image src={closeSvg} alt="#"/>Закрыть</p>
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
                            name='password_confirmation'
                            required/>
                        <button>Зарегистрироваться</button>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href="#">с политикой конфиденциальности и политикой<br/> использования персональных данных</a></p>
                    </form>
                );
            case 'reset':
                return (
                    <form id="reset" onSubmit={handleSubmit('forgot', FORGOT)}>
                        <button className="close" onClick={handleClosePopup}>
                            <p><Image src={closeSvg} alt="#"/>Закрыть</p>
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
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href="#">с политикой конфиденциальности и политикой<br/>использования персональных данных</a></p>
                    </form>
                );
            case 'send':
                return (
                    <div id="send">
                        <button className="close" onClick={handleClosePopup}>
                        <p><Image src={closeSvg} alt="#"/>Закрыть</p>
                        </button>
                        <h2>Отправили письмо<br/>на вашу почту</h2>
                        <p>Зайдите на ваш email<br/>и восстановите пароль</p>
                        <button onClick={() => handleToggle('log_in')}>вернуться к авторизации</button>
                        <p className="mob">Нажимая на кнопку, вы соглашаетесь<br/><a href="#">с политикой конфиденциальности и политикой<br/>использования персональных данных</a></p>
                    </div>
                );
            case 'burger':
                return (
                    <div id="burger">
                        <header>
                            <Image src={closeSvg} alt="#"/>
                            <button onClick={() => {isAuth ? window.location.href = `https://${urlLk}` : handleToggle('log_in')}}>Создать квиз</button>
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
                            <p><Image src={closeSvg} alt="#"/>Закрыть</p>
                        </button>
                        <h2>Вы авторизованы</h2>
                        <p><a href={`https://${urlLk}`}>Перейти в Личный кабинет</a></p>
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