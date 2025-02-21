import React from 'react';
import './style.scss';
import LeftBar from '../../components/constructor/leftbar/LeftBar';
import bitrix from '../../img/Constructor/integ/bitrix.svg';
import amo from '../../img/Constructor/integ/amo.svg';
import whatsapp from '../../img/Constructor/integ/whatsapp.svg';
import tg from '../../img/Constructor/integ/tg.svg';

const Integrations = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBar />
            </div>
            <div className="col-xxl-9">
                <div id="integ">
                    <h2>Интеграции</h2>
                    <div className="bitrix">
                        <p>Интеграция с Bitrix<img src={bitrix} alt="#" /></p>
                    </div>
                    <div className="amo">
                        <p>Интеграция с AmoCRM<img src={amo} alt="#" /></p>
                    </div>
                    <div className="whatsapp">
                        <p>Интеграция с What's App<img src={whatsapp} alt="#" /></p>
                    </div>
                    <div className="tg">
                        <p>Интеграция с Telegram<img src={tg} alt="#" /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Integrations;