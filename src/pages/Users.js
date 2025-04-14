import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import LeftBar from './leftBar/LeftBar';
import './style.scss';
import eye from '../img/Eye.svg';

const Users = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  return (
    <div className='container-fluid'>
      <div className="row">
        <LeftBar />       
        <div className="col-xxl-10" id='Users'>
          <h1>Аккаунты пользователей</h1>
          <button>Выйти</button>
          <div>
            <form>
              <input type="number" placeholder='Поиск по сумме'/>
              <input type="email" placeholder='Поиск по почте'/>
              <input type="date" />
              <button>Найти</button>
            </form>
            <div className="filters">
              <p>ID</p>
              <p>Дата создания учётной записи</p>
              <p>Почта</p>              
              <p>Баланс</p>
              <p>Тариф</p>
              <p>Аккаунт</p>
            </div>
            {users.map(user => (
              <div className="answer" key={user.id}>
                <p>{user.id}</p>
                <p>{user.createAt}</p>                
                <p>{user.email}</p>
                <p>{user.balance}</p>                                      
                <p>{user.rate}</p>
                <button onClick={() => navigate(`/user/${user.id}`)}><img src={eye} alt="#" /></button>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Users;