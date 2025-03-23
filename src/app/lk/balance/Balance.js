import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import folder1 from '../../img/balance/folder1.svg';
import folder2 from '../../img/balance/folder2.svg';

const Balance = () => {
    const navigate = useNavigate();   
    const handleClick = (route) => {
      navigate(route);
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBar />
            </div>
            <div className="col-xxl-9">
                <div id="balance">
                    <h2>Пополнение баланса</h2>
                    <div className="promo">
                        <h5>У меня есть промокод</h5>
                        <input type="text" placeholder='XXX-XXX-XXX'/>
                        <button>Активировать</button>
                    </div>
                    <div className="summa">
                        <h5>Сумма пополнения</h5>
                        <input type="text" placeholder='12.990₽'/>
                        <p>Тариф «Премиум»</p>
                    </div>
                    <div className="methods">
                        <h5>Способы пополнения</h5>
                        <div>
                            <div>Картой</div>
                            <div className="active">СБП</div>
                            <div>Qr-code</div>
                        </div>
                        <button>Пополнить</button>
                        <p>Привязать карту</p>
                    </div>
                    <div className="history">
                        <p onClick={() => handleClick('/user/deposits')}><img src={folder1} alt="#" />История платежей</p>
                        <p onClick={() => handleClick('/user/writeoff')}><img src={folder2} alt="#" />История списаний</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Balance;