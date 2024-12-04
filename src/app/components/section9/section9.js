import './section9.scss';
import firstSvg from '../img/first_1.svg';
import secondSvg from '../img/second_2.svg';

const Section9 = () => {
    return(
        <div className="row" id="ninth_section">
            <div className="col-xxl-6 offset-xxl-1">
                <h2>Внедряйте <span>Quiz Pro</span> своим<br/>клиентам <b>и зарабатывайте</b></h2>
                <h4>Идеально для продюсеров,<br/>СММщиков, маркетологов <b>и вообще<br/>всех фрилансеров</b></h4>
                <div className="first">
                    <img src={firstSvg} alt="#" />
                    <p>Закрепляйте свои проекты в личном<br/>кабинете и получайте процент<br/>с оплаты каждой новой заявки</p>
                </div>
                <div className="second">
                    <img src={secondSvg} alt="#" />
                    <p>Чем больше проектов и заявок,<br/>тем больше вы зарабатываете</p>
                </div>
            </div>
            <div className="col-xxl-5">
                <div className="right"></div>
                <button>попробовать бесплатно</button>
            </div>
        </div>
    )
}

export default Section9;