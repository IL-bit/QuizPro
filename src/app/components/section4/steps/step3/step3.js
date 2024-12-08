import './step3.scss';

const Step3 = () => {
    return(
        <article id="step3" aria-labelledby="step3-heading">
            <h3 id="step3-heading">Показываете <span className="blue">то,</span> <span className="orange">что нужно</span></h3>
            <p className="mob">
                <b>На основе ответов</b> предлагаем<br />
                клиенту товары, услуги<br />
                и рассчитываем их стоимость
            </p>
            <p className="pc">
                <b>На основе ответов</b> предлагаем клиенту<br />
                товары, услуги и рассчитываем их стоимость
            </p>
            <p className="left"><span>Разные предложения</span><br />в зависимости от ответов</p>
            <p className="right"><span>Калькулятор</span><br />стоимости</p>
            <div className="icon" aria-hidden="true"></div>
            <div className="screen" aria-hidden="true"></div>
        </article>
    )
}

export default Step3;