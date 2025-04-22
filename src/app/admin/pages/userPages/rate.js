import React from 'react';
import { useSelector } from 'react-redux';

const Rate = () => {
  const user = useSelector((state) => state.admin.currentUser);
  return (
    <div id='rate'>
      <h1>Настройка типа пользователя</h1>
      <div>Тип пользователя:
        <select>
          <option value="option1">Base</option>
          <option value="option2">Optim</option>
          <option value="option3">Premium</option>
        </select>
      </div>
      <div className="btns">
        <button>Подтвердить</button>
        <button>Отмена</button>
      </div>
    </div>
  )
}

export default Rate;