import React from 'react';
import { useSelector } from 'react-redux';
import reload from '../../img/reload.svg';

const History = () => {
    const user = useSelector((state) => state.currentUser);
  return (
    <div id='history'>
        <div>
            <h1>Пользовательские данные транзакции</h1>
            <div className="filters">
                <select>
                    <option value="" selected disabled>Тип заказа</option>
                    <option value="option1">Стартовая страница</option>
                    <option value="option2">Вопросы</option>
                    <option value="option3">Форма контактов</option>
                </select>
                <select>
                    <option value="" selected disabled>Статус заказа</option>
                    <option value="option1">Стартовая страница</option>
                    <option value="option2">Вопросы</option>
                    <option value="option3">Форма контактов</option>
                </select>
                <button>Обновить<img src={reload} alt="#" /></button>
            </div>
            <div className="names">
                <p>Номер заказа</p>
                <p>Сумма сделки</p>
                <p>Баланс после сделки</p>
                <p>Название типа</p>
                <p>Статус сделки</p>
                <p>Примечание</p>
                <p>Время создания</p>
            </div>
            {user.history.map(story =>(
                <div className='story' key={story.id}>
                    <p>{story.id}</p>
                    <p>{story.amount}</p>
                    <p>{story.balanceAfter}</p>
                    <p></p>
                    <p>{story.status}</p>
                    <p></p>
                    <p>{story.date}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default History;