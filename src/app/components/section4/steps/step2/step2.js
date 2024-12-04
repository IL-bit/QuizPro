import './step2.scss';

const Step2 = () => {
    return(
        <article id="step2" aria-labelledby="step2-heading">
            <h3 id="step2-heading">Готовите вопросы</h3>
            <p className="pc">
                Задать правильные вопросы и узнать<br />
                <span className="blue">пожелания</span> = <span className="beige">правильный диалог,</span><br />
                который помогает услышать клиента и <b>попасть<br />в его пожелания на 100%</b>
            </p>
            <p className="mob">
                Задать правильные вопросы<br />
                и узнать <span>пожелания</span> = правильный<br />
                диалог, который помогает услышать<br />
                клиента и <b>попасть<br />в его пожелания на 100%</b>
            </p>
            <p className="questions"><span>13 вариантов</span> вопросов</p>
            <div className="icon" aria-hidden="true"></div>
            <div className="screen" aria-hidden="true"></div>
        </article>
    )
}

export default Step2;