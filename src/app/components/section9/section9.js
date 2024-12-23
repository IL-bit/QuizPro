import './section9.scss';
import { togglePopup } from '../../../actions';
import { useDispatch } from 'react-redux';
import firstSvg from '../img/first_1.svg';
import secondSvg from '../img/second_2.svg';

const Section9 = () => {
    const dispatch = useDispatch();
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };
    return(
        <section className="row" id="ninth_section" aria-labelledby="section9-title">
            <div className="col-xxl-6 offset-xxl-1 pc">
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
            <div className="col-xxl-5 pc">
                <div className="right" aria-hidden="true"></div>
                <button title="Попробовать бесплатно" aria-label="Попробовать Quiz Pro бесплатно" onClick={() => handleToggle('log_in')}>попробовать бесплатно</button>
            </div>
            <div className="col-12 mob">
                <h2 id="section9-title">Внедряйте Quiz Pro своим<br />клиентам и зарабатывайте</h2>
                <h4>Идеально для продюсеров, СММщиков,<br />маркетологов и вообще всех фрилансеров</h4>
                <div className="first">
                    <img src={firstSvg} alt="Иконка проекта" />
                    <p>Закрепляйте свои проекты в личном кабинете<br />и получайте процент с оплаты<br />каждой новой заявки</p>
                </div>
                <div className="second">
                    <img src={secondSvg} alt="Иконка дохода" />
                    <p>Чем больше проектов и заявок,<br />тем больше вы зарабатываете</p>
                </div>
                <div className="right" aria-hidden="true"></div>
                <button title="Попробовать бесплатно" aria-label="Попробовать Quiz Pro бесплатно" onClick={() => handleToggle('log_in')}>попробовать бесплатно</button>                
            </div>

        </section>
    )
}

export default Section9;