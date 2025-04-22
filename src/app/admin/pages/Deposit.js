import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { DEPOSITS } from '../../../middleware';
import LeftBar from './leftBar/LeftBar';
import './style.scss';
import eye from '../img/Eye.svg';

const Deposit = () => {
  const dispatch = useDispatch();
  const deposits = useSelector((state) => state.admin.deposits);
  const token = useSelector((state) => state.Token);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(DEPOSITS(token));
  }, []);
  return (
    <div className='container-fluid'>
      <div className="row admin">
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
                <p>{deposit.user_id}</p>
                <p>{deposit.created_at}</p>                
                <p>{deposit.name}<br/>{deposit.email}</p>
                <p>{deposit.amount}</p>                
                <p>Ю money</p>
                <div className={`${deposit.status}`}>{deposit.status === 'ok' ? 'подтверждена' : ''}{deposit.status === 'error' ? 'отклонено' : ''}{deposit.status === 'pending' ? 'в процессе' : ''}</div>                
                <p>{deposit.reason}</p>
                <button onClick={() => navigate('/admin/user/123456')}><img src={eye} alt="#" /></button>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Deposit;