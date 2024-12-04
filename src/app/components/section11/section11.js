import './section11.scss';

const Section11 = () => {
    return(
        <section className="row" id="eleventh_section" aria-labelledby="section11-title">
            <div className="col-xxl-12">
                <h2 id="section11-title"><b>Создайте квиз</b><br />для ваших бизнес-задач</h2>
                <div className="cards">
                    <article className="card" aria-labelledby="card-title-1">
                        <img src="#" alt="Быстрый опросник" />
                        <h5 id="card-title-1"><b>Быстрый опросник</b></h5>
                        <p>Один из самых эффективных<br />способов стабильно<br />получать заявки</p>
                        <button title="Смотреть квиз" aria-label="Смотреть квиз Быстрый опросник">Смотреть квиз</button>
                    </article>
                    <article className="card" aria-labelledby="card-title-2">
                        <img src="#" alt="Страница о компании" />
                        <h5 id="card-title-2"><b>Страница о компании</b></h5>
                        <p>Мини-сайт с информацией<br />о вашем бизнесе и квиз<br />в одном месте</p>
                        <button title="Смотреть квиз" aria-label="Смотреть квиз Страница о компании">Смотреть квиз</button>
                    </article>
                    <article className="card" aria-labelledby="card-title-3">
                        <img src="#" alt="Магазин" />
                        <h5 id="card-title-3"><b>Магазин</b></h5>
                        <p>Поможет подобрать клиенту нужный<br />товар или предложить несколько<br />вариантов</p>
                        <button title="Смотреть квиз" aria-label="Смотреть квиз Магазин">Смотреть квиз</button>
                    </article>
                </div>
                <div className="cards">
                    <article className="card" aria-labelledby="card-title-4">
                        <img src="#" alt="Калькулятор" />
                        <h5 id="card-title-4"><b>Калькулятор</b></h5>
                        <p>Соберёт контакты, рассчитает<br />стоимость и создаст чат<br />с вашим менеджером</p>
                        <button title="Смотреть квиз" aria-label="Смотреть квиз Калькулятор">Смотреть квиз</button>
                    </article>
                    <article className="card" aria-labelledby="card-title-5">
                        <img src="#" alt="Видео-консультант" />
                        <h5 id="card-title-5"><b>Видео-консультант</b></h5>
                        <p>Живое общение с клиентом<br />и ответы на самые частые вопросы</p>
                        <button title="Смотреть квиз" aria-label="Смотреть квиз Видео-консультант">Смотреть квиз</button>
                    </article>
                    <article className="card" aria-labelledby="card-title-6">
                        <img src="#" alt="Что-то новое" />
                        <h5 id="card-title-6"><b>Что-то новое...</b></h5>
                        <p>Превью вариации квиза, который будет в<br />разработке в будущем. Чтобы показать<br />амбиции. Квиз дота2. Найди мать</p>
                        <button className="soon" title="Скоро" aria-label="Скоро">Скоро</button>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Section11;