import './section8.scss';
import logoSvg from '../img/logo.svg';
import icon1 from '../img/user.svg';
import icon2 from '../img/support.svg';

const Section8 = () => {
    return(
        <section className="row" id="eighth_section" aria-labelledby="section8-title">
            <div className="col-xxl-6 offset-xxl-1">
                <div className="left">
                    <h2 id="section8-title"><b>Ваш личный маркетолог</b><br />всегда на связи</h2>
                    <p>К примеру, <span>ваш квиз приносит мало<br />заявок,</span> и вы не понимаете, как это исправить.</p>
                    <div className="market">
                        <img src={logoSvg} alt="Логотип маркетолога" />
                        <div className="photo" aria-hidden="true"></div>
                        <span>"</span>
                        <h5>Задайте вопрос в чате<br />нашему маркетологу,</h5>
                        <p>Он изучит ситуацию и даст конкретные<br />рекомендации, как повысить конверсии,<br />поделится рабочими квизами в вашей нише<br />и поможет исправить недостатки.</p>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4">
                <div className="chat" aria-labelledby="chat-title">
                    <h3 id="chat-title" className="visually-hidden">Чат с маркетологом</h3>
                    <div className="message" aria-label="Сообщение от пользователя">
                        <img src={icon1} alt="Иконка пользователя" />
                        <p>Здравствуйте! Меня не устраивает<br />конверсия моего квиза, всего 2%.<br /><br />Не понимаю, что не так. Вы сможете<br />как-то исправить ситуацию?</p>
                    </div>
                    <div className="message" aria-label="Ответ от маркетолога">
                        <img src={icon2} alt="Иконка поддержки" />
                        <p>Добрый день! Думаю, да, сейчас<br />изучу ваш квиз и дам конкретные<br />рекомендации по улучшению.</p>
                    </div>
                    <div className="message" aria-label="Дополнительная информация от маркетолога">
                        <img src={icon2} alt="Иконка поддержки" />
                        <p>В нашей базе как раз есть квизы<br />в вашей нише с конверсией 8-13%.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section8;