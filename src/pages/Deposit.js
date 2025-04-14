import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import LeftBar from './leftBar/LeftBar';
import './style.scss';
import eye from '../img/Eye.svg';

const Deposit = () => {
  const deposits = useSelector((state) => state.deposits);
  const navigate = useNavigate();
  return (
    <div className='container-fluid'>
      <div className="row">
        <LeftBar />       
        <div className="col-xxl-10" id='Deposits'>
          <h1>Пополнения</h1>
          <button>Выйти</button>
          <div>
            <form>
              <input type="number" placeholder='Поиск по сумме'/>
              <input type="email" placeholder='Поиск по почте'/>
              <input type="date" />
              <button>Найти</button>
            </form>
            <div className="filters">
              <p>Номер</p>
              <p>Время и дата</p>
              <p>ФИО (почта)</p>
              <p>Сумма</p>
              <p>Способ оплаты</p>
              <p>Транзакция</p>
              <p>Причина</p>
              <p>Аккаунт</p>
            </div>
            {deposits.map(deposit => (
              <div className="answer" key={deposit.id}>
                <p>{deposit.id}</p>
                <p>{deposit.date}</p>                
                <p>{deposit.name || deposit.email}</p>
                <p>{deposit.amount}</p>                
                <p>Ю money</p>
                <div className={`${deposit.status}`}>{deposit.status === 'ok' ? 'подтверждена' : ''}{deposit.status === 'error' ? 'отклонено' : ''}{deposit.status === 'progress' ? 'в процессе' : ''}</div>                
                <p>{deposit.reason}</p>
                <button onClick={() => navigate('/user/123456')}><img src={eye} alt="#" /></button>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Deposit;