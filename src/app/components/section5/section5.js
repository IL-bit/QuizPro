import './section5.scss';
import openSvg from '../img/open.svg';
import closeSvg from '../img/close.svg';

const Section5 = () => {
    return (
        <section className="row" id="fifth_section" aria-labelledby="fifth_section_title">
            <div className="col-xxl-12">
                <h2 id="fifth_section_title"><b>Удобный личный кабинет</b><br/>для предпринимателя и маркетолога</h2>
                <div className="list pc">
                    <button className="list_item" title="Все квизы в одном месте" aria-label="Все квизы в одном месте">
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
                </div>
                <div className="list mob">
                    <button className="list_item" title="Все квизы в одном месте" aria-label="Все квизы в одном месте">
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
                </div>

                <div className="more_funct">
                    <p><span>+15</span> удобных функций</p>
                </div>
            </div>
        </section>
    )
}

export default Section5;