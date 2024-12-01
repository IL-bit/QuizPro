import './header.scss';
import logoSvg from '../img/logo.svg';
const Header = () => {
    return(
        <div className="row g-5" id="header">
            <div className="col-xxl-1">
                <img src={logoSvg} alt="#" class="logo"/>   
            </div>
            <div className="col-xxl-7">
                <nav>
                    <ul>
                        <li><a href="#">О квизах</a></li>
                        <li><a href="#">Преимущества</a></li>
                        <li><a href="#">Кейсы</a></li>
                        <li><a href="#">Возможности</a></li>
                        <li><a href="#">Маркетологам</a></li>
                    </ul>
                </nav>                   
            </div>
            <div className="col-xxl-4">
                <div className="buttons">
                    <button>Регистрация</button>
                    <button>Создать квиз</button>
                </div>                
                <button className="burger"></button>                  
            </div>
        </div>
    )
}

export default Header;