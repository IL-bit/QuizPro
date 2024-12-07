import './section7.scss';
import logoSvg from '../img/logo2.svg';
import cursor from '../img/cursor.svg';
import cursor2 from '../img/cursor_mob.svg';

const Section7 = () => {
    return(
        <section className="row" id="seventh_section" aria-labelledby="section7-title">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                <img src={logoSvg} alt="Логотип компании" className="logo" />
                <h2 id="section7-title" className="pc">Десятки квизов в разных нишах<br /><b>приносят прибыль</b> клиентам <span>прямо сейчас</span></h2>
                <h3 className="pc">Мы собрали базу <b>самых прибыльных</b> и актуальных опросников.<br />Вам остается выбрать нишу и <b>получать заявки</b></h3>
                <h2 id="section7-title" className="mob">Десятки квизов в разных<br />нишах <b>приносят прибыль</b><br/>клиентам <span>прямо сейчас</span></h2>
                <h3 className="mob">Мы собрали базу <b>самых прибыльных</b><br/>и актуальных опросников.<br /><br />Вам остается выбрать нишу<br/>и <b>получать заявки</b></h3>
                <div className="pc">
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
                </div>

                <div className="more_funct" id="pc">
                    <img src={cursor} alt="Иконка курсора"/>
                    <p>Смотреть больше квизов</p>
                </div>
                <div className="more_funct" id="mob">
                    <img src={cursor2} alt="Иконка курсора"/>
                    <p>Смотреть больше квизов</p>
                </div>
            </div>
        </section>
    )
}

export default Section7;