import React from 'react';
import './style.scss';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import Whistory from '../../components/lk/history/Whistory';

const WriteOff = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3">
                <LeftBar />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9">
                <div id="write_off">
                    <h2>История списаний</h2>
                    <div className="history">
                        <div className="filt">
                            <p>#ID Заявки</p>
                            <p>Дата списания</p>
                            <p>Сумма списания</p>                            
                        </div>
                        <div className="items">
                            <Whistory />
                            <Whistory />
                            <Whistory />
                            <Whistory />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default WriteOff;