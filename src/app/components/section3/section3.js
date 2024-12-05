import './section3.scss';
import icon1Svg from '../img/icon1.svg';
import icon2Svg from '../img/icon2.svg';
import icon3Svg from '../img/icon3.svg';
import icon1MobSvg from '../img/icon1_mob.svg';
import icon2MobSvg from '../img/icon2_mob.svg';
import icon3MobSvg from '../img/icon3_mob.svg';
const Section3 = () => {
    return(
        <section className="row" id="third_section" aria-labelledby="section3-heading">
            <div className="col-xxl-12 col-12">
                <h2 id="section3-heading" className="section-title pc">Квизы - самый популярный способ<br/><span>быстро и дешево</span> получить<br/><b>первые заявки в свой бизнес</b></h2>
                <h2 className="mob">Квизы - самый популярный<br/>способ <span>быстро и дешево</span><br/>получить <b>первые заявки<br/>в свой бизнес</b></h2>
                <div className="items">
                    <article className="item" aria-labelledby="item1-heading">
                        <img src={icon1Svg} alt="Иконка тестирования ниш" className="icon pc" />
                        <img src={icon1MobSvg} alt="Иконка тестирования ниш для мобильных" className="icon mob" />
                        <h3 id="item1-heading">Идеальный вариант<br/><b>тестировать </b>новые<br/>ниши и направления</h3>
                        <div></div>
                    </article>
                    <article className="item" aria-labelledby="item2-heading">
                        <img src={icon2Svg} alt="Иконка сайта" className="icon pc" />
                        <img src={icon2MobSvg} alt="Иконка сайта для мобильных" className="icon mob" />
                        <h3 className="pc" id="item2-heading"><b>Не нужно платить</b><br/>за дорогой сайт, ждать<br/>его разработки и рисковать<br/>остаться без заявок</h3>
                        <h3 className="mob" id="item2-heading"><b>Не нужно платить</b> за дорогой сайт,<br/>ждать его разработки и рисковать<br/>остаться без заявок</h3>
                        <div></div>
                    </article>
                    <article className="item" aria-labelledby="item3-heading">
                        <img src={icon3Svg} alt="Иконка дизайна" className="icon pc" />
                        <img src={icon3MobSvg} alt="Иконка дизайна для мобильных" className="icon mob" />
                        <h3 id="item3-heading"><b>Простой и понятный дизайн</b><br/>поможет создать квиз новичку<br/>и опытному предпринимателю<br/>за 5-10 минут</h3>
                        <div></div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Section3;