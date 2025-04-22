import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { USERDEPOSIT } from '../../../../middleware';

const Deposits = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const token = useSelector((state) => state.Token);
  const user = useSelector((state) => state.admin.currentUser );

  const handlePost = () => {
    const [integerPart, decimalPart] = inputValue.split('.'); 
    const integerValue = integerPart ? parseInt(integerPart, 10) : 0; 
    const decimalValue = decimalPart ? parseFloat(`0.${decimalPart}`) : 0;

    if (!isNaN(integerValue) && !isNaN(decimalValue)) {
      dispatch(USERDEPOSIT(token, user.id, integerValue, decimalValue)); 
    } 
  };

  return (
    <div id='deposit'>
      <h1>Пополнение суммы</h1>
      <div>
        Сумма
        <input
          type="text"
          required
          placeholder='Пополнения счёта'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
        />
      </div>
      <div>
        Примечание
        <textarea></textarea>
        <button type='submit' onClick={handlePost}>Подтвердить</button>
        <button type='button' onClick={() => setInputValue('')}>Очистить</button>
      </div>
    </div>
  );
};

export default Deposits;