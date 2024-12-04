import './section10.scss';

const Section10 = () => {
    return(
        <div className="row" id="tenth_section">
            <div className="col-xxl-12">
                <h2><b>10+ инструментов</b><br/>для повышения продаж через ваш<br/>диалог с клиентом</h2>
                <div className="cards">
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5><b>Адаптируйте дизайн</b> под свои<br/>пожелания или пользуйтесь<br/>готовыми шаблонами</h5>
                    </div>
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5><b>А/Б тестирование</b> квизов<br/>и аналитика результатов</h5>
                    </div>
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5><b>UTM-метки</b><br/>для отслеживания трафика</h5>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5><b>Видео-консультант</b><br/>при прохождении опросника</h5>
                    </div>
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5><b>Система мотивации</b> - рост скидки<br/>или подарков за ответы<br/>на вопросы</h5>
                    </div>
                    <div className="card">
                        <img src="#" alt="#" />
                        <h5><b>Удобные варианты оплаты</b><br/>для клиентов</h5>
                    </div>
                </div>
                <button>попробовать бесплатно</button>
            </div>
        </div>
    )
}

export default Section10;