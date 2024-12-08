import './menu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup, closePopup } from '../../../actions';
import closeSvg from '../img/menu_close.svg';

const Menu = () => {
    const isOpen = useSelector((state) => state.pop_up);
    const dispatch = useDispatch();
    
    const handleClosePopup = () => {
        dispatch(closePopup());
    };
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };


    const renderForm = () => {
        switch (isOpen) {
            case 'log_in':
                return (
                    <form id="log_in">
                        <button className="close" onClick={() => handleClosePopup()}><p><img src={closeSvg} alt="#" />Закрыть</p></button>
                        <h2>Войти<span>Нет аккаунта? <a href="#">Зарегистрироваться</a></span></h2>
                        <input type="email" placeholder='Введите почту'/>
                        <input type="password" placeholder='Введите пароль'/>  
                        <button>войти</button>                  
                        <button onClick={() => handleToggle('reset')}>Я забыл(а) пароль</button>
                        <p>Нажимая на кнопку, вы соглашаетесь <a href="#" >с политикой<br/>конфиденциальности и политикой использования<br/>персональных данных</a></p>
                    </form>
                );
            case 'regist':
                return (
                    <form id="regist">
                        <button className="close" onClick={() => handleClosePopup()}><p><img src={closeSvg} alt="#" />Закрыть</p></button>
                        <h2>Зарегистрироваться</h2>
                        <p>Есть аккаунт? <a href="#">Войти</a></p>
                        <input type="text" placeholder="Введите имя"/>
                        <input type="email" placeholder="Введите почту"/>
                        <input type="password" placeholder="Введите пароль"/>
                        <input type="password" placeholder="Повторите пароль"/>
                        <button>Зарегистрироваться</button>
                        <p>Нажимая на кнопку, вы соглашаетесь <a href="#">с политикой конфиденциальности<br/>и политикой использования персональных данных</a></p>
                    </form>
                );
            case 'reset':
                return (
                    <form id="reset">
                        <button className="close" onClick={() => handleClosePopup()}><p><img src={closeSvg} alt="#" />Закрыть</p></button>
                        <h2>Восстановить пароль</h2>
                        <input type="email" placeholder="Введите почту"/>
                        <button type="button" onClick={() => handleToggle('send')}>сбросить пароль</button>
                    </form>
                );
            case 'send':
                return (
                    <div id="send">
                        <button className="close" onClick={() => handleClosePopup()}><p><img src={closeSvg} alt="#" />Закрыть</p></button>
                        <h2>Отправили письмо<br/>на вашу почту</h2>
                        <p>Зайдите на ваш email<br/>и восстановите пароль</p>
                        <button onClick={() => handleToggle('log_in')}>вернуться к авторизации</button>
                    </div>
                );
            default:
                return null; // Если значение не совпадает, ничего не отрисовываем
        }
    };

    return (
        <>
            <div id="menu" className={isOpen ? 'show' : 'hide'}>
                {renderForm()}
            </div>
            <div id="overview" className={isOpen ? 'show' : 'hide'}></div>
        </>
    );
}

export default Menu;