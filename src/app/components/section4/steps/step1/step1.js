import './step1.scss';
import vk from '../../../img/vk.svg';
import site from '../../../img/site.svg';
import social from '../../../img/social.svg';
import link from '../../../img/link.svg';
import tg from '../../../img/tg.svg';

const Step1 = () => {
    return(
        <div className="step1">
            <h3>Выбираете формат</h3>
            <p><span>6 вариантов</span> размещения</p>
            <div className="vk">
                <img src={vk} alt="vk" />
                <p>ВКонтакте</p>
            </div>
            <div className="site">
                <img src={site} alt="site" />
                <p>Сайт</p>
            </div>
            <div className="social">
                <img src={social} alt="social" />
                <p>Социальные сети</p>
            </div>
            <div className="link">
                <img src={link} alt="link" />
                <p>Прямая ссылка</p>
            </div>
            <div className="tg">
                <img src={tg} alt="tg" />
                <p>Телеграм</p>
            </div>
            <div className="icon"></div>
            <div className="screen"></div>
        </div>
    )
}

export default Step1;