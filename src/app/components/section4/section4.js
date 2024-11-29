import './section4.scss';
import Step1 from './steps/step1/step1';
import Step2 from './steps/step2/step2';
import Step3 from './steps/step3/step3';
import Step4 from './steps/step4/step4';

const Section4 = () => {
    return(
        <div className="row" id="fourth_section">
            <div className="col-10">
                <h2>отделяют вас <b>от первых клиентов</b></h2>
                <Step1/>
                <Step2/>
                <Step3/>
                <Step4/>
                <button>попробовать бесплатно</button>
            </div>
        </div>
    )
}

export default Section4;