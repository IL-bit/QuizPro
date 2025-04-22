import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BANNEDUSERS } from '../../../middleware';
import LeftBar from './leftBar/LeftBar';
import './style.scss';
import eye from '../img/eye_close.svg';
import edit from '../img/edit.svg';
import trash from '../img/trash.svg';

const BlockedUsers = () => {  
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Token);
  const blockedUsers = useSelector((state) => state.admin.blockedUsers);  
  const isBlocked = useSelector((state) => state.admin.isBlocked);  
  useEffect(() => {
    if (!isBlocked) {
      dispatch(BANNEDUSERS(token));      
    }
  });

  return (
    <div className='container-fluid'>
      <div className="row admin">
        <LeftBar />       
        <div className="col-xxl-10" id='BlockedUsers'>
          <h1>Заблокированные пользователи</h1>
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
              <p>Логин (почта)</p>
              <p>Основание</p>
              <p>Редактирование</p>
            </div>
            {blockedUsers.length > 0 ? blockedUsers.map(User => (
              <div className="answer" key={User.id}>
                <p>{User.id}</p>
                <p>{User.createAt}</p>                
                <p>{User.name || User.email}</p>
                <p>{User.reason}</p>
                <div>
                  <button><img src={trash} alt="#" /></button>
                  <button><img src={eye} alt="#" /></button>
                  <button><img src={edit} alt="#" /></button>
                </div>
              </div>
            )) : null}

          </div>
        </div>  
      </div>
    </div>
  )
}

export default BlockedUsers;