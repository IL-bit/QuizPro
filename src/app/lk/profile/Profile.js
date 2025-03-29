import React from 'react';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import './style.scss';
import money from '../../img/profile/money.svg';
import copy from '../../img/profile/copy.svg';

const Profile = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
                <LeftBar />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
                <div id="profile">
                    <div className="head">
                        <h2>Профиль</h2>
                        <p><img src={money} alt="#" />Текущий баланс</p>
                        <div className="balance">1.234</div>
                        <button>Пополнить</button>
                        <button>Вывести</button>
                    </div>
                    <div className="email">
                        <h6>Email</h6>
                        <div>email@email.com</div>
                    </div>
                    <div className="password">
                        <h6>Пароль</h6>
                        <div>1234АВавыа344</div>
                    </div>
                    <div className="name">
                        <h6>Ваше имя</h6>
                        <div>Матвей</div>
                    </div>
                    <div className="phone">
                        <h6>Телефон</h6>
                        <div>Отсутствует</div>
                        <button>Сохранить измненения</button>
                        <p>Не сохранять изменения</p>
                    </div>    
                    <div className="tg_notification">
                        <p><span>Уведомлять меня в Telegram</span><br/>чтобы знать, когда заканчиваются заявки или тариф</p>
                        <div>t.me....</div>
                    </div>                      
                    <div className="referal">
                        <p>Пригласите новых пользователей<br/>с помощью вашей уникальной ссылки:</p>
                        <div>q.pro/referal/#id324235</div>
                        <button>Копировать<img src={copy} alt="#" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Profile;