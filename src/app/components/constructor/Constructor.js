import React from 'react';
import './style.scss';

const Constructor = () => {
  return (
    <div id="constructor">
        <button className='activ'>Стартовая страница</button>
        <button>Вопросы</button>
        <button>Форма контактов</button>
        <div className="body">
            <canvas></canvas>
            <div className="instrumens">
                <div className="background">
                    <p>Фон</p>
                    <div>
                        <button className='active'>Изображение</button>
                        <button>Видео</button>
                    </div>
                </div>
                <div className="design">
                    <p>Дизайн</p>
                    <div>Стандратная</div>
                </div>
                <div className="align">
                    <p>Выравнивание</p>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                </div>                
            </div>

            <div className="start">
                <p>Отключить стартовую страницу</p>
                <p>Настроить вопросы</p>
            </div>
        </div>
    </div>
  )
}

export default Constructor;