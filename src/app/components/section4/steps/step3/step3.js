import './step3.scss';

const Step3 = () => {
    return(
        <div className="step3">
            <h3>Показываете <span class="highlight-blue">то</span>, <span class="highlight-orange">что нужно</span></h3>
            <p>На основе <span class="highlight-blue">ответов</span> предлагаем клиенту товары, услуги и рассчитываем их стоимость</p>
            <div class="feature-box left">
                Разные предложения<br/>в зависимости от ответов
            </div>
            <div class="feature-box right">
                Калькулятор<br/>стоимости
            </div>
            <img className="columns" src="#" alt="#"></img>
            <div className="icon"></div>
            <div className="screen"></div>
        </div>
    )
}

export default Step3;