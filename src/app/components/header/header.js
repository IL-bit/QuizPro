import './header.scss';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../../actions';
import Menu from '../menu/menu';
import logoSvg from '../img/logo.svg';

const Header = () => {
    const dispatch = useDispatch();
    const handleToggle = (menu) => {
        dispatch(togglePopup(menu));
    };
    return(
        <>
            <header className="row" id="header">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-3">
                    <img src={logoSvg} alt="Логотип компании" className="logo"/>   
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-7">
                    <nav>
                        <ul>
                            <li><a href="#" title="Узнайте о квизах">О квизах</a></li>
                            <li><a href="#" title="Преимущества использования">Преимущества</a></li>
                            <li><a href="#" title="Изучите наши кейсы">Кейсы</a></li>
                            <li><a href="#" title="Возможности платформы">Возможности</a></li>
                            <li><a href="#" title="Информация для маркетологов">Маркетологам</a></li>
                        </ul>
                    </nav>
                    <button className="create" title="Создать новый квиз">Создать квиз</button>                
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-2">
                    <div className="buttons">
                        <button title="Регистрация на платформе">Регистрация</button>
                        <button title="Создать новый квиз">Создать квиз</button>
                    </div>                               
                </div>
                <div className="col-xxl-1 col-xl-1 col-lg-1 text-end pc">
                    <button className="burger" title="Меню" onClick={() => handleToggle('log_in')}></button>
                </div>
                <div className="col-1 text-end mob">
                    <button className="burger" title="Меню" onClick={() => handleToggle('burger')}></button>
                </div>
            </header>       
            <Menu/> 
        </>

    )
}

export default Header;