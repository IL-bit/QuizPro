"use client";
import React from 'react';
import Image from 'next/image';
import LeftBarLK from '@/app/components/Lk/LeftBar/LeftBarLK';
import check from '../../../public/base/check.svg';
import cursor from '../../../public/base/cursor.svg';
import integrations from '../../../public/base/integrations.svg';
import folder from '../../../public/base/folder.svg';
import services from '../../../public/base/services.svg';
import advert from '../../../public/base/advert.svg';
import pip from '../../../public/base/pip.svg';
import './style.scss';


const Base = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBarLK />
            </div>
            <div className="col-xxl-9">
                <div id="base">
                    <h2>База знаний</h2>
                    <div className="content">
                        <div className="item" onClick={() => window.location.href = '/user/base/payment'}>
                            <Image src={check} alt='#'/>
                            <h5>Оплата</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => window.location.href = '/user/base/content'}>
                            <Image src={pip} alt='#'/>
                            <h5>Наполнение квиза</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => window.location.href = '/user/base/settings'}>
                            <Image src={folder} alt='#'/>
                            <h5>Настройка квиза</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => window.location.href = '/user/base/integrations/sites'}>
                            <Image src={integrations} alt='#'/>
                            <h5>Интеграция с сайтом</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => window.location.href = '/user/base/integrations/servises'}>
                            <Image src={services} alt='#'/>
                            <h5>Интеграция с сервисами</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => window.location.href = '/user/base/analytics'}>
                            <Image src={cursor} alt='#'/>
                            <h5>Аналитика</h5>
                            <p>5 статей</p>
                        </div>
                        <div className="item" onClick={() => window.location.href = '/user/base/advert'}>
                            <Image src={advert} alt='#'/>
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