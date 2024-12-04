import './section11.scss';

const Section11 = () => {
    return(
        <div className="row" id="eleventh_section">
            <div className="col-xxl-12">
                <h2><b>Создайте квиз</b><br/>для ваших бизнес-задач</h2>
                <div className="cards">
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5>Быстрый опросник</h5>
                        <p>Один из самых эффективных<br/>способов стабильно<br/>получать заявки</p>
                        <button>Cмотреть квиз</button>
                    </div>
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5>Страница о компании</h5>
                        <p>Мини-сайт с информацией<br/>о вашем бизнесе и квиз<br/>в одном месте</p>
                        <button>Cмотреть квиз</button>
                    </div>
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5>Магазин</h5>
                        <p>Поможет подобрать клиенту нужный<br/>товар или предложить несколько<br/>вариантов</p>
                        <button>Cмотреть квиз</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5>Калькулятор</h5>
                        <p>Соберёт контакты, рассчитает<br/>стоимость и создаст чат<br/>с вашим менеджером</p>
                        <button>Cмотреть квиз</button>
                    </div>
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5>Видео-консультант</h5>
                        <p>Живое общение с клиентом<br/>и ответы на самые частые вопросы</p>
                        <button>Cмотреть квиз</button>
                    </div>
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5>Что то новое...</h5>
                        <p>Превью вариации квиза который будет в<br/>разработке в будущем. Что бы показать<br/>амбиции. Квиз дота2. Найди мать</p>
                        <button className="soon">Скоро</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section11;