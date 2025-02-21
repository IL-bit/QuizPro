import React from 'react';
import './style.scss';
import LeftBar from '../../components/constructor/leftbar/LeftBar';
import copy from '../../img/Constructor/create/copy.svg';
import tt from '../../img/Constructor/create/tt.svg';
import vk from '../../img/Constructor/create/vk.svg';
import tg from '../../img/Constructor/create/tg.svg';


const Install = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBar />
            </div>
            <div className="col-xxl-9">
                <div id="install">
                    <div className="head">
                        <h2>Прямая ссылка на квиз</h2>
                        <div className="status">Не опубликовано</div>
                        <div className="link">
                            <div>https://qzpro.me/6762ed89a4633e00266f65ba<button>Копировать<img src={copy} alt="#" /></button></div>
                        </div>
                    </div>
                    <div className="social">
                        <h2>Социальные сети</h2>
                        <div className="items">
                            <div className="item">
                                <h6>ВКонтакте</h6>
                                <p>Поставить ссылку-виджет в сообществе</p>
                                <button>Подключить</button>
                                <img src={vk} alt="#" />
                            </div>
                            <div className="item">
                                <h6>Telegram</h6>
                                <p>Открывать по ссылке в телеграм-боте</p>
                                <button>Подключить</button>
                                <img src={tg} alt="#" />
                            </div>
                            <div className="item">
                                <h6>Tik Tok</h6>
                                <p>Поставить ссылку в шапку профиля</p>
                                <button>Подключить</button>
                                <img src={tt} alt="#" />
                            </div>
                        </div>
                    </div>
                    <div className="code">
                        <h2>Встраивание на сайт</h2>
                        <div className="init">
                            <h5>Код инициализации</h5>
                            <p>Вставьте код в блок head в начале страницы.</p>
                            <div></div>
                            <button>Копировать<img src={copy} alt="#" /></button>
                        </div>
                        <div className="instal">
                            <h5>Код установки квиза</h5>
                            <p>Скопируйте этот код и установите в то место, где должен быть квиз.</p>
                            <div></div>
                            <button>Копировать<img src={copy} alt="#" /></button>
                        </div>
                        <p><span>Проверить правильность установки</span><br/>Введите полный адрес страницы, где вы установили квиз, и нажмите "проверить".</p>
                        <div className="link">Ccылка<div>https://qzpro.me<button>Проверить</button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Install;