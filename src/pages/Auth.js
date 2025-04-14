import React from 'react';
import LeftBar from './leftBar/LeftBar';
import './style.scss';

const Auth = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <LeftBar />       
        <div className="col-xxl-10" id='Auth'>
          <div>
            <form>
              <h1>Вход в админ панель</h1>
              <input type="email" placeholder='Почта'/>
              <input type="password" placeholder='Пароль'/>
              <div><button className='active'></button>Запомнить меня</div>
              <button type='submit'>Войти</button>
            </form>            
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Auth;