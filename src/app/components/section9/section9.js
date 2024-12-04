import './section9.scss';
import firstSvg from '../img/first_1.svg';
import secondSvg from '../img/second_2.svg';

const Section9 = () => {
    return(
        <section className="row" id="ninth_section" aria-labelledby="section9-title">
            <div className="col-xxl-6 offset-xxl-1">
                <h2 id="section9-title">Внедряйте <span>Quiz Pro</span> своим<br />клиентам <strong>и зарабатывайте</strong></h2>
                <h4>Идеально для продюсеров,<br />СММщиков, маркетологов <strong>и вообще<br />всех фрилансеров</strong></h4>
                <div className="first">
                    <img src={firstSvg} alt="Иконка проекта" />
                    <p>Закрепляйте свои проекты в личном<br />кабинете и получайте процент<br />с оплаты каждой новой заявки</p>
                </div>
                <div className="second">
                    <img src={secondSvg} alt="Иконка дохода" />
                    <p>Чем больше проектов и заявок,<br />тем больше вы зарабатываете</p>
                </div>
            </div>
            <div className="col-xxl-5">
                <div className="right" aria-hidden="true"></div>
                <button title="Попробовать бесплатно" aria-label="Попробовать Quiz Pro бесплатно">попробовать бесплатно</button>
            </div>
        </section>
    )
}

export default Section9;