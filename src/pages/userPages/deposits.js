import React from 'react';
import { useSelector } from 'react-redux';

const Deposits = () => {
    const user = useSelector((state) => state.currentUser)
  return (
    <div id='deposit'>
        <h1>Пополнение суммы</h1>
        <div>Сумма<input type="text" placeholder='Пополнения счёта'/></div>
        <div>Примечание<textarea></textarea><button>Подтвердить</button><button>Очистить</button></div>
    </div>
  )
}

export default Deposits;