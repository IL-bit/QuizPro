import './section5.scss';
import { togglePopup } from '../../../actions';
import { useDispatch } from 'react-redux';
import openSvg from '../img/open.svg';
import closeSvg from '../img/close.svg';

const Section5 = () => {
    const dispatch = useDispatch();
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };
    return (
        <section className="row" id="fifth_section" aria-labelledby="fifth_section_title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <h2 id="fifth_section_title"><b>Удобный личный кабинет</b><br/>для предпринимателя и маркетолога</h2>
                <article className="list pc">
                    <button className="list_item show" title="Все квизы в одном месте" aria-label="Все квизы в одном месте">
                        <img src={openSvg} alt="Иконка открытия" />
                        Все квизы в одном месте
                    </button>
                    <button className="list_item" title="Конверсии каждого квиза" aria-label="Конверсии каждого квиза">
                        <img src={closeSvg} alt="Иконка закрытия" />
                        Конверсии каждого квиза
                    </button>
                    <button className="list_item" title="Конверсии каждого вопроса" aria-label="Конверсии каждого вопроса">
                        <img src={closeSvg} alt="Иконка закрытия" />
                        Конверсии каждого вопроса
                    </button>
                    <button className="list_item" title="Редактирование и настройка всех проектов" aria-label="Редактирование и настройка всех проектов">
                        <img src={closeSvg} alt="Иконка закрытия" />
                        Редактирование и настройка всех проектов
                    </button>
                    <button className="list_item" title="База заявок и ответов" aria-label="База заявок и ответов">
                        <img src={closeSvg} alt="Иконка закрытия" />
                        База заявок и ответов
                    </button>
                    <button className="list_item" title="Прибыль каждого квиза" aria-label="Прибыль каждого квиза">
                        <img src={closeSvg} alt="Иконка закрытия" />
                        Прибыль каждого квиза
                    </button>
                    <img src="#" alt="Изображение списка" className="img_list" />                    
                </article>
                <article className="list mob">
                    <button className="list_item show" title="Все квизы в одном месте" aria-label="Все квизы в одном месте">
                        <img src={openSvg} alt="Иконка открытия" className="icon"/>
                        <p>Все квизы в одном месте</p>
                        <img src="#" alt="Изображение списка" className="img_list" />
                    </button>
                    <button className="list_item" title="Конверсии каждого квиза" aria-label="Конверсии каждого квиза">
                        <img src={closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Конверсии каждого<br/>квиза</p>
                        <img src="#" alt="Изображение списка" className="img_list" />                    
                    </button>
                    <button className="list_item" title="Конверсии каждого вопроса" aria-label="Конверсии каждого вопроса">
                        <img src={closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Конверсии каждого вопроса</p>
                        <img src="#" alt="Изображение списка" className="img_list" />
                    </button>
                    <button className="list_item" title="Редактирование и настройка всех проектов" aria-label="Редактирование и настройка всех проектов">
                        <img src={closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Редактирование<br/>и настройка всех проектов</p>
                        <img src="#" alt="Изображение списка" className="img_list" />
                    </button>
                    <button className="list_item" title="База заявок и ответов" aria-label="База заявок и ответов">
                        <img src={closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>База заявок и ответов</p>
                        <img src="#" alt="Изображение списка" className="img_list" />
                    </button>
                    <button className="list_item" title="Прибыль каждого квиза" aria-label="Прибыль каждого квиза">
                        <img src={closeSvg} alt="Иконка закрытия" className="icon"/>
                        <p>Прибыль каждого квиза</p>
                        <img src="#" alt="Изображение списка" className="img_list" />
                    </button>                   
                </article>

                <div className="more_funct" onClick={() => handleToggle('log_in')}>
                    <p><span>+15</span> удобных функций</p>
                </div>
            </div>
        </section>
    )
}

export default Section5;