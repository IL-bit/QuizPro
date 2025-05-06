import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../middleware';
import logo from './img/leftbar/logo.svg';
import './style.scss';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.isAuth);
  const isAdmin = useSelector((state) => state.isAdmin);
  const [dataForm, setDataForm] = useState({
    email: '',
    password: ''
  });

  const handleClick = (route) => { navigate(route); }; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm(prevState => {
      const newState = {
        ...prevState,
        [name]: value
      };
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAuth) {
      dispatch(LOGIN(dataForm));      
    }

  };
  useEffect(() => {
    if (isAuth) {
      navigate('/user');
    }
    if (isAdmin) {
      navigate('/admin/statist');
    }
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-4 mx-auto text-center col-xl-4 col-lg-4 col-12" id='auth'>
          <div id="blur"></div>
          <img src={logo} alt="#" className='img'/>
          <h2>Войти</h2>
          <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                name="email" 
                placeholder="Введите почту" 
                className="form" 
                value={dataForm.email} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="password" 
                name="password" 
                placeholder="Введите пароль" 
                className="form" 
                value={dataForm.password} 
                onChange={handleChange} 
                required 
              />
              <button type="submit">Вход</button>
              <a href="#" onClick={() => handleClick('/forgot')}>Я забыл(а) пароль</a>
          </form>
          <p>Нет аккаунта? <a href="#" onClick={() => handleClick('/reg')}>Зарегистрироваться</a></p>
          <p className="polit">Нажимая на кнопку, вы соглашаетесь <a href="#">с политикой конфиденциальности и политикой использования <wbr/>персональных данных</a></p>
        </div>
      </div>
    </div>
  )
}

export default Auth;