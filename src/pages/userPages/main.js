import React from 'react';
import { useSelector } from 'react-redux';
import close from '../../img/close.svg';

const Main = () => {
    const user = useSelector((state) => state.currentUser);
  return (
    <div id='main'>
        <div className="icon">
            <div>UF</div>
            <p>{user.name}</p>
        </div>
        <div className="info">
            <div className="left">
                <p>Фамилия:</p>
                <p>Имя:</p>
                <p>ID пользователя:</p>
                <p>Тип аккаунта:</p>
                <p>Баланс:</p>
                <p>Замороженная сумма:</p>
                <p>Общая сумма баллов:</p>
                <p>Время создание:</p>
            </div>
            <div className="right">
                <p>{user.surname}</p>
                <p>{user.name}</p>
                <div>{user.id}</div>
                <p>{user.rate}</p>
                <p>{user.balance}</p>
                <p>{user.frozenBalance}</p>
                <p>{user.score}</p>                
                <p>{user.createAt}</p>

            </div>
        </div>
        <div className="actions">
            <button><img src={close} alt="#" />Заморозить счёт</button>
            <button>Подтвердить</button>
            <button>Уверен на 100%</button>
        </div>
    </div>
  )
}

export default Main;