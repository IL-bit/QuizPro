import './footer.scss';
import logo from '../img/logo.svg';
import vk from '../img/vk.svg';
import tg from '../img/tg.svg';

const Footer = () => {
    const appConfig = window.appConfig;
    const handleVkClick = () => {
        window.open(appConfig.vk, '_blank');
    };

    const handleTgClick = () => {
        window.open(appConfig.tg, '_blank');
    };
    return(
        <footer className="row" id="footer" aria-labelledby="footer-title">
            <hr className="pc"/>
            <div className="col-xxl-3 offset-xxl-1 pc">
                <img src={logo} alt="Логотип компании" />
                <p id="footer-title">Квиз-сайты<br />для бизнеса</p>
            </div>
            <div className="col-xxl-5 pc">
                <a href={`mailto:${appConfig.email}`} title="Написать на почту">{appConfig.email}</a>
                <a href={`tel:${appConfig.tel}`} title="Позвонить">{appConfig.tel}</a>
            </div>
            <div className="col-xxl-2 pc">
                <div className="vk" aria-label="ВКонтакте" onClick={handleVkClick} style={{ cursor: 'pointer' }}>
                    <img src={vk} alt="Иконка ВКонтакте" />
                    <p>ВКонтакте</p>
                </div>
                <div className="tg" aria-label="Телеграм" onClick={handleTgClick} style={{ cursor: 'pointer' }}>
                    <img src={tg} alt="Иконка Телеграм" />
                    <p>Телеграм</p>
                </div>
            </div>
            <hr className="pc"/>
            <div className="col-xxl-3 offset-xxl-2 pc">
                <a href={appConfig.polit} title="Политика конфиденциальности">Политика конфиденциальности</a>
            </div>
            <div className="col-12 mob text-center">
                <img src={logo} alt="Логотип компании" />
                <p id="footer-title">Квиз-сайты<br />для бизнеса</p>
                <a href={`mailto:${appConfig.email}`} title="Написать на почту">{appConfig.email}</a>
                <a href={`tel:${appConfig.tel}`} title="Позвонить">{appConfig.tel}</a>
                <div className="vk" aria-label="ВКонтакте" onClick={handleVkClick} style={{ cursor: 'pointer' }}>
                    <img src={vk} alt="Иконка ВКонтакте" />
                    <p>ВКонтакте</p>
                </div>
                <div className="tg" aria-label="Телеграм" onClick={handleTgClick} style={{ cursor: 'pointer' }}>
                    <img src={tg} alt="Иконка Телеграм" />
                    <p>Телеграм</p>
                </div>
                <a href={appConfig.polit} title="Политика конфиденциальности" className="polit">Политика конфиденциальности</a>
            </div>
            
        </footer>
    )
}

export default Footer;