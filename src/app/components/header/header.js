import './header.scss';
import logoSvg from '../img/logo.svg';

const Header = () => {
    return(
        <div className="row" id="header">
            <div className="col-xxl-1 col-3">
                <img src={logoSvg} alt="#" className="logo"/>   
            </div>
            <div className="col-xxl-7 col-7">
                <nav>
                    <ul>
                        <li><a href="#">О квизах</a></li>
                        <li><a href="#">Преимущества</a></li>
                        <li><a href="#">Кейсы</a></li>
                        <li><a href="#">Возможности</a></li>
                        <li><a href="#">Маркетологам</a></li>
                    </ul>
                </nav>
                <button className="create">Создать квиз</button>                
            </div>
            <div className="col-xxl-4 col-2">
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