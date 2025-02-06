import './style.scss';
export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-4 mx-auto text-center">
          <div id="blur"></div>
          <div className="img"></div>
          <h2>Войти</h2>
          <form action="#">
              <input type="email" name="email" placeholder="Введите почту" className="form"/>
              <input type="password" name="password" placeholder="Введите пароль" className="form"/>
              <button>Вход</button>
              <a href="#">Я забыл(а) пароль</a>
          </form>
          <p>Нет аккаунта? <a href="#">Зарегистрироваться</a></p>
          <p className="polit">Нажимая на кнопку, вы соглашаетесь <a href="#">с политикой конфиденциальности и политикой использования <wbr/>персональных данных</a></p>
        </div>
      </div>
    </div>
  );
}
