import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { USERS } from '../../../middleware';
import LeftBar from './leftBar/LeftBar';
import './style.scss';
import eye from '../img/Eye.svg';

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const token = useSelector((state) => state.Token);
  const users = useSelector((state) => state.admin.users);
  const isUsers = useSelector((state) => state.admin.isUsers);
  useEffect(() => {
    if (!isUsers) {
      dispatch(USERS(token));      
    }
  }, [])
  return (
    <div className='container-fluid'>
      <div className="row admin">
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
                <p>{user.created_at}</p>                
                <p>{user.name}<br/>{user.email}</p>
                <p>{user.balance}</p>                                      
                <p>{user.rate_name}</p>
                <button onClick={() => navigate(`/admin/user/${user.id}`)}><img src={eye} alt="#" /></button>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Users;