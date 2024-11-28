import './header.scss';

const Header = () => {
    return(
        <>
            <div className="row" id="header">
                <div className="col-3">
                    <img src="#" alt="#" />
                    <nav>
                        <ul>
                            <li><a href="#">О квизах</a></li>
                            <li><a href="#">Преимущества</a></li>
                            <li><a href="#">Кейсы</a></li>
                            <li><a href="#">Возможности</a></li>
                            <li><a href="#">Маркетологам</a></li>
                        </ul>
                    </nav>                    
                    <div className="buttons">
                        <button>Регистрация</button>
                        <button>Создать квиз</button>
                    </div>
                    <button className="burger"></button>                    
                </div>
            </div>
        </>
    )
}

export default Header;