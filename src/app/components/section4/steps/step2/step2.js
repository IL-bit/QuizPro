import './step2.scss';

const Step2 = () => {
    return(
        <div id="step2">
            <h3>Готовите вопросы</h3>
            <p className="pc">Задать правильные вопросы и узнать<br/><span className="blue">пожелания</span> = <span className="beige">правильный диалог,</span><br/>который помогает услышать клиента и <b>попасть<br/>в его пожелания на 100%</b></p>
            <p className="mob">Задать правильные вопросы<br/>и узнать <span>пожелания</span> = правильный<br/>диалог, который помогает услышать<br/>клиента и <b>попасть<br/>в его пожелания на 100%</b></p>
            <p className="quistions"><span>13 вариантов</span> вопросов</p>
            <div className="icon"></div>
            <div className="screen"></div>
        </div>
    )
}

export default Step2;