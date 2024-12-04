import './section7.scss';
import logoSvg from '../img/logo2.svg';
import cursor from '../img/cursor.svg';

const Section7 = () => {
    return(
        <section className="row" id="seventh_section" aria-labelledby="section7-title">
            <div className="col-xxl-12">
                <img src={logoSvg} alt="Логотип компании" className="logo" />
                <h2 id="section7-title">Десятки квизов в разных нишах<br /><b>приносят прибыль</b> клиентам <span>прямо сейчас</span></h2>
                <h3>Мы собрали базу <b>самых прибыльных</b> и актуальных опросников.<br />Вам остается выбрать нишу и <b>получать заявки</b></h3>
                <div className="cards">
                    {Array(3).fill().map((_, index) => (
                        <div className="card" key={index} aria-labelledby={`card-title-${index}`}>
                            <p id={`card-title-${index}`}>#НазваниеНиши</p>
                            <p>Конверсия <span>19%</span></p>
                            <img src="#" alt="Изображение квиза" />
                            <h5>Привели 1.000.000₽<br />в нишу дачных домов</h5>
                            <a href="#" title="Смотреть квиз" aria-label="Смотреть квиз">Смотреть квиз</a>
                            <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно">попробовать бесплатно</button>
                        </div>
                    ))}
                </div>
                <div className="cards">
                    {Array(3).fill().map((_, index) => (
                        <div className="card" key={index} aria-labelledby={`card-title-${index}`}>
                            <p id={`card-title-${index}`}>#НазваниеНиши</p>
                            <p>Конверсия <span>19%</span></p>
                            <img src="#" alt="Изображение квиза" />
                            <h5>Привели 1.000.000₽<br />в нишу дачных домов</h5>
                            <a href="#" title="Смотреть квиз" aria-label="Смотреть квиз">Смотреть квиз</a>
                            <button title="Попробовать бесплатно" aria-label="Попробовать бесплатно">попробовать бесплатно</button>
                        </div>
                    ))}
                </div>
                <div className="more_funct">
                    <img src={cursor} alt="Иконка курсора" />
                    <p>Смотреть больше квизов</p>
                </div>
            </div>
        </section>
    )
}

export default Section7;