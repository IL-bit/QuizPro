import React from 'react';
import './style.scss';

const Rate = () => {
  return (
    <div id="Rate">
      <h2>Тарифы</h2>
      <div className="items">
        <div className="item">
          <div className="name">Бесплатный</div>
          <h4>Тестирование сервиса<br/>для новых пользователей</h4>
          <div className="bg_limit"></div>
          <div className="limit">
            <p>Лимит заявок</p>
            <p>10</p>
          </div>                
          <h3>Базовые расширения</h3>
          <h3>Базовая аналитика</h3>
          <div className="description">
            <p>Ограничения:</p>
            <p>Логотип «Quiz Pro» на квизах</p>
            <p>Использование домена «Quiz Pro»</p>
            <p>Нет доступа к расширенной аналитике</p>
            <p>Нет экспорта заявок в CSV</p>
            <p>Нет возможности использовать White Label</p>
            <p>Нет кастомного домена</p>
            <p>Нет загрузки видео</p>
            <p>Нет вставки кода в квиз</p>
            <p>Нет защиты от дублей и чёрного списка</p>
            <p>Нет приглашений в проект</p>
          </div>
          <div className="description_price">
              <h5>Стоимость:</h5>
              <p><span>0 ₽.</span></p>
          </div>
          <button>Подключить</button>
        </div>
        <div className="item">
          <div className="name">Оптимальный<span>HOT</span></div>
          <h4>Подходит для малого бизнеса<br/>с небольшими объёмами заявок</h4>
          <div className="bg_limit"></div>
          <div className="limit">
              <p>Лимит заявок</p>
              <p>до 150</p>
          </div>                
          <h3>Все функции бесплатного тарифа</h3>
          <h3>Расширенная аналитика</h3>
          <h3>Экспорт заявок в CSV</h3>
          <div className="description">
            <p>Ограничения:</p>
            <p>Логотип «Quiz Pro» на квизах</p>
            <p>Использование домена «Quiz Pro»</p>
            <p>Нет возможности использовать White Label</p>
            <p>Нет кастомного домена</p>
            <p>Нет загрузки видео</p>
            <p>Нет вставки кода в квиз</p>
            <p>Нет защиты от дублей и чёрного списка</p>
            <p>Нет приглашений в проект</p>
          </div>
          <div className="description_price">
              <h5>Стоимость:</h5>
              <p><span>15 ₽/лид до 150 заявок</span><br/>20 ₽/лид при превышении лимита</p>
          </div>
          <button>Подключить</button>
        </div>
        <div className="item">
          <div className="name">Премиум</div>
          <h4>Для профессионального использования<br/>и больших объёмов заявок</h4>
          <div className="bg_limit"></div>
          <div className="limit">
              <p>Лимит заявок</p>
              <p>от 150</p>
          </div>                
          <h3>Все функции тарифа «Оптимальный»</h3>
          <div className="description">
            <p>Дополнительно:</p>
            <p>White Label (убрать логотип)</p>
            <p>Кастомный домен</p>
            <p>Загрузка видео</p>
            <p>Вставка кода в квиз</p>
            <p>Безлимитные квизы</p>
            <p>Приглашения в проект</p>
            <p>Защита от дублей, чёрный список</p>
          </div>
          <div className="description_price">
              <h5>Стоимость:</h5>
              <p><span>150–300 заявок: 10 ₽/лид</span><br/>301–500 заявок: 8,5 ₽/лид<br/>501–1 000 заявок: 7 ₽/лид<br/>1 001+ заявок: 5 ₽/лид</p>
          </div>
          <button>Подключить</button>       
        </div>
      </div>
    </div>
  )
}
export default Rate;