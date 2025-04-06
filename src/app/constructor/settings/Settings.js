import React from 'react';
import './style.scss';
import LeftBar from '../../components/constructor/leftbar/LeftBar';
import trash from '../../img/Constructor/settings/trash.svg';
import close from '../../img/Constructor/settings/close.svg';
import copy from '../../img/Constructor/settings/copy.svg';
import route from '../../img/Constructor/settings/route.svg';

const Settings = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
                <LeftBar />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
                <div id="settings">
                    <h2>Настройки</h2>
                    <p>Удалить квиз<img src={trash} alt="#" /></p>
                    <div className="turn_off">
                        <button>Отключить квиз</button>
                    </div>
                    <div className="get_access">
                        <p><img src={route} alt="#" />Выдать доступ другому пользователю</p>
                        <div>Доступ по ссылке<div>https://qz.pro.me/6741ca6e3719050026164765<button>Копировать<img src={copy} alt="#" /></button></div></div>
                        <div>Доступ по почте<div>@<button>Отправить</button></div></div>
                    </div>
                    <div className="reset">
                        <p><img src={close} alt="#" />Сбросить статистику</p>
                    </div>
                </div>                
            </div>
        </div>
    </div>

  )
}

export default Settings;