import React from 'react';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import check from '../../img/base/check.svg';
import cursor from '../../img/base/cursor.svg';
import integrations from '../../img/base/integrations.svg';
import folder from '../../img/base/folder.svg';
import services from '../../img/base/services.svg';
import advert from '../../img/base/advert.svg';
import pip from '../../img/base/pip.svg';
import './style.scss';
import { useNavigate } from 'react-router-dom';


const Base = () => {
    const navigate = useNavigate();   
    const handleClick = (route) => {
      navigate(route);
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3">
                <LeftBar />
            </div>
            <div className="col-xxl-9 col-xl-9">
                <div id="base">
                    <h2>База знаний</h2>
                    <div className="content">
                        <div className="item" onClick={() => handleClick('/user/base/payment')}>
                            <img src={check} alt="#" />
                            <h5>Оплата</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => handleClick('/user/base/content')}>
                            <img src={pip} alt="#" />
                            <h5>Наполнение квиза</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => handleClick('/user/base/settings')}>
                            <img src={folder} alt="#" />
                            <h5>Настройка квиза</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => handleClick('/user/base/integrations/sites')}>
                            <img src={integrations} alt="#" />
                            <h5>Интеграция с сайтом</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => handleClick('/user/base/integrations/servises')}>
                            <img src={services} alt="#" />
                            <h5>Интеграция с сервисами</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => handleClick('/user/base/analytics')}>
                            <img src={cursor} alt="#" />
                            <h5>Аналитика</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => handleClick('/user/base/advert')}>
                            <img src={advert} alt="#" />
                            <h5>Реклама</h5>
                            <p>5 статей</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Base;