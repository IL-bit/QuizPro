import './step3.scss';

const Step3 = () => {
    return(
        <div className="step3">
            <h3>Показываете <span class="blue">то,</span> <span class="orange">что нужно</span></h3>
            <p><b>На основе ответов </b>предлагаем клиенту<br/>товары, услуги и рассчитываем их стоимость</p>
            <p className="left"><span>Разные предложения</span><br/>в зависимости от ответов</p>
            <p className="right"><span>Калькулятор</span><br/>стоимости</p>
            {/* <img className="columns" src="#" alt="#"></img> */}
            <div className="icon"></div>
            <div className="screen"></div>
        </div>
    )
}

export default Step3;