import './section7.scss';
import logoSvg from '../img/logo2.svg';
import cursor from '../img/cursor.svg';

const Section7 = () => {
    return(
        <div className="row" id="seventh_section">
            <div className="col-xxl-12">
                <img src={logoSvg} alt="#" className="logo"/>
                <h2>Десятки квизов в разных нишах<br/><b>приносят прибыль</b> клиентам <span>прямо сейчас</span></h2>
                <h3>Мы собрали базу <b>самых прибыльных</b> и актуальных опросников.<br/>Вам остается выбрать нишу и <b>получать заявки</b></h3>
                <div className="cards">
                    <div className="card">
                        <p>#НазваниеНиши</p>
                        <p>Конверсия <span>19%</span></p>
                        <img src="#" alt="#" />
                        <h5>Привели 1.000.000₽<br/>в нишу дачных домов</h5>
                        <a href="#">Смотреть квиз</a>
                        <button>попробовать бесплатно</button>
                    </div>
                    <div className="card">
                        <p>#НазваниеНиши</p>
                        <p>Конверсия <span>19%</span></p>
                        <img src="#" alt="#" />
                        <h5>Привели 1.000.000₽<br/>в нишу дачных домов</h5>
                        <a href="#">Смотреть квиз</a>
                        <button>попробовать бесплатно</button>
                    </div>
                    <div className="card">
                        <p>#НазваниеНиши</p>
                        <p>Конверсия <span>19%</span></p>
                        <img src="#" alt="#" />
                        <h5>Привели 1.000.000₽<br/>в нишу дачных домов</h5>
                        <a href="#">Смотреть квиз</a>
                        <button>попробовать бесплатно</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>#НазваниеНиши</p>
                        <p>Конверсия <span>19%</span></p>
                        <img src="#" alt="#" />
                        <h5>Привели 1.000.000₽<br/>в нишу дачных домов</h5>
                        <a href="#">Смотреть квиз</a>
                        <button>попробовать бесплатно</button>
                    </div>
                    <div className="card">
                        <p>#НазваниеНиши</p>
                        <p>Конверсия <span>19%</span></p>
                        <img src="#" alt="#" />
                        <h5>Привели 1.000.000₽<br/>в нишу дачных домов</h5>
                        <a href="#">Смотреть квиз</a>
                        <button>попробовать бесплатно</button>
                    </div>
                    <div className="card">
                        <p>#НазваниеНиши</p>
                        <p>Конверсия <span>19%</span></p>
                        <img src="#" alt="#" />
                        <h5>Привели 1.000.000₽<br/>в нишу дачных домов</h5>
                        <a href="#">Смотреть квиз</a>
                        <button>попробовать бесплатно</button>
                    </div>
                </div>
                <div className="more_funct">
                    <img src={cursor} alt="#" />
                    <p>Смотреть больше квизов</p>                        
                </div>
            </div>
        </div>
    )
}

export default Section7;