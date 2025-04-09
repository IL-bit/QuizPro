import './section10.scss';
import { togglePopup } from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import div_1 from '../img/div_1_tenth.png';
import div_2 from '../img/div_2_tenth.png';
import div_3 from '../img/div_3_tenth.png';
import div_4 from '../img/div_4_tenth.png';
import div_5 from '../img/div_5_tenth.png';
import div_6 from '../img/div_6_tenth.png';

const Section10 = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.isAuth);
    const handleToggle = (menu) => {     
        dispatch(togglePopup(menu));
    };
    return(
        <section className="row" id="tenth_section" aria-labelledby="section10-title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <h2 id="section10-title" className="pc"><strong>10+ инструментов</strong><br />для повышения продаж через ваш<br />диалог с клиентом</h2>
                <h2 id="section10-title" className="mob">10+ инструментов<br />для повышения продаж<br /><br /><span>через ваш<br />диалог с клиентом</span></h2>
                <div className="cards">
                    <article className="card" aria-labelledby="card-title-1">
                        <img src={div_1} alt="Адаптация дизайна" />
                        <h5 id="card-title-1"><strong>Адаптируйте дизайн</strong> под свои<br />пожелания или пользуйтесь<br />готовыми шаблонами</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-2">
                        <img src={div_2} alt="А/Б тестирование" />
                        <h5 id="card-title-2"><strong>А/Б тестирование</strong> квизов<br />и аналитика результатов</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-3">
                        <img src={div_3} alt="UTM-метки" />
                        <h5 id="card-title-3"><strong>UTM-метки</strong><br />для отслеживания трафика</h5>
                    </article>
                </div>
                <div className="cards">
                    <article className="card" aria-labelledby="card-title-4">
                        <img src={div_4} alt="Видео-консультант" />
                        <h5 id="card-title-4"><strong>Видео-консультант</strong><br />при прохождении опросника</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-5">
                        <img src={div_5} alt="Система мотивации" />
                        <h5 id="card-title-5"><strong>Система мотивации</strong> - рост скидки<br />или подарков за ответы<br />на вопросы</h5>
                    </article>
                    <article className="card" aria-labelledby="card-title-6">
                        <img src={div_6} alt="Удобные варианты оплаты" />
                        <h5 id="card-title-6"><strong>Удобные варианты оплаты</strong><br />для клиентов</h5>
                    </article>
                </div>
                <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно" onClick={() => {isAuth ? window.location.href = 'http://qzpro.ru:90': handleToggle('log_in')}}>попробовать бесплатно</button>
            </div>
        </section>
    )
}

export default Section10;