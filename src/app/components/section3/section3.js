import './section3.scss';
import icon1Svg from '../img/icon1.svg';
import icon2Svg from '../img/icon2.svg';
import icon3Svg from '../img/icon3.svg';
const Section3 = () => {
    return(
        <div className="row" id="third_section">
            <div className="col-xxl-12">
                <h2>Квизы - самый популярный способ<br/><span>быстро и дешево</span> получить<br/><b>первые заявки в свой бизнес</b></h2>
                <div className="items">
                    <div className="item">
                        <img src={icon1Svg} alt="#" className="icon" />
                        <h4>Идеальный вариант<br/><b>тестировать </b>новые<br/>ниши и направления</h4>
                        <div></div>
                    </div>
                    <div className="item">
                        <img src={icon2Svg} alt="#" className="icon" />
                        <h4><b>Не нужно платить</b><br/>за дорогой сайт, ждать<br/>его разработки и рисковать<br/>остаться без заявок</h4>
                        <div></div>
                    </div>
                    <div className="item">
                        <img src={icon3Svg} alt="#" className="icon" />
                        <h4><b>Простой и понятный дизайн</b><br/>поможет создать квиз новичку<br/>и опытному предпринимателю<br/>за 5-10 минут</h4>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;