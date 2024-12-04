import './step1.scss';
import vk from '../../../img/vk.svg';
import site from '../../../img/site.svg';
import social from '../../../img/social.svg';
import link from '../../../img/link.svg';
import tg from '../../../img/tg.svg';

const Step1 = () => {
    return(
        <article id="step1" aria-labelledby="step1-heading">
            <h3 id="step1-heading">Выбираете формат</h3>
            <p><span>6 вариантов</span> размещения</p>
            <div className="platforms">
                <div className="vk" aria-label="ВКонтакте">
                    <img src={vk} alt="Логотип ВКонтакте" />
                    <p>ВКонтакте</p>
                </div>
                <div className="site" aria-label="Сайт">
                    <img src={site} alt="Логотип сайта" />
                    <p>Сайт</p>
                </div>
                <div className="social" aria-label="Социальные сети">
                    <img src={social} alt="Логотип социальных сетей" />
                    <p>Социальные сети</p>
                </div>
                <div className="link" aria-label="Прямая ссылка">
                    <img src={link} alt="Иконка прямой ссылки" />
                    <p>Прямая ссылка</p>
                </div>
                <div className="tg" aria-label="Телеграм">
                    <img src={tg} alt="Логотип Телеграм" />
                    <p>Телеграм</p>
                </div>
            </div>
            <div className="icon"></div>
            <div className="screen"></div>
        </article>
    )
}

export default Step1;