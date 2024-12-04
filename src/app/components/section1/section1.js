import './section1.scss';

const Section1 = () => {
    return(
        <div className="row" id="first_section">
            <div className="col-xxl-8 col-12 mx-auto">
                <h4>Квиз-сайты для бизнеса</h4>
                <h1>Бесплатно и просто создайте<br/><b>квиз-сайт</b> для бизнеса</h1>
                <div className="min">за 5 минут</div>
                <div className="easy"></div>
                <h3 className="pc">Тестируйте маркетинговые квизы <b>без абонентской платы.<br/>Платите по факту - </b>за теплые и целевые заявки</h3>
                <h3 className="mob">Тестируйте маркетинговые квизы<br/><b>без абонентской платы.<br/><br/>Платите по факту - </b>за теплые<br/>и целевые заявки</h3>
                <button>попробовать бесплатно</button>
            </div>
        </div>
    )
}

export default Section1;