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
    const handleScroll = (item) => {
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return(
        <>
            <header className="row" id="header">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-3">
                    <img src={logoSvg} alt="Логотип компании" className="logo"/>   
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-7">
                    <nav>
                        <ul>
                            <li onClick={() => handleScroll('third_section')}>О квизах</li>
                            <li onClick={() => handleScroll('fourth_section')}>Преимущества</li>
                            <li onClick={() => handleScroll('seventh_section')}>Кейсы</li>
                            <li onClick={() => handleScroll('eighth_section')}>Возможности</li>
                            <li onClick={() => handleScroll('fifth_section')}>Маркетологам</li>
                        </ul>
                    </nav>
                    <button className="create" title="Создать новый квиз">Создать квиз</button>                
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-2">
                    <div className="buttons">
                        <button title="Регистрация на платформе" onClick={() => handleToggle('regist')}>Регистрация</button>
                        <button title="Создать новый квиз" onClick={() => handleToggle('log_in')}>Создать квиз</button>
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