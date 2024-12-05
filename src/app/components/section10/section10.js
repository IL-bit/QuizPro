import './section10.scss';

const Section10 = () => {
    return(
        <section className="row" id="tenth_section" aria-labelledby="section10-title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <h2 id="section10-title" className="pc"><strong>10+ инструментов</strong><br />для повышения продаж через ваш<br />диалог с клиентом</h2>
                <h2 id="section10-title" className="mob">10+ инструментов<br />для повышения продаж<br /><br /><span>через ваш<br />диалог с клиентом</span></h2>
                <div className="cards">
                    <article className="card" aria-labelledby="card-title-1">
                        <img src="#" alt="Адаптация дизайна" />
                        <h5 id="card-title-1"><strong>Адаптируйте дизайн</strong> под свои<br />пожелания или пользуйтесь<br />готовыми шаблонами</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-2">
                        <img src="#" alt="А/Б тестирование" />
                        <h5 id="card-title-2"><strong>А/Б тестирование</strong> квизов<br />и аналитика результатов</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-3">
                        <img src="#" alt="UTM-метки" />
                        <h5 id="card-title-3"><strong>UTM-метки</strong><br />для отслеживания трафика</h5>
                    </article>
                </div>
                <div className="cards">
                    <article className="card" aria-labelledby="card-title-4">
                        <img src="#" alt="Видео-консультант" />
                        <h5 id="card-title-4"><strong>Видео-консультант</strong><br />при прохождении опросника</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-5">
                        <img src="#" alt="Система мотивации" />
                        <h5 id="card-title-5"><strong>Система мотивации</strong> - рост скидки<br />или подарков за ответы<br />на вопросы</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-6">
                        <img src="#" alt="Удобные варианты оплаты" />
                        <h5 id="card-title-6"><strong>Удобные варианты оплаты</strong><br />для клиентов</h5>
                    </article>
                </div>
                <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно">попробовать бесплатно</button>
            </div>
        </section>
    )
}

export default Section10;