import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const Auth = () => {
  const navigate = useNavigate();   
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-4 mx-auto text-center" id='auth'>
          <div id="blur"></div>
          {/* <img src={logo} alt="#" className='img'/> */}
          <h2>Войти</h2>
          <form action="#">
              <input type="email" name="email" placeholder="Введите почту" className="form"/>
              <input type="password" name="password" placeholder="Введите пароль" className="form"/>
              <button>Вход</button>
              <a href="#" onClick={() => handleClick('/user')}>Я забыл(а) пароль</a>
          </form>
          <p>Нет аккаунта? <a href="#">Зарегистрироваться</a></p>
          <p className="polit">Нажимая на кнопку, вы соглашаетесь <a href="#">с политикой конфиденциальности и политикой использования <wbr/>персональных данных</a></p>
        </div>
      </div>
    </div>
  )
}
export default Auth;