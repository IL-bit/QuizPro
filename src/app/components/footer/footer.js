import './footer.scss';
import logo from '../img/logo.svg';
import vk from '../img/vk.svg';
import tg from '../img/tg.svg';

const Footer = () => {
    return(
        <footer className="row" id="footer" aria-labelledby="footer-title">
            <hr className="pc"/>
            <div className="col-xxl-3 offset-xxl-1 pc">
                <img src={logo} alt="Логотип компании" />
                <p id="footer-title">Квиз-сайты<br />для бизнеса</p>
            </div>
            <div className="col-xxl-5 pc">
                <a href="mailto:yourmail@yandex.ru" title="Написать на почту">yourmail@yandex.ru</a>
                <a href="tel:+79999999999" title="Позвонить">+7 (999) 999-99-99</a>
            </div>
            <div className="col-xxl-2 pc">
                <div className="vk" aria-label="ВКонтакте">
                    <img src={vk} alt="Иконка ВКонтакте" />
                    <p>ВКонтакте</p>
                </div>
                <div className="tg" aria-label="Телеграм">
                    <img src={tg} alt="Иконка Телеграм" />
                    <p>Телеграм</p>
                </div>
            </div>
            <hr className="pc"/>
            <div className="col-xxl-3 offset-xxl-2 pc">
                <a href="#" title="Политика конфиденциальности">Политика конфиденциальности</a>
            </div>
            <div className="col-12 mob text-center">
                <img src={logo} alt="Логотип компании" />
                <p id="footer-title">Квиз-сайты<br />для бизнеса</p>
                <a href="mailto:yourmail@yandex.ru" title="Написать на почту">yourmail@yandex.ru</a>
                <a href="tel:+79999999999" title="Позвонить">+7 (999) 999-99-99</a>
                <div className="vk" aria-label="ВКонтакте">
                    <img src={vk} alt="Иконка ВКонтакте" />
                    <p>ВКонтакте</p>
                </div>
                <div className="tg" aria-label="Телеграм">
                    <img src={tg} alt="Иконка Телеграм" />
                    <p>Телеграм</p>
                </div>
                <a href="#" title="Политика конфиденциальности" className="polit">Политика конфиденциальности</a>
            </div>
            
        </footer>
    )
}

export default Footer;