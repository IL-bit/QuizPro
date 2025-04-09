import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePopup } from '../../../actions';
import './section12.scss';

const Section12 = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.isAuth);
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };
  return (
    <section id="twelvth_section" className='row'>
        <h2>Тарифы</h2>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-12 text-center">
            <div className="price price-1">
                <div className="name">Бесплатный</div>
                <h4>Тестирование сервиса<br/>для новых пользователей</h4>
                <div className="bg_limit"></div>
                <div className="limit">
                    <p>Лимит заявок</p>
                    <p>10</p>
                </div>                
                <h3>Базовые расширения<br/><span>Базовая аналитика</span></h3>
                <p className='description'><span>Ограничения:</span><br/><span class="offset">Логотип «Quiz Pro» на квизах</span><br/><span class="offset">Использование домена «Quiz Pro»</span><br/><span class="offset">Нет доступа к расширенной аналитике</span><br/><span class="offset">Нет экспорта заявок в CSV</span><br/><span class="offset">Нет возможности использовать White Label</span><br/><span class="offset">Нет кастомного домена</span><br/><span class="offset">Нет загрузки видео</span><br/><span class="offset">Нет вставки кода в квиз</span><br/><span class="offset">Нет защиты от дублей и чёрного списка</span><br/><span class="offset">Нет приглашений в проект</span></p>                
                <div className="description_price">
                    <h5>Стоимость:</h5>
                    <p><span>0 ₽.</span></p>
                </div>
                <button onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>Подключить</button>
            </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-12 text-center">
            <div className="price price-2">
                <div className="name">Оптимальный<span>HOT</span></div>
                <h4>Подходит для малого бизнеса<br/>с небольшими объёмами заявок</h4>
                <div className="bg_limit"></div>
                <div className="limit">
                    <p>Лимит заявок</p>
                    <p>до 150</p>
                </div>                
                <h3>Все функции бесплатного тарифа<br/><span>Расширенная аналитика</span><br/><span className='offset'>Экспорт заявок в CSV</span></h3>
                <p className='description'><span>Ограничения:</span><br/><span class="offset">Логотип «Quiz Pro» на квизах</span><br/><span class="offset">Использование домена «Quiz Pro»</span><br/><span class="offset">Нет возможности использовать White Label</span><br/><span class="offset">Нет кастомного домена</span><br/><span class="offset">Нет загрузки видео</span><br/><span class="offset">Нет вставки кода в квиз</span><br/><span class="offset">Нет защиты от дублей и чёрного списка</span><br/><span class="offset">Нет приглашений в проект</span></p>
                <div className="description_price">
                    <h5>Стоимость:</h5>
                    <p><span>15 ₽/лид до 150 заявок</span><br/>20 ₽/лид при превышении лимита</p>
                </div>
                <button onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>Подключить</button>
            </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-12 text-center">
            <div className="price price-3">
                <div className="name">Премиум</div>
                <h4>Для профессионального использования<br/>и больших объёмов заявок</h4>
                <div className="bg_limit"></div>
                <div className="limit">
                    <p>Лимит заявок</p>
                    <p>от 150</p>
                </div>                
                <h3>Все функции тарифа «Оптимальный»</h3>
                <p className='description'><span>Дополнительно:</span><br/><span class="offset">White Label (без логотипа)</span><br/><span class="offset">Кастомный домен</span><br/><span class="offset">Загрузка видео</span><br/><span class="offset">Вставка кода в квиз</span><br/><span class="offset">Безлимитные квизы</span><br/><span class="offset">Приглашения в проект</span><br/><span class="offset">Защита от дублей, чёрный список</span></p>
                <div className="description_price">
                    <h5>Стоимость:</h5>
                    <p><span>150–300 заявок: 10 ₽/лид</span><br/>301–500 заявок: 8,5 ₽/лид<br/>501–1 000 заявок: 7 ₽/лид<br/>1 001+ заявок: 5 ₽/лид</p>
                </div>
               <button onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>Подключить</button>                
            </div>
        </div>
    </section>
  )
}
export default Section12;