import './section5.scss';
import openSvg from '../img/open.svg';
import closeSvg from '../img/close.svg';

const Section5 = () => {
    return (
        <div className="row" id="fifth_section">
            <div className="col-xxl-12">
                <h2><b>Удобный личный кабинет</b><br/>для предпринимателя и маркетолога</h2>
                <div className="list">
                    <button className="list_item">
                        <img src={openSvg} alt="#" />
                        Все квизы в одном месте
                    </button>
                    <button className="list_item">
                        <img src={closeSvg} alt="#" />
                        Конверсии каждого квиза
                    </button>
                    <button className="list_item">
                        <img src={closeSvg} alt="#" />
                        Конверсии каждого вопроса
                    </button>
                    <button className="list_item">
                        <img src={closeSvg} alt="#" />
                        Редактирование и настройка всех проектов
                    </button>
                    <button className="list_item">
                        <img src={closeSvg} alt="#" />
                        База заявок и ответов
                    </button>
                    <button className="list_item">
                        <img src={closeSvg} alt="#" />
                        Прибыль каждого квиза
                    </button>
                    <img src="#" alt="#" className="img_list" />                    
                </div>

                <div className="more_funct">
                    <p><span>+15</span> удобных функций</p>
                </div>
            </div>
        </div>
    )
}

export default Section5;