import './section5.scss';
import { togglePopup, toggleButton } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import openSvg from '../img/open.svg';
import closeSvg from '../img/close.svg';
import div_func_1 from '../img/div_func_1.png';
import div_func_2 from '../img/div_func_2.png';
import div_func_3 from '../img/div_func_3.png';
import div_func_4 from '../img/div_func_4.png';
import div_func_5 from '../img/div_func_5.png';
import div_func_6 from '../img/div_func_6.png';


const Section5 = () => {
    const dispatch = useDispatch();    
    const activeButton = useSelector((state) => state.button);
    const isAuth = useSelector((state) => state.isAuth);
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
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
    
    return (
        <section className="row" id="fifth_section" aria-labelledby="fifth_section_title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <h2 id="fifth_section_title"><b>Удобный личный кабинет</b><br/>для предпринимателя и маркетолога</h2>
                <article className="list pc">
                    <button className={`list_item ${activeButton === 1 ? 'show' : ''}`} key={1} onClick={() => handleButtonClick(1)} title="Все квизы в одном месте" aria-label="Все квизы в одном месте">
                        <img src={activeButton === 1 ? openSvg : closeSvg} alt="Иконка открытия" />
                        Все квизы в одном месте
                    </button>
                    <button className={`list_item ${activeButton === 2 ? 'show' : ''}`} key={2} onClick={() => handleButtonClick(2)} title="Конверсии каждого квиза" aria-label="Конверсии каждого квиза">
                        <img src={activeButton === 2 ? openSvg : closeSvg} alt="Иконка закрытия" />
                        Конверсии каждого квиза
                    </button>
                    <button className={`list_item ${activeButton === 3 ? 'show' : ''}`} key={3} onClick={() => handleButtonClick(3)} title="Конверсии каждого вопроса" aria-label="Конверсии каждого вопроса">
                        <img src={activeButton === 3 ? openSvg : closeSvg} alt="Иконка закрытия" />
                        Конверсии каждого вопроса
                    </button>
                    <button className={`list_item ${activeButton === 4 ? 'show' : ''}`} key={4} onClick={() => handleButtonClick(4)} title="Редактирование и настройка всех проектов" aria-label="Редактирование и настройка всех проектов">
                        <img src={activeButton === 4 ? openSvg : closeSvg} alt="Иконка закрытия" />
                        Редактирование и настройка всех проектов
                    </button>
                    <button className={`list_item ${activeButton === 5 ? 'show' : ''}`} key={5} onClick={() => handleButtonClick(5)} title="База заявок и ответов" aria-label="База заявок и ответов">
                        <img src={activeButton === 5 ? openSvg : closeSvg} alt="Иконка закрытия" />
                        База заявок и ответов
                    </button>
                    <button className={`list_item ${activeButton === 6 ? 'show' : ''}`} key={6} onClick={() => handleButtonClick(6)} title="Прибыль каждого квиза" aria-label="Прибыль каждого квиза">
                        <img src={activeButton === 6 ? openSvg : closeSvg} alt="Иконка закрытия" />
                        Прибыль каждого квиза
                    </button>
                    <img src={images[activeButton]} alt="Изображение списка" className="img_list" />                    
                </article>
                <article className="list mob">
                    <button className={`list_item ${activeButton === 1 ? 'show' : ''}`} key={1} onClick={() => handleButtonClick(1)} title="Все квизы в одном месте" aria-label="Все квизы в одном месте">
                        <img src={activeButton === 1 ? openSvg : closeSvg} alt="Иконка открытия" className="icon"/>
                        <p>Все квизы в одном месте</p>
                        <img src={images[activeButton]} alt="Изображение списка" className="img_list" />
                    </button>
                    <button className={`list_item ${activeButton === 2 ? 'show' : ''}`} key={2} onClick={() => handleButtonClick(2)} title="Конверсии каждого квиза" aria-label="Конверсии каждого квиза">
                        <img src={activeButton === 2 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Конверсии каждого<br/>квиза</p>
                        <img src={images[activeButton]} alt="Изображение списка" className="img_list" />                    
                    </button>
                    <button className={`list_item ${activeButton === 3 ? 'show' : ''}`} key={3} onClick={() => handleButtonClick(3)} title="Конверсии каждого вопроса" aria-label="Конверсии каждого вопроса">
                        <img src={activeButton === 3 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Конверсии каждого вопроса</p>
                        <img src={images[activeButton]} alt="Изображение списка" className="img_list" />
                    </button>
                    <button className={`list_item ${activeButton === 4 ? 'show' : ''}`} key={4} onClick={() => handleButtonClick(4)} title="Редактирование и настройка всех проектов" aria-label="Редактирование и настройка всех проектов">
                        <img src={activeButton === 4 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Редактирование<br/>и настройка всех проектов</p>
                        <img src={images[activeButton]} alt="Изображение списка" className="img_list" />
                    </button>
                    <button className={`list_item ${activeButton === 5 ? 'show' : ''}`} key={5} onClick={() => handleButtonClick(5)} title="База заявок и ответов" aria-label="База заявок и ответов">
                        <img src={activeButton === 5 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>База заявок и ответов</p>
                        <img src={images[activeButton]} alt="Изображение списка" className="img_list" />
                    </button>
                    <button className={`list_item ${activeButton === 6 ? 'show' : ''}`} key={6} onClick={() => handleButtonClick(6)} title="Прибыль каждого квиза" aria-label="Прибыль каждого квиза">
                        <img src={activeButton === 6 ? openSvg : closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Прибыль каждого квиза</p>
                        <img src={images[activeButton]} alt="Изображение списка" className="img_list" />
                    </button>                   
                </article>

                <div className="more_funct" onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>
                    <p><span>+15</span> удобных функций</p>
                </div>
            </div>
        </section>
    )
}

export default Section5;