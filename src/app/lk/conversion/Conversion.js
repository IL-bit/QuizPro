import React from 'react';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import logo from '../../img/conversion/logo.svg';
import vk from '../../img/conversion/vk.svg';
import tg from '../../img/conversion/tg.svg';
import './style.scss';

const Conversion = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
                <LeftBar />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
                <div id="conversion">
                    <div className="head">
                        <h2>Конверсия</h2>
                        <div className='count'>1</div>
                        <p className='name'>Майки из камня</p>
                    </div>
                    <div className="charts">
                        <div className="chart">
                            <p>Открыли квиз</p>
                            <h5>3 745</h5>
                        </div>
                        <div className="chart">
                            <p>Получено заявок</p>
                            <h5>342</h5>
                        </div>
                        <div className="chart">
                            <p>Конверсия</p>
                            <h5>18%</h5>
                        </div>
                    </div>
                    <div className="start">
                        <p>Стартовая страница</p>
                        <div className="progress">
                            <div></div>
                        </div>
                        <h5>30%</h5>
                    </div>
                    <div className="questions">
                        <div className="item">
                            <p>Вопрос 1</p>
                            <div className="progress">
                                <div></div>
                            </div>
                            <h6>20%</h6>
                        </div>
                        <div className="item">
                            <p>Вопрос 2</p>
                            <div className="progress">
                                <div></div>
                            </div>
                            <h6>20%</h6>
                        </div>
                        <div className="item">
                            <p>Вопрос 3</p>
                            <div className="progress">
                                <div></div>
                            </div>
                            <h6>20%</h6>
                        </div>
                        <div className="item">
                            <p>Вопрос 4</p>
                            <div className="progress">
                                <div></div>
                            </div>
                            <h6>20%</h6>
                        </div>
                        <div className="item">
                            <p>Вопрос 5</p>
                            <div className="progress">
                                <div></div>
                            </div>
                            <h6>20%</h6>
                        </div>
                    </div>
                    <div className="form">
                        <p>Форма</p>
                        <div className="progress">
                            <div></div>
                        </div>
                        <h5>1%</h5>
                    </div>
                    <div className="footer">
                        <img src={logo} alt="#" />
                        <p><span>Хотели бы больше заявок?</span><br/>Задайте вопрос в чате нашему маркетологу</p>
                        <div className="imgs">
                            <img src={vk} alt="#" />
                            <img src={tg} alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Conversion;