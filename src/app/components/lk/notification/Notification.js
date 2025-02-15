import React from 'react';
import Logo from '../../../img/leftbar/logo.svg';
import './style.scss';

const Notification = () => {
  return (
    <div className="notification">
        <h4><img src={Logo} alt="#" />«Осталось 7 дней до завершения действия вашего бесплатного тарифа.</h4>
        <p>Если тариф не будет обновлён, ваш квиз станет недоступным для клиентов, а доступ к базе данных временно заблокируется. Перейдите на тариф «Оптимальный» или «Премиум», чтобы продолжить работать с сервисом.»</p>
        <p className="date">22.02.2025</p>
    </div>
  )
}
export default Notification;