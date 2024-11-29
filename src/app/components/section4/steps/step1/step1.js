import './step1.scss';

const Step1 = () => {
    return(
        <div className="step1">
            <h3>Выбираете формат</h3>
            <div className="six">6 вариантов</div>
            <p>размещения</p>
            <div className="vk">
                <img src="#" alt="vk" />
                <p>ВКонтакте</p>
            </div>
            <div className="site">
                <img src="#" alt="site" />
                <p>ВКонтакте</p>
            </div>
            <div className="social">
                <img src="#" alt="social" />
                <p>Социальные сети</p>
            </div>
            <div className="link">
                <img src="#" alt="link" />
                <p>Прямая ссылка</p>
            </div>
            <div className="tg">
                <img src="#" alt="tg" />
                <p>Телеграм</p>
            </div>
            <div className="icon"></div>
            <div className="screen"></div>
        </div>
    )
}

export default Step1;