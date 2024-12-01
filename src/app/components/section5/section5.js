import './section5.scss';

const Section5 = () => {
    return (
        <div className="row" id="fifth_section">
            <div className="col-12">
                <h2><b>Удобный личный кабинет</b><br/>для предпринимателя и маркетолога</h2>
                <div className="list">
                    <button className="list_item">
                        <img src="#" alt="#" />
                        Все квизы в одном месте
                    </button>
                    <button className="list_item">
                        <img src="#" alt="#" />
                        Конверсии каждого квиза
                    </button>
                    <button className="list_item">
                        <img src="#" alt="#" />
                        Конверсии каждого вопроса
                    </button>
                    <button className="list_item">
                        <img src="#" alt="#" />
                        Редактирование и настройка всех проектов
                    </button>
                    <button className="list_item">
                        <img src="#" alt="#" />
                        База заявок и ответов
                    </button>
                    <button className="list_item">
                        <img src="#" alt="#" />
                        Прибыль каждого квиза
                    </button>
                </div>
                <img src="#" alt="#" className="img_list" />
                <div className="more_funct">
                    <span class="badge-custom">+15</span>
                    <span class="text-custom">удобных функций</span>
                </div>
            </div>
        </div>
    )
}

export default Section5;