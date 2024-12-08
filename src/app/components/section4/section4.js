import './section4.scss';
import Step1 from './steps/step1/step1';
import Step2 from './steps/step2/step2';
import Step3 from './steps/step3/step3';
import Step4 from './steps/step4/step4';

const Section4 = () => {
    return(
        <section className="row" id="fourth_section" aria-labelledby="section4-heading">
            <div className="col-xxl-12">
                <div className="min">4 шага</div>
                <div className="pro"></div>
                <header>
                    <h2 id="section4-heading">отделяют вас <b>от первых клиентов</b></h2>
                </header>
                <Step1/>
                <Step2/>
                <Step3/>
                <Step4/>
            </div>
        </section>
    )
}

export default Section4;