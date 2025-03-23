import React from 'react';
import './style.scss';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import Dprocess from '../../components/lk/history/Dprocess';
import Dpaid from '../../components/lk/history/Dpaid';
import Derror from '../../components/lk/history/Derror';
import Drefund from '../../components/lk/history/Drefund';
import Dreferal from '../../components/lk/history/Dreferal';

const Deposits = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3">
                <LeftBar />
            </div>
            <div className="col-xxl- col-xl-9">
                <div id="deposits">
                    <h2>История платежей</h2>
                    <div className="history">
                        <div className="filt">
                            <p>№ / #ID</p>
                            <p>Дата</p>
                            <p>Стоимость</p>
                            <p>Статус</p>                            
                        </div>
                        <div className="items">
                            <Dprocess />
                            <Dpaid />
                            <Derror />
                            <Drefund />
                            <Dreferal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Deposits;