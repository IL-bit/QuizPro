import './footer.scss';
import logo from '../img/logo.svg';
import vk from '../img/vk.svg';
import tg from '../img/tg.svg';

const Footer = () => {
    return(
        <footer className="row" id="footer" aria-labelledby="footer-title">
            <hr />
            <div className="col-xxl-3 offset-xxl-1">
                <img src={logo} alt="Логотип компании" />
                <p id="footer-title">Квиз-сайты<br />для бизнеса</p>
            </div>
            <div className="col-xxl-5">
                <a href="mailto:yourmail@yandex.ru" title="Написать на почту">yourmail@yandex.ru</a>
                <a href="tel:+79999999999" title="Позвонить">+7 (999) 999-99-99</a>
            </div>
            <div className="col-xxl-2">
                <div className="vk" aria-label="ВКонтакте">
                    <img src={vk} alt="Иконка ВКонтакте" />
                    <p>ВКонтакте</p>
                </div>
                <div className="tg" aria-label="Телеграм">
                    <img src={tg} alt="Иконка Телеграм" />
                    <p>Телеграм</p>
                </div>
            </div>
            <hr />
            <div className="col-xxl-3 offset-xxl-2">
                <a href="#" title="Политика конфиденциальности">Политика конфиденциальности</a>
            </div>
        </footer>
    )
}

export default Footer;