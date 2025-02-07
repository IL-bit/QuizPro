"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';
import Logo from '../../../../public/logo.svg';
import Arrow from '../../../../public/arrow.svg';
import Arrow2 from '../../../../public/arrow2.svg';
import Support from '../../../../public/support.svg';
import Logout from '../../../../public/logout.svg';
import Rate from '../../../../public/rate.svg';
import applications from '../../../../public/applic.svg';
import Balance from '../../../../public/balance.svg';
import Balance2 from '../../../../public/balance2.svg';

const LeftBarLK = () => {
  return (
    <div id="LeftBarLk">
        <div className="head">
          <Image src={Logo} alt="#"/>
          <div className='balance'>
            <p><Image src={Balance} alt="#"/>Баланс</p>
            <button><Image src={Balance2} alt="#"/><p>1.234 ₽</p></button>
          </div>
          <div className="account">
            <button className='base'>D</button>
            <div className="new">1</div>
          </div>
        </div>
        <div className="applications">
          <Image src={applications} alt="#"/>
          <p>Все заявки</p>
          <div className="count">22</div>
        </div>
        <div className="rate" onClick={() => window.location.href = '/user/rate'}>
          <Image src={Rate} alt="#"/>
          <p>Тариф</p>
          <div className="rates activ">Base</div>
          <div className="rates">Optim</div>
          <div className="rates">Prem</div>
          <div className="plus">+</div>
        </div>
        <nav>
          <div className="btns">
            <button>Создать квиз <Image src={Arrow} alt='#'/></button>
            <button>Недавние <Image src={Arrow2} alt='#'/></button>
            <button onClick={() => window.location.href = '/user'}>Мои квизы</button>         
            <Link href='#'><Image alt='#' src={Support}/>Написать в поддержку</Link>
          </div>
          <Link href='#'><Image alt='#' src={Logout}/>Сменить аккаунт</Link>
        </nav>
        <div className="refer">
          <p>Партнёрская программа</p>
          <button>Заработать</button>          
        </div>

    </div>
  )
}
export default LeftBarLK;