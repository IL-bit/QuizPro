import './section1.scss';

const Section1 = () => {
    return(
        <section className="row" id="first_section" aria-labelledby="section1-heading">
            <div className="col-xxl-8 col-12 mx-auto">
                <header>
                    <h1 id="section1-heading">Квиз-сайты для бизнеса</h1>
                    <h2>Бесплатно и просто создайте<br /><b>квиз-сайт</b> для бизнеса</h2>
                </header>
                <div className="min">за 5 минут</div>
                <div className="easy"></div>
                <h3 className="pc">Тестируйте маркетинговые квизы <b>без абонентской платы.<br />Платите по факту - </b>за теплые и целевые заявки</h3>
                <h3 className="mob">Тестируйте маркетинговые квизы<br /><b>без абонентской платы.<br /><br />Платите по факту - </b>за теплые<br />и целевые заявки</h3>
                <button aria-label="Попробовать бесплатно">попробовать бесплатно</button>
            </div>
        </section>
    )
}

export default Section1;