import './section8.scss';
import logoSvg from '../img/logo.svg';
import icon1 from '../img/user.svg';
import icon2 from '../img/support.svg';

const Section8 = () => {
    return(
        <div className="row" id="eighth_section">
            <div className="col-xxl-6 offset-xxl-1">
                <div className="left">
                    <h2><b>Ваш личный маркетолог</b><br/>всегда на связи</h2>
                    <p>К примеру, <span>ваш квиз приносит мало<br/>заявок,</span> и вы не понимаете как это исправить</p>
                    <div className="market">
                        <img src={logoSvg} alt="logo" />
                        <div className="photo"></div>
                        <span>"</span>
                        <h5>Задайте вопрос в чате<br/>нашему маркетологу,</h5>
                        <p>он изучит ситуацию и даст конкретные<br/>рекомендации как повысить конверсии,<br/>поделится рабочими квизами в вашей нише<br/>и поможет исправить недостатки</p>
                    </div>                    
                </div>

            </div>
            <div className="col-xxl-4">
                <div className="chat">
                    <div className="message">
                        <img src={icon1} alt="#" />
                        <p>Здравствуйте! Меня не устраивает<br/>конверсия моего квиза, всего 2%.<br/> <br/>Не понимаю что не так. Вы сможете<br/>как-то исправить ситуацию?</p>
                    </div>
                    <div className="message">
                        <img src={icon2} alt="#" />
                        <p>Добрый день! Думаю да, сейчас<br/>изучу ваш квиз и дам конкретные<br/>рекомендации по улучшению.</p>
                    </div>
                    <div className="message">
                        <img src={icon2} alt="#" />
                        <p>В нашей базе как раз есть квизы<br/>в вашей нише с конверсией 8-13%</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section8;