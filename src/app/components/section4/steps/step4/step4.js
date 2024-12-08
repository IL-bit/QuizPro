import './step4.scss';
import { togglePopup } from '../../../../../actions';
import { useDispatch } from 'react-redux';
import crm from '../../../img/crm.svg';
import bots from '../../../img/bots.svg';
import pay from '../../../img/pay.svg';

const Step4 = () => {
    const dispatch = useDispatch();
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };
    return(
        <article id="step4" aria-labelledby="step4-heading">
            <h3 id="step4-heading">Предлагаете оставить заявку</h3>
            <p className="pc">
                Правильные вопросы и конец качественного<br />
                диалога - идеальный момент для оставления<br />
                заявки
            </p>
            <p className="mob">
                Правильные вопросы и конец<br />
                качественного диалога - идеальный<br />
                момент для оставления заявки
            </p>
            <div className="features">
                <div className="crm" aria-label="Интеграция с CRM">
                    <img src={crm} alt="Интеграция с CRM" />
                    <p>Интеграция<br />с CRM</p>
                </div>
                <div className="bots" aria-label="Перевод в воронки и чат-боты">
                    <img src={bots} alt="Перевод в воронки и чат-боты" />
                    <p>Перевод в воронки<br />и чат-боты</p>
                </div>
                <div className="pay" aria-label="Оплата здесь и сейчас">
                    <img src={pay} alt="Оплата здесь и сейчас" />
                    <p>Оплата здесь<br />и сейчас</p>
                </div>
            </div>
            <div className="icon" aria-hidden="true"></div>
            <div className="screen" aria-hidden="true"></div>
            <button aria-label="Попробовать бесплатно" onClick={() => handleToggle('log_in')}>попробовать бесплатно</button>
        </article>
    )
}

export default Step4;