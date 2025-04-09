import './section6.scss';

const Section6 = () => {
    return(
        <section className="row" id="sixth_section" aria-labelledby="sixth_section_title">
            <div className="col-xxl-7 col-xl-7 col-lg-7 offset-xxl-5 offset-xl-5 offset-lg-5 col-12 offset-0">
                <h2 id="sixth_section_title" className="pc">
                    Смотрите, какие вопросы <b>понижают<br />конверсию квиза</b> и интерес клиентов
                </h2>
                <h2 id="sixth_section_title" className="mob">
                    Смотрите, какие вопросы<br/><b>понижают конверсию<br />квиза</b> и интерес клиентов
                </h2>
                <p className="pc">
                    Отслеживайте эффективность каждого этапа, тестируйте<br />
                    новые варианты и выбирайте самые лучшие
                </p>
                <p className="mob">
                    Отслеживайте<br />эффективность каждого<br />этапа, тестируйте новые<br />варианты и выбирайте<br />самые лучшие
                </p>
            </div>
        </section>
    )
}

export default Section6;