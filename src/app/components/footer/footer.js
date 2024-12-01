import './footer.scss';
import logo from '../img/logo.svg';
import vk from '../img/vk.svg';
import tg from '../img/tg.svg';

const Footer = () => {
    return(
        <div className="row" id="footer">
            <hr />
            <div className="col-xxl-3 offset-xxl-1">
                <img src={logo} alt="logo" />
                <p>Квиз-сайты<br/>для бизнеса</p>
            </div>
            <div className="col-xxl-5">
                <a href="#">yourmail@yandex.ru</a>
                <a href="#">+7 (999) 999-99-99</a>
            </div>
            <div className="col-xxl-2">
                <div className="vk">
                    <img src={vk} alt="vk" />
                    <p>ВКонтакте</p>
                </div>
                <div className="tg">
                    <img src={tg} alt="tg" />
                    <p>Телеграм</p>
                </div>
            </div>
            <hr />
            <div className="col-xxl-3 offset-xxl-2">
                <a href="#">Политика конфиденциальности</a>
            </div>
        </div>
    )
}

export default Footer;