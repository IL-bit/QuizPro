import './step4.scss';
import crm from '../../../img/crm.svg';
import bots from '../../../img/bots.svg';
import pay from '../../../img/pay.svg';

const Step4 = () => {
    return(
        <div className="step4">
            <h3>Предлагаете оставить заявку</h3>
            <p>Правильные вопросы и конец качественного<br/>диалога - идеальный момент для оставления<br/>заявки</p>
            <div className="crm">
                <img src={crm} alt="#" />
                <p>Интеграция<br/>с CRM</p>
            </div>
            <div className="bots">
                <img src={bots} alt="#" />
                <p>Перевод в воронки<br/>и чат-боты</p>
            </div>
            <div className="pay">
                <img src={pay} alt="#" />
                <p>Оплата здесь<br/>и сейчас</p>
            </div>
            <div className="icon"></div>
            <div className="screen"></div>
            <button>попробовать бесплатно</button>
        </div>
    )
}

export default Step4;