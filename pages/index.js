import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup, closePopup, toggleButton, changeActiveButton } from '../redux/actions';
import Section7 from "../clientComponents/section7";
import Section11 from "../clientComponents/section11";
import Menu from "../clientComponents/Menu";
import FiveMin from "../clientComponents/FiveMin";
import FourStep from "../clientComponents/FourStep";
import FAQ from "@/clientComponents/FAQ";
import logoSvg from '../img/logo.svg';
import icon1Svg from '../img/icon1.svg';
import icon2Svg from '../img/icon2.svg';
import icon3Svg from '../img/icon3.svg';
import icon1 from '../img/user.svg';
import icon2 from '../img/support.svg';
import icon1MobSvg from '../img/icon1_mob.svg';
import icon2MobSvg from '../img/icon2_mob.svg';
import icon3MobSvg from '../img/icon3_mob.svg';
import crm from '../img/crm.svg';
import bots from '../img/bots.svg';
import pay from '../img/pay.svg';
import vk from '../img/vk.svg';
import site from '../img/site.svg';
import social from '../img/social.svg';
import link from '../img/link.svg';
import tg from '../img/tg.svg';
import openSvg from '../img/open.svg';
import closeSvg from '../img/close.svg';
import div_func_1 from '../img/div_func_1.png';
import div_func_2 from '../img/div_func_2.png';
import div_func_3 from '../img/div_func_3.png';
import div_func_4 from '../img/div_func_4.png';
import div_func_5 from '../img/div_func_5.png';
import div_func_6 from '../img/div_func_6.png';
import logo2Svg from '../img/logo2.svg';
import cursor from '../img/cursor.svg';
import cursor2 from '../img/cursor_mob.svg';
import firstSvg from '../img/first_1.svg';
import secondSvg from '../img/second_2.svg';
import div_1 from '../img/div_1_tenth.png';
import div_2 from '../img/div_2_tenth.png';
import div_3 from '../img/div_3_tenth.png';
import div_4 from '../img/div_4_tenth.png';
import div_5 from '../img/div_5_tenth.png';
import div_6 from '../img/div_6_tenth.png';
import swipeSvg from '../img/swipe.svg';
import video from '../img/video.svg';
import fast from '../img/fastquiz.svg';
import shop from '../img/shop.svg';
import calculator from '../img/calculator.svg';
import company from '../img/company.svg';
import smthnew from '../img/smthnew.svg';
import logo from '../img/logo.svg';
/* <Image /> */

export default function Home() {
  const isAuth = useSelector((state) => state.isAuth);
  const urlLk = useSelector((state) => state.url);
  const activeButton = useSelector((state) => state.button);
  const dispatch = useDispatch();
  const currentButton = useSelector((state) => state.activebutton);
  const appData = [
    { id: 1, cardTitle: "1", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 2, cardTitle: "2", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 3, cardTitle: "3", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 4, cardTitle: "4", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 5, cardTitle: "5", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 6, cardTitle: "6", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 7, cardTitle: "7", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 8, cardTitle: "8", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 9, cardTitle: "9", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 10, cardTitle: "10", convers: "19%", name: "Привели 1.000.000₽ в нишуё дачных домов", link: "#", img: "" },
    { id: 11, cardTitle: "11", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" },
    { id: 12, cardTitle: "12", convers: "19%", name: "Привели 1.000.000₽ в нишу дачных домов", link: "#", img: "" }
  ];   
  const appConfig = {
    tel: "+7 (999) 999 99 99",
    email: "yourmail@yandex.ru",
    vk: "#",
    tg: "#",
    polit: "#",
    marketPhoto: "#"
  }; 

  const handleToggle = (menu) => {
      if (isAuth) {
          dispatch(togglePopup('auth'));
      } else {
          dispatch(togglePopup(menu));
      }
  };
  const handleScroll = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButtonClick = (index) => {     
    dispatch(toggleButton(index));
  };
  const images = [
      '..',
      div_func_1,
      div_func_2,
      div_func_3,
      div_func_4,
      div_func_5,
      div_func_6
  ];   

  const handleChange = (index) => {
      if (index === currentButton) {
        dispatch(changeActiveButton(0));
      } else {
        dispatch(changeActiveButton(index));
      }
  };
  const handleVkClick = () => {
    window.open(appConfig.vk, '_blank');
  };

  const handleTgClick = () => {
      window.open(appConfig.tg, '_blank');
  };

  return (
    <>
      <FAQ />
      <Head>
        <title>QuizPro - Создайте квиз-сайт для бизнеса</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Бесплатно и просто создайте квиз-сайт для бизнеса за 5 минут. Тестируйте маркетинговые квизы без абонентской платы."/>
        <meta name="keywords" content="квиз-сайт, бизнес, маркетинг, заявки, создание квизов, онлайн тесты, квиз-сайты, маркетинговые квизы, бизнес, бесплатные квизы, целевые заявки"/>
      </Head>
      <div className="container p-3">
        <header className="row" id="header">
          <div className="col-xxl-1 col-xl-1 col-lg-1 col-3">
            <Image src={logoSvg} alt="Логотип компании" className="logo"/>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-7">
            <nav>
              <ul>
                <li onClick={() => handleScroll('third_section')}>О квизах</li>
                <li onClick={() => handleScroll('fourth_section')}>Преимущества</li>
                <li onClick={() => handleScroll('seventh_section')}>Кейсы</li>
                <li onClick={() => handleScroll('eighth_section')}>Возможности</li>
                <li onClick={() => handleScroll('fifth_section')}>Маркетологам</li>
              </ul>
            </nav>
            <button className="create" title="Создать новый квиз"onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Создать квиз</button>                
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-2">
              <div className="buttons">
                  <button title="Регистрация на платформе" onClick={() => {isAuth ? handleToggle('auth') : handleToggle('regist')}}>{isAuth ? 'Вы авторизованы' : 'Регистрация'}</button>
                  <button title="Создать новый квиз"    onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Создать квиз</button>
              </div>                               
          </div>
          <div className="col-xxl-1 col-xl-1 col-lg-1 text-end pc">
              <button className="burger" title="Меню" onClick={() => {isAuth ? handleToggle('auth') : handleToggle('log_in')}}></button>
          </div>
          <div className="col-1 text-end mob">
              <button className="burger" title="Меню" onClick={() => handleToggle('burger')}></button>
          </div>
        </header>   
        <Menu />
        <main>
          <section className="row" id="first_section" aria-labelledby="section1-heading">
            <div className="col-xxl-8 col-12 mx-auto">
              <header>
                <h1 id="section1-heading">Квиз-сайты для бизнеса</h1>
                <h2>Бесплатно и просто создайте<br /><b>квиз-сайт</b> для бизнеса</h2>
              </header>
              <FiveMin />
              <h3 className="pc">Тестируйте маркетинговые квизы <b>без абонентской платы.<br />Платите по факту - </b>за теплые и целевые заявки</h3>
              <h3 className="mob">Тестируйте маркетинговые квизы<br /><b>без абонентской платы.<br /><br />Платите по факту - </b>за теплые<br />и целевые заявки</h3>
              <button aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>попробовать бесплатно</button>
            </div>
          </section>    
          <section className="row" id="second_section" aria-labelledby="section2-heading">
            <div className="col-xxl-12 col-12">
              <div className="video" aria-label="Видеопрезентация">
                <video src="#"></video>
              </div>
              <div className="items">
                <article className="item" aria-labelledby="item1-heading">
                  <h3 id="item1-heading"><b>Фильтр-защита от спама</b><br />и нецелевых номеров</h3>
                  <div className="img" aria-label="Иконка фильтра" role="img" aria-hidden="true"></div>
                </article>
                <article className="item" aria-labelledby="item2-heading">
                  <h3 id="item2-heading"><b>Простой и понятный</b><br />интерфейс</h3>
                  <div className="img" aria-label="Иконка интерфейса" role="img" aria-hidden="true"></div>
                </article>
                <article className="item" aria-labelledby="item3-heading">
                  <h3 id="item3-heading"><b>13 вариантов квизов,</b><br />для любого бизнеса</h3>
                  <div className="img" aria-label="Иконка квизов" role="img" aria-hidden="true"></div>
                </article>
              </div>
            </div>
          </section>
          <section className="row" id="third_section" aria-labelledby="section3-heading">
            <div className="col-xxl-12 col-12">
              <h2 id="section3-heading" className="section-title pc">Квизы - самый популярный способ<br/><span>быстро и дешево</span> получить<br/><b>первые заявки в свой бизнес</b></h2>
              <h2 className="mob">Квизы - самый популярный<br/>способ <span>быстро и дешево</span><br/>получить <b>первые заявки<br/>в свой бизнес</b></h2>
              <div className="items">
                <article className="item" aria-labelledby="item1-heading">
                  <Image src={icon1Svg} alt="Иконка тестирования ниш" className="icon pc"/>
                  <Image src={icon1MobSvg} alt="Иконка тестирования ниш для мобильных" className="icon mob"/>
                  <h3 id="item1-heading">Идеальный вариант<br/><b>тестировать </b>новые<br/>ниши и направления</h3>
                  <div className='div_img1'></div>
                </article>
                <article className="item" aria-labelledby="item2-heading">
                  <Image src={icon2Svg} alt="Иконка тестирования ниш" className="icon pc"/>
                  <Image src={icon2MobSvg} alt="Иконка тестирования ниш для мобильных" className="icon mob"/>
                  <h3 className="pc" id="item2-heading"><b>Не нужно платить</b><br/>за дорогой сайт, ждать<br/>его разработки и рисковать<br/>остаться без заявок</h3>
                  <h3 className="mob" id="item2-heading"><b>Не нужно платить</b> за дорогой сайт,<br/>ждать его разработки и рисковать<br/>остаться без заявок</h3>
                  <div className='div_img2'></div>
                </article>
                <article className="item" aria-labelledby="item3-heading">
                  <Image src={icon3Svg} alt="Иконка тестирования ниш" className="icon pc"/>
                  <Image src={icon3MobSvg} alt="Иконка тестирования ниш для мобильных" className="icon mob"/>
                  <h3 id="item3-heading"><b>Простой и понятный дизайн</b><br/>поможет создать квиз новичку<br/>и опытному предпринимателю<br/>за 5-10 минут</h3>
                  <div className='div_img3'></div>
                </article>
              </div>
            </div>
          </section>
          <section className="row" id="fourth_section" aria-labelledby="section4-heading">
            <div className="col-xxl-12">
              <FourStep />
              <header>
                  <h2 id="section4-heading">отделяют вас <b>от первых клиентов</b></h2>
              </header>
              <article id="step1" aria-labelledby="step1-heading">
                <h3 id="step1-heading">Выбираете формат</h3>
                <p><span>6 вариантов</span> размещения</p>
                <div className="platforms">
                  <div className="vk" aria-label="ВКонтакте">
                    <Image src={vk} alt="Логотип ВКонтакте"/>
                    <p>ВКонтакте</p>
                  </div>
                  <div className="site" aria-label="Сайт">
                    <Image src={site} alt="Логотип сайта"/>
                    <p>Сайт</p>
                  </div>
                  <div className="social" aria-label="Социальные сети">
                    <Image src={social} alt="Логотип социальных сетей"/>
                    <p>Социальные сети</p>
                  </div>
                  <div className="link" aria-label="Прямая ссылка">
                    <Image src={link} alt="Иконка прямой ссылки"/>
                    <p>Прямая ссылка</p>
                  </div>
                  <div className="tg" aria-label="Телеграм">
                    <Image src={tg} alt="Логотип Телеграм"/>
                    <p>Телеграм</p>
                  </div>
                </div>
                <div className="icon"></div>
                <div className="screen"></div>
              </article>
              <article id="step2" aria-labelledby="step2-heading">
                <h3 id="step2-heading">Готовите вопросы</h3>
                <p className="pc">
                    Задать правильные вопросы и узнать<br />
                    <span className="blue">пожелания</span> = <span className="beige">правильный диалог,</span><br />
                    который помогает услышать клиента и <b>попасть<br />в его пожелания на 100%</b>
                </p>
                <p className="mob">
                    Задать правильные вопросы<br />
                    и узнать <span>пожелания</span> = правильный<br />
                    диалог, который помогает услышать<br />
                    клиента и <b>попасть<br />в его пожелания на 100%</b>
                </p>
                <p className="questions"><span>13 вариантов</span> вопросов</p>
                <div className="icon" aria-hidden="true"></div>
                <div className="screen" aria-hidden="true"></div>
              </article>
              <article id="step3" aria-labelledby="step3-heading">
                <h3 id="step3-heading">Показываете <span className="blue">то,</span> <span className="orange">что нужно</span></h3>
                <p className="mob">
                    <b>На основе ответов</b> предлагаем<br />
                    клиенту товары, услуги<br />
                    и рассчитываем их стоимость
                </p>
                <p className="pc">
                    <b>На основе ответов</b> предлагаем клиенту<br />
                    товары, услуги и рассчитываем их стоимость
                </p>
                <p className="left"><span>Разные предложения</span><br />в зависимости от ответов</p>
                <p className="right"><span>Калькулятор</span><br />стоимости</p>
                <div className="icon" aria-hidden="true"></div>
                <div className="screen" aria-hidden="true"></div>
              </article>
              <article id="step4" aria-labelledby="step4-heading">
                <h3 id="step4-heading">Предлагаете оставить заявку</h3>
                <p className="pc">
                    Правильные вопросы и конец качественного<br />
                    диалога - идеальный момент для оставления<br />
                    заявки
                </p>
                <p className="mob">
                    Правильные вопросы и конец<br />
                    качественного диалога - идеальный<br />
                    момент для оставления заявки
                </p>
                <div className="features">
                    <div className="crm" aria-label="Интеграция с CRM">
                      <Image src={crm} alt="Интеграция с CRM"/>
                      <p>Интеграция<br />с CRM</p>
                    </div>
                    <div className="bots" aria-label="Перевод в воронки и чат-боты">
                      <Image src={bots} alt="Перевод в воронки и чат-боты" />
                      <p>Перевод в воронки<br />и чат-боты</p>
                    </div>
                    <div className="pay" aria-label="Оплата здесь и сейчас">
                      <Image src={pay} alt="Оплата здесь и сейчас" />  
                      <p>Оплата здесь<br />и сейчас</p>
                    </div>
                </div>
                <div className="icon" aria-hidden="true"></div>
                <div className="screen" aria-hidden="true"></div>
                <button aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>попробовать бесплатно</button>
              </article>
            </div>
          </section>
          <section className="row" id="fifth_section" aria-labelledby="fifth_section_title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <h2 id="fifth_section_title"><b>Удобный личный кабинет</b><br/>для предпринимателя и маркетолога</h2>
                <article className="list pc">
                  <button className={`list_item ${activeButton === 1 ? 'show' : ''}`} key={1} onClick={() => handleButtonClick(1)} title="Все квизы в одном месте" aria-label="Все квизы в одном месте">
                      <Image src={activeButton === 1 ? openSvg : closeSvg} alt="Иконка открытия" />
                      Все квизы в одном месте
                  </button>
                  <button className={`list_item ${activeButton === 2 ? 'show' : ''}`} key={2} onClick={() => handleButtonClick(2)} title="Конверсии каждого квиза" aria-label="Конверсии каждого квиза">
                      <Image src={activeButton === 2 ? openSvg : closeSvg} alt="Иконка закрытия" />
                      Конверсии каждого квиза
                  </button>
                  <button className={`list_item ${activeButton === 3 ? 'show' : ''}`} key={3} onClick={() => handleButtonClick(3)} title="Конверсии каждого вопроса" aria-label="Конверсии каждого вопроса">
                      <Image src={activeButton === 3 ? openSvg : closeSvg} alt="Иконка закрытия" />
                      Конверсии каждого вопроса
                  </button>
                  <button className={`list_item ${activeButton === 4 ? 'show' : ''}`} key={4} onClick={() => handleButtonClick(4)} title="Редактирование и настройка всех проектов" aria-label="Редактирование и настройка всех проектов">
                      <Image src={activeButton === 4 ? openSvg : closeSvg} alt="Иконка закрытия" />
                      Редактирование и настройка всех проектов
                  </button>
                  <button className={`list_item ${activeButton === 5 ? 'show' : ''}`} key={5} onClick={() => handleButtonClick(5)} title="База заявок и ответов" aria-label="База заявок и ответов">
                      <Image src={activeButton === 5 ? openSvg : closeSvg} alt="Иконка закрытия" />
                      База заявок и ответов
                  </button>
                  <button className={`list_item ${activeButton === 6 ? 'show' : ''}`} key={6} onClick={() => handleButtonClick(6)} title="Прибыль каждого квиза" aria-label="Прибыль каждого квиза">
                      <Image src={activeButton === 6 ? openSvg : closeSvg} alt="Иконка закрытия" />
                      Прибыль каждого квиза
                  </button>
                  <Image src={images[activeButton]} alt="Изображение списка" className="img_list" />                    
                </article>
                <article className="list mob">
                    <button className={`list_item ${activeButton === 1 ? 'show' : ''}`} key={1} onClick={() => handleButtonClick(1)} title="Все квизы в одном месте" aria-label="Все квизы в одном месте">
                        <Image src={activeButton === 1 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Все квизы в одном месте</p>
                        <Image src={images[activeButton]} alt="Изображение списка" className="img_list" /> 
                    </button>
                    <button className={`list_item ${activeButton === 2 ? 'show' : ''}`} key={2} onClick={() => handleButtonClick(2)} title="Конверсии каждого квиза" aria-label="Конверсии каждого квиза">
                      <Image src={activeButton === 2 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Конверсии каждого<br/>квиза</p>
                        <Image src={images[activeButton]} alt="Изображение списка" className="img_list" />                    
                    </button>
                    <button className={`list_item ${activeButton === 3 ? 'show' : ''}`} key={3} onClick={() => handleButtonClick(3)} title="Конверсии каждого вопроса" aria-label="Конверсии каждого вопроса">
                      <Image src={activeButton === 3 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Конверсии каждого вопроса</p>
                        <Image src={images[activeButton]} alt="Изображение списка" className="img_list" /> 
                    </button>
                    <button className={`list_item ${activeButton === 4 ? 'show' : ''}`} key={4} onClick={() => handleButtonClick(4)} title="Редактирование и настройка всех проектов" aria-label="Редактирование и настройка всех проектов">
                      <Image src={activeButton === 4 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Редактирование<br/>и настройка всех проектов</p>
                        <Image src={images[activeButton]} alt="Изображение списка" className="img_list" /> 
                    </button>
                    <button className={`list_item ${activeButton === 5 ? 'show' : ''}`} key={5} onClick={() => handleButtonClick(5)} title="База заявок и ответов" aria-label="База заявок и ответов">
                      <Image src={activeButton === 5 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>База заявок и ответов</p>
                        <Image src={images[activeButton]} alt="Изображение списка" className="img_list" /> 
                    </button>
                    <button className={`list_item ${activeButton === 6 ? 'show' : ''}`} key={6} onClick={() => handleButtonClick(6)} title="Прибыль каждого квиза" aria-label="Прибыль каждого квиза">
                        <Image src={activeButton === 6 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Прибыль каждого квиза</p>
                        <Image src={images[activeButton]} alt="Изображение списка" className="img_list" /> 
                    </button>                   
                </article>

                <div className="more_funct" onClick={() => handleToggle('log_in')}>
                    <p><span>+15</span> удобных функций</p>
                </div>
            </div>
          </section>
          <section className="row" id="sixth_section" aria-labelledby="sixth_section_title">
            <div className="col-xxl-7 col-xl-7 col-lg-8 offset-xxl-5 offset-xl-5 offset-lg-4 col-12 offset-0">
                <h2 id="sixth_section_title" className="pc">
                    Смотрите, какие вопросы <b>понижают<br />конверсию квиза</b> и интерес клиентов
                </h2>
                <h2 id="sixth_section_title" className="mob">
                    Смотрите, какие вопросы<br/><b>понижают конверсию<br />квиза</b> и интерес клиентов
                </h2>
                <p className="pc">
                    Отслеживайте эффективность каждого этапа, тестируйте<br />
                    новые варианты и выбирайте самые лучшие
                </p>
                <p className="mob">
                    Отслеживайте<br />эффективность каждого<br />этапа, тестируйте новые<br />варианты и выбирайте<br />самые лучшие
                </p>
            </div>
          </section>
          <section className="row" id="seventh_section" aria-labelledby="section7-title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <Image src={logo2Svg} alt="Логотип компании" className="logo"></Image>
                <h2 id="section7-title" className="pc">Десятки квизов в разных нишах<br /><b>приносят прибыль</b> клиентам <span>прямо сейчас</span></h2>
                <h3 className="pc">Мы собрали базу <b>самых прибыльных</b> и актуальных опросников.<br />Вам остается выбрать нишу и <b>получать заявки</b></h3>
                <h2 id="section7-title" className="mob">Десятки квизов в разных<br />нишах <b>приносят прибыль</b><br/>клиентам <span>прямо сейчас</span></h2>
                <h3 className="mob">Мы собрали базу <b>самых прибыльных</b><br/>и актуальных опросников.<br /><br />Вам остается выбрать нишу<br/>и <b>получать заявки</b></h3>
                <div className="pc">
                    <div className="cards">
                        {appData.slice(0, 3).map((item, index) => (
                            <div className="card" key={item.id} aria-labelledby={`card-title-${index}`}>
                                <p id={`card-title-${index}`}>{item.cardTitle}</p>
                                <p>Конверсия <span>{item.convers}</span></p>
                                <Image alt="Изображение квиза" src={item.img}/>
                                <h5>{item.name}</h5>
                                <Link href={item.link} title="Смотреть квиз" aria-label="Смотреть квиз">Смотреть квиз</Link>
                                <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>попробовать бесплатно</button>
                            </div>
                        ))}
                    </div>
                    <div className="cards">
                        {appData.slice(3, 6).map((item, index) => (
                            <div className="card" key={item.id} aria-labelledby={`card-title-${index}`}>
                                <p id={`card-title-${index}`}>{item.cardTitle}</p>
                                <p>Конверсия <span>{item.convers}</span></p>
                                <Image alt="Изображение квиза" src={item.img}/>
                                <h5>{item.name}</h5>
                                <Link href={item.link} title="Смотреть квиз" aria-label="Смотреть квиз">Смотреть квиз</Link>
                                <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>попробовать бесплатно</button>
                            </div>
                        ))}
                    </div>
                </div>
                <Section7 />
                <div className="more_funct" id="pc" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>
                  <Image src={cursor} alt="Иконка курсора"/>
                    <p>Смотреть больше квизов</p>
                </div>
                <div className="more_funct" id="mob" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>
                  <Image src={cursor2} alt="Иконка курсора"/>
                    <p>Смотреть больше квизов</p>
                </div>
            </div>
          </section>
          <section className="row" id="eighth_section" aria-labelledby="section8-title">
            <div className="col-xxl-6 col-xl-6 col-lg-6 offset-1 pc">
                <div className="left">
                    <h2 id="section8-title"><b>Ваш личный маркетолог</b><br />всегда на связи</h2>
                    <p>К примеру, <span>ваш квиз приносит мало<br />заявок,</span> и вы не понимаете, как это<br/>исправить.</p>
                    <div className="market">
                        <Image src={logoSvg} alt="Логотип маркетолога"/>
                        <div className="photo" aria-hidden="true"></div>
                        <span>`</span>
                        <h5>Задайте вопрос в чате<br />нашему маркетологу,</h5>
                        <p>Он изучит ситуацию и даст конкретные<br />рекомендации, как повысить конверсии,<br />поделится рабочими квизами в вашей нише<br />и поможет исправить недостатки.</p>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 pc">
                <div className="chat" aria-labelledby="chat-title">
                    <h3 id="chat-title" className="visually-hidden">Чат с маркетологом</h3>
                    <div className="message" aria-label="Сообщение от пользователя">
                        <Image src={icon1} alt="Иконка пользователя"/>
                        <p>Здравствуйте! Меня не устраивает<br />конверсия моего квиза, всего 2%.<br /><br />Не понимаю, что не так. Вы сможете<br />как-то исправить ситуацию?</p>
                    </div>
                    <div className="message" aria-label="Ответ от маркетолога">
                      <Image src={icon2} alt="Иконка поддержки"/>
                        <p>Добрый день! Думаю, да, сейчас<br />изучу ваш квиз и дам конкретные<br />рекомендации по улучшению.</p>
                    </div>
                    <div className="message" aria-label="Дополнительная информация от маркетолога">
                      <Image src={icon2} alt="Иконка поддержки"/>
                        <p>В нашей базе как раз есть квизы<br />в вашей нише с конверсией 8-13%.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 mob">
                <div className="left">
                    <h2 id="section8-title"><b>Ваш личный маркетолог</b><br />всегда на связи</h2>
                    <p>К примеру, <span>ваш квиз приносит мало заявок,<br /></span> и вы не понимаете, как это исправить.</p>
                    <div className="market">
                      <Image src={logoSvg} alt="Логотип маркетолога"/>
                        <div className="photo" aria-hidden="true"></div>
                        <span>"</span>
                        <h5>Задайте вопрос в чате<br />нашему маркетологу,</h5>
                        <p>Он изучит ситуацию и даст конкретные<br />рекомендации, как повысить конверсии,<br />поделится рабочими квизами в вашей нише<br />и поможет исправить недостатки.</p>
                    </div>
                </div>
                <div className="chat" aria-labelledby="chat-title">
                    <h3 id="chat-title" className="visually-hidden">Чат с маркетологом</h3>
                    <div className="message" aria-label="Сообщение от пользователя">
                      <Image src={icon1} alt="Иконка пользователя"/>
                        <p>Здравствуйте! Меня не устраивает<br />конверсия моего квиза, всего 2%.<br /><br />Не понимаю, что не так. Вы сможете<br />как-то исправить ситуацию?</p>
                    </div>
                    <div className="message" aria-label="Ответ от маркетолога">
                      <Image src={icon2} alt="Иконка поддержки"/>
                        <p>Добрый день! Думаю, да, сейчас<br />изучу ваш квиз и дам конкретные<br />рекомендации по улучшению.</p>
                    </div>
                    <div className="message" aria-label="Дополнительная информация от маркетолога">
                      <Image src={icon2} alt="Иконка поддержки"/>
                        <p>В нашей базе как раз есть квизы<br />в вашей нише с конверсией 8-13%.</p>
                    </div>
                </div>
            </div>
          </section>
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
                    <button onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Подключить</button>
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
                    <button onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Подключить</button>
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
                  <button onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Подключить</button>                
                </div>
            </div>
          </section>
          <section className="row" id="ninth_section" aria-labelledby="section9-title">
            <div className="col-xxl-6 col-xl-5 col-lg-6 offset-xxl-0 offset-xl-1 offset-lg-0 pc">
                <h2 id="section9-title">Внедряйте <span>Quiz Pro</span> своим<br />клиентам <strong>и зарабатывайте</strong></h2>
                <h4>Идеально для продюсеров,<br />СММщиков, маркетологов <strong>и вообще<br />всех фрилансеров</strong></h4>
                <div className="first">
                  <Image src={firstSvg} alt="Иконка проекта"/>
                    <p>Закрепляйте свои проекты в личном<br />кабинете и получайте процент<br />с оплаты каждой новой заявки</p>
                </div>
                <div className="second">
                  <Image src={secondSvg} alt="Иконка дохода"/>
                    <p>Чем больше проектов и заявок,<br />тем больше вы зарабатываете</p>
                </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 offset-xxl-1 offset-xl-0 offset-lg-0 pc">
                <div className="right" aria-hidden="true"></div>
                <button title="Попробовать бесплатно" aria-label="Попробовать Quiz Pro бесплатно" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>попробовать бесплатно</button>
            </div>
            <div className="col-12 mob">
                <h2 id="section9-title">Внедряйте Quiz Pro своим<br />клиентам и зарабатывайте</h2>
                <h4>Идеально для продюсеров, СММщиков,<br />маркетологов и вообще всех фрилансеров</h4>
                <div className="first">
                    <Image src={firstSvg} alt="Иконка проекта"/>
                    <p>Закрепляйте свои проекты в личном кабинете<br />и получайте процент с оплаты<br />каждой новой заявки</p>
                </div>
                <div className="second">
                    <Image src={secondSvg} alt="Иконка дохода"/>
                    <p>Чем больше проектов и заявок,<br />тем больше вы зарабатываете</p>
                </div>
                <div className="right" aria-hidden="true"></div>
                <button title="Попробовать бесплатно" aria-label="Попробовать Quiz Pro бесплатно" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>попробовать бесплатно</button>                
            </div>
          </section>
          <section className="row" id="tenth_section" aria-labelledby="section10-title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <h2 id="section10-title" className="pc"><strong>10+ инструментов</strong><br />для повышения продаж через ваш<br />диалог с клиентом</h2>
                <h2 id="section10-title" className="mob">10+ инструментов<br />для повышения продаж<br /><br /><span>через ваш<br />диалог с клиентом</span></h2>
                <div className="cards">
                    <article className="card" aria-labelledby="card-title-1">
                        <Image src={div_1} alt="Адаптация дизайна" />
                        <h5 id="card-title-1"><strong>Адаптируйте дизайн</strong> под свои<br />пожелания или пользуйтесь<br />готовыми шаблонами</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-2">
                        <Image src={div_2} alt="А/Б тестирование" />
                        <h5 id="card-title-2"><strong>А/Б тестирование</strong> квизов<br />и аналитика результатов</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-3">
                        <Image src={div_3} alt="UTM-метки" />
                        <h5 id="card-title-3"><strong>UTM-метки</strong><br />для отслеживания трафика</h5>
                    </article>
                </div>
                <div className="cards">
                    <article className="card" aria-labelledby="card-title-4">
                        <Image src={div_4} alt="Видео-консультант" />
                        <h5 id="card-title-4"><strong>Видео-консультант</strong><br />при прохождении опросника</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-5">
                        <Image src={div_5} alt="Система мотивации" />
                        <h5 id="card-title-5"><strong>Система мотивации</strong> - рост скидки<br />или подарков за ответы<br />на вопросы</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-6">
                        <Image src={div_6} alt="Удобные варианты оплаты" />
                        <h5 id="card-title-6"><strong>Удобные варианты оплаты</strong><br />для клиентов</h5>
                    </article>
                </div>
                <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>попробовать бесплатно</button>
            </div>
          </section>
          <section className="row" id="eleventh_section" aria-labelledby="section11-title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <h2 id="section11-title"><b>Создайте квиз</b><br />для ваших бизнес-задач</h2>
                <div className="pc">
                  <div className="cards">
                      <article className="card" aria-labelledby="card-title-1">
                          <Image src={fast} alt="Быстрый опросник" />
                          <h5 id="card-title-1"><b>Быстрый опросник</b></h5>
                          <p>Один из самых эффективных<br />способов стабильно<br />получать заявки</p>
                          <button title="Смотреть квиз" aria-label="Смотреть квиз Быстрый опросник" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Смотреть квиз</button>
                      </article>
                      <article className="card" aria-labelledby="card-title-2">
                          <Image src={company} alt="Страница о компании" />
                          <h5 id="card-title-2"><b>Страница о компании</b></h5>
                          <p>Мини-сайт с информацией<br />о вашем бизнесе и квиз<br />в одном месте</p>
                          <button title="Смотреть квиз" aria-label="Смотреть квиз Страница о компании" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Смотреть квиз</button>
                      </article>
                      <article className="card" aria-labelledby="card-title-3">
                          <Image src={shop} alt="Магазин" />
                          <h5 id="card-title-3"><b>Магазин</b></h5>
                          <p>Поможет подобрать клиенту нужный<br />товар или предложить несколько<br />вариантов</p>
                          <button title="Смотреть квиз" aria-label="Смотреть квиз Магазин" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Смотреть квиз</button>
                      </article>
                  </div>
                  <div className="cards">
                      <article className="card" aria-labelledby="card-title-4">
                          <Image src={calculator} alt="Калькулятор" />
                          <h5 id="card-title-4"><b>Калькулятор</b></h5>
                          <p>Соберёт контакты, рассчитает<br />стоимость и создаст чат<br />с вашим менеджером</p>
                          <button title="Смотреть квиз" aria-label="Смотреть квиз Калькулятор" onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Смотреть квиз</button>
                      </article>
                      <article className="card" aria-labelledby="card-title-5">
                          <Image src={video} alt="Видео-консультант" />
                          <h5 id="card-title-5"><b>Видео-консультант</b></h5>
                          <p>Живое общение с клиентом<br />и ответы на самые частые вопросы</p>
                          <button title="Смотреть квиз" aria-label="Смотреть квиз Видео-консультант"onClick={() => {isAuth ? window.location.href = `http://${urlLk}` : handleToggle('log_in')}}>Смотреть квиз</button>
                      </article>
                      <article className="card" aria-labelledby="card-title-6">
                          <Image src={smthnew} alt="Что-то новое" />
                          <h5 id="card-title-6"><b>Что-то новое...</b></h5>
                          <p>Превью вариации квиза, который будет в<br />разработке в будущем. Чтобы показать<br />амбиции. Квиз дота2. Найди мать</p>
                          <button className="soon" title="Скоро" aria-label="Скоро">Скоро</button>
                        </article>
                    </div>                     
                </div>
                <Section11 />
            </div>
          </section>
          <section id='thirth_section' className='row'>
            <div className="col-12 col-xxl-12 col-xl-12 col-lg-12">
                <h2>Ответы на частые вопросы</h2>
                <div className={currentButton === 1 ? 'active' : ''}>
                    <button>1. Оплата и тарифы</button>
                    <div className="img" onClick={() => handleChange(1)}></div>
                    <div className="text">
                        <p><strong>Почему я не могу просмотреть данные заявки, если на балансе ещё есть заявки?</strong><br/>Если срок подписки истёк, доступ к заявкам временно заблокирован. Чтобы снова их просмотреть, необходимо продлить тариф с таким же или большим лимитом.</p>
                        <p><strong>Где посмотреть заявки, полученные в неоплаченный период?</strong><br/>После окончания подписки заявки остаются в системе, но доступ к ним возможен только после продления тарифа.</p>
                        <p><strong>Как оплатить через расчётный счёт?</strong><br/>При оформлении тарифа выберите вариант "Оплата по счёту", получите платёжные реквизиты и совершите оплату. После этого свяжитесь с поддержкой для активации подписки.</p>
                        <p><strong>Когда нужно пополнять баланс?</strong><br/>Рекомендуем пополнять баланс заранее, если у вас заканчиваются оплаченные заявки или истекает срок подписки.</p>
                        <p><strong>Куда приходят уведомления о заканчивающемся балансе?</strong><br/>Вы получите уведомление на e-mail, когда останется менее 10 заявок, а также после их полного исчерпания.</p>
                        <p><strong>Есть ли автоплатёж?</strong><br/>Да, вы можете настроить автоматическое продление подписки, чтобы ваш квиз продолжал работать без перерывов.</p>
                        <p><strong>Сколько стоит сервис?</strong><br/>Стоимость зависит от выбранного тарифа. Все актуальные цены можно найти в разделе "Тарифы".</p>
                        <p><strong>Что будет при смене тарифа?</strong><br/>При смене тарифа оставшиеся заявки аннулируются, а новый тариф начинает действовать с момента его активации.</p>
                        <p><strong>Баланс заявок общий для всех квизов?</strong><br/>Да, заявки списываются с единого баланса, вне зависимости от количества квизов в аккаунте.</p>
                        <p><strong>Как оплатить несколько месяцев?</strong><br/>Можно сразу оплатить подписку на 3, 6 или 12 месяцев. Долгосрочные тарифы идут со скидкой.</p>
                        <p><strong>Как оплатить заранее?</strong><br/>Заранее оплатить подписку нельзя, но вы можете подключить автопродление, чтобы не пропустить оплату.</p>
                        <p><strong>Что делать, если лимит заявок закончился раньше срока?</strong><br/>Можно докупить дополнительные заявки или перейти на тариф с большим лимитом.</p>
                    </div>
                </div>
                <div className={currentButton === 2 ? 'active' : ''}>
                    <button>2. Работа с квизом</button>
                    <div className="img" onClick={() => handleChange(2)}></div>
                    <div className="text">
                        <p><strong>Как тестировать квиз без списания заявок с баланса?</strong><br/>Используйте тестовые данные при заполнении формы (например, test@email.com и +79999999999). Такие заявки не будут списываться.</p>
                        <p><strong>Чем отличается «Стартовая страница» и «Landing page»?</strong><br/>Стартовая страница – это первый экран квиза, который помогает вовлечь пользователя. Landing page – это отдельная промо-страница для квиза, на которую можно вести рекламу.</p>
                        <p><strong>Почему не работают результаты (ошибка «Не удалось рассчитать результат»)?</strong><br/>Проверьте настройки условий. Возможно, не заданы параметры для расчёта или нет универсального результата.</p>
                        <p><strong>Как вставить квиз на сайт без кнопки (в тело сайта)?</strong><br/>Вы можете встроить квиз в тело сайта с помощью iframe-кода, который находится в разделе "Установка квиза".</p>
                        <p><strong>Где взять ID квиза?</strong><br/>ID квиза можно найти в его настройках или в адресной строке при редактировании.</p>
                        <p><strong>Как привязать свой домен?</strong><br/>Подключение собственного домена доступно в настройках. Вам потребуется внести изменения в DNS-записи.</p>
                        <p><strong>Как добавить квиз в группу ВК?</strong><br/>В разделе "Установка квиза" есть инструкция по интеграции с ВКонтакте.</p>
                        <p><strong>Почему изменения в квизе или интеграции не работают?</strong><br/>После внесения правок убедитесь, что нажали кнопку "Сохранить" и "Опубликовать".</p>
                        <p><strong>Почему срабатывает автооткрытие квиза, если ползунок отключён?</strong><br/>Обновите страницу и проверьте настройки автооткрытия в разделе "Дизайн".</p>
                        <p><strong>Вы создаёте квиз под заказ?</strong><br/>Нет, но у нас есть партнёры, которые могут помочь с настройкой.</p>
                        <p><strong>Как протестировать сервис бесплатно?</strong><br/>После регистрации у вас будет 14 дней тестового доступа и 10 бесплатных заявок.</p>
                        <p><strong>Что такое бонусные заявки и как их получить?</strong><br/>Бонусные заявки предоставляются новым пользователям для знакомства с сервисом.</p>
                        <p><strong>Что делать после 14 дней тестирования?</strong><br/>Выберите подходящий тариф и активируйте подписку, чтобы продолжить работу.</p>
                        <p><strong>Можно ли использовать квиз без сайта?</strong><br/>Да, вы можете использовать квиз по прямой ссылке или добавить его в соцсети.</p>                       
                    </div>
                </div>
                <div className={currentButton === 3 ? 'active' : ''}>
                    <button>3. Интеграции и уведомления</button>
                    <div className="img" onClick={() => handleChange(3)}></div>
                    <div className="text">
                        <p><strong>Как изменить почту для уведомлений?</strong><br/>Почта для уведомлений настраивается в разделе "Интеграции".</p>
                        <p><strong>Как отправлять письмо клиенту?</strong><br/>Вы можете подключить сервис рассылок и настроить автоматическую отправку писем.</p>
                        <p><strong>Как получать уведомления о заявках на телефон?</strong><br/>Уведомления можно получать в Telegram или по SMS (при подключении интеграции).</p>
                        <p><strong>Где находятся настройки уведомлений?</strong><br/>Все настройки находятся в разделе "Интеграции".</p>
                    </div>
                </div>
                <div className={currentButton === 4 ? 'active' : ''}>
                    <button>4. Настройки и дизайн</button>
                    <div className="img" onClick={() => handleChange(4)}></div>
                    <div className="text">
                        <p><strong>Как изменить пароль от аккаунта?</strong><br/>Перейдите в раздел "Аккаунт" и обновите пароль в настройках безопасности.</p>
                        <p><strong>Какие размеры изображений оптимальны для загрузки?</strong><br/>
                        <strong>Стартовая страница:</strong><br/>
                        Прямая ссылка/домен – 1792х1509 px<br/>
                        Модальное окно – 1380х1300 px<br/>
                        ВК – 1166х1200 px<br/>
                        Планшет – 767х220 px<br/>
                        Мобильная версия – 400x400 px (главный элемент должен быть по центру).<br/>
                        <strong>Изображения в квизе:</strong><br/>
                        Вертикальное – 180х240 px<br/>
                        Квадратное – 240х240 px<br/>
                        Варианты – 380х307 px<br/>
                        Аватар консультанта – 70x70 px<br/>
                        Логотип – 107х37 px<br/>
                        Результаты – 1100х600 px<br/>
                        Бонус – 200x60 px.</p>
                        <p><strong>Как изменить цвет кнопки или квиза?</strong><br/>Настроить цвета можно в разделе "Дизайн".</p>
                        <p><strong>Что такое White Label и сколько это стоит?</strong><br/>White Label – это возможность убрать бренд QuizPro. Доступно в дополнительных настройках тарифа.</p>
                        <p><strong>Партнёрская бонусная программа QuizPro</strong></p>
                        <p><strong>Что такое партнёрская бонусная программа?</strong><br/>Партнёрская бонусная программа QuizPro — это возможность для пользователей приглашать новых клиентов и получать за это вознаграждение в виде кэшбэка на счёт. Программа создана для тех, кто хочет рекомендовать сервис и получать бонусы за активных приглашённых пользователей.</p>
                        <p><strong>Как работает программа?</strong><br/>
                        1. Пригласите друзей и коллег – поделитесь вашей персональной реферальной ссылкой.<br/>
                        2. Новые пользователи регистрируются – приглашённые вами клиенты создают аккаунт по вашей ссылке.<br/>
                        3. Они активируют платный тариф – бонус начисляется, если новый пользователь оплачивает от 300 заявок или от 3 000 ₽.<br/>
                        4. Получайте кэшбэк – как только 5 приглашённых пользователей выполнят условия, вам начисляется 15% кэшбека на карту.</p>
                        <p><strong>Какие бонусы можно получить?</strong><br/>
                        - 15% кэшбека с первой оплаты 5 активных пользователей.<br/>
                        - Возможность приглашать неограниченное количество людей.<br/>
                        - Участие бесплатное и не требует вложений.</p>
                        <p><strong>Где взять свою реферальную ссылку?</strong><br/>Персональная ссылка доступна в личном кабинете во вкладке «Партнёрская бонусная программа». Скопируйте её и отправьте друзьям, разместите в социальных сетях или на сайте.</p>
                        <p><strong>Какие условия должны выполнить приглашённые пользователи?</strong><br/>
                        - Пройти регистрацию по вашей реферальной ссылке.<br/>
                        - Оплатить от 300 заявок или более чем на 3 000 ₽.<br/>
                        - Быть новым пользователем QuizPro (ранее не регистрировались).</p>
                        <p><strong>Как отслеживать свои бонусы?</strong><br/>Вы можете следить за количеством приглашённых пользователей и начисленными бонусами в личном кабинете во вкладке «Партнёрская бонусная программа».</p>

                        <p><strong>Как вывести кэшбэк?</strong><br/>После выполнения условий и начисления бонусов, вы можете запросить вывод на карту. Вывод производится в течение 3 рабочих дней после обработки заявки.</p>

                        <p><strong>Есть ли ограничения?</strong><br/>
                        - Один пользователь может участвовать в программе только с одного аккаунта.<br/>
                        - Бонус начисляется только за новых пользователей.<br/>
                        - Запрещено использовать спам-методы для привлечения пользователей.</p>

                        <p>Начните зарабатывать с QuizPro прямо сейчас!<br/>Присоединяйтесь к партнёрской бонусной программе, делитесь своим опытом использования QuizPro и зарабатывайте на рекомендациях!</p>
                    </div>
                </div>
            </div>
          </section>
          <div id="bg1"></div>
          <div id="bg2"></div>
          <div id="bg3"></div>
          <div id="bg4"></div>
          <div id="bg5"></div>   
        </main>
        <footer className="row" id="footer" aria-labelledby="footer-title">
            <hr className="pc"/>
            <div className="col-xxl-3 col-xl-3 col-lg-3 offset-xxl-1 offset-xl-1 offset-lg-1 pc">
              <Image src={logo} alt="Логотип компании"/>
              <p id="footer-title">Квиз-сайты<br />для бизнеса</p>
            </div>
            <div className="col-xxl-5 col-xl-4 col-lg-5 pc">
              <Link href={`mailto:${appConfig.email}`} title="Написать на почту">{appConfig.email}</Link>
              <Link href={`tel:${appConfig.tel}`} title="Позвонить">{appConfig.tel}</Link>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 offset-xxl-0 offset-xl-1 offset-lg-0 pc">
                <div className="vk" aria-label="ВКонтакте" onClick={handleVkClick} style={{ cursor: 'pointer' }}>
                  <Image src={vk} alt="Иконка ВКонтакте"/>    
                  <p>ВКонтакте</p>
                </div>
                <div className="tg" aria-label="Телеграм" onClick={handleTgClick} style={{ cursor: 'pointer' }}>
                  <Image src={tg} alt="Иконка Телеграм"/>
                  <p>Телеграм</p>
                </div>
            </div>
            <hr className="pc"/>
            <div className="col-xxl-3 col-xl-3 col-lg-3 offset-2 pc">
              <Link href="#" title="Политика конфиденциальности" className="polit">Политика конфиденциальности</Link>
            </div>
            <div className="col-12 mob text-center">
                <Image src={logo} alt="Логотип компании"/>
                <p id="footer-title">Квиз-сайты<br />для бизнеса</p>
                <Link href={`mailto:${appConfig.email}`} title="Написать на почту">{appConfig.email}</Link>
                <Link href={`tel:${appConfig.tel}`} title="Позвонить">{appConfig.tel}</Link>
                <div className="vk" aria-label="ВКонтакте" onClick={handleVkClick} style={{ cursor: 'pointer' }}>
                  <Image src={vk} alt="Иконка ВКонтакте"/>           
                  <p>ВКонтакте</p>
                </div>
                <div className="tg" aria-label="Телеграм" onClick={handleTgClick} style={{ cursor: 'pointer' }}>
                  <Image src={tg} alt="Иконка Телеграм"/>
                  <p>Телеграм</p>
                </div>
                <Link href="#" title="Политика конфиденциальности" className="polit">Политика конфиденциальности</Link>
            </div>
        </footer>
        <div id="bg"></div>  
      </div>
      
    </>
  );
}
