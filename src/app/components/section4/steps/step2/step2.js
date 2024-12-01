import './step2.scss';

const Step2 = () => {
    return(
        <div className="step2">
            <h3>Готовите вопросы</h3>
            <p>Задать правильные вопросы и узнать<br/>
                <span class="blue">пожелания</span> = <span class="beige">правильный диалог,</span>
                <br/>который помогает услышать клиента и <b>попасть<br/>в его пожелания на 100%</b>
            </p>
            <p className="quistions"><span>13 вариантов</span> вопросов</p>
            <div className="icon"></div>
            <div className="screen"></div>
        </div>
    )
}

export default Step2;