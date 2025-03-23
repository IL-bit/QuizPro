import React from 'react';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import './style.scss';
import reload from '../../img/application/reload.svg';
import expor from '../../img/application/export.svg';
import filter from '../../img/application/filter.svg';
import reset from '../../img/application/reset.svg';
import ApplicationSmall from '../../components/lk/applications/ApplicationSmall';

const Application = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3">
                <LeftBar />
            </div>
            <div className="col-xxl-9 col-xl-9">
                <div id="application">
                    <h2>Заявки</h2>
                    <div className="all">65</div>
                    <div className="new">Новые: <div>32</div></div>
                    <button><img src={reload} alt="#" />Обновить</button>
                    <button><img src={expor} alt="#" />Экспорт</button>
                    <div className="content">
                        <div className="filters">
                            <div>Все заявки<img src={filter} alt="#" /></div>
                            <div>Квизы<img src={filter} alt="#" /></div>
                            <div>Город<img src={filter} alt="#" /></div>
                            <div>За все время<img src={filter} alt="#" /></div>
                            <p><img src={reset} alt="#" />Сбросить</p>
                        </div>
                        <div className="items">
                            <div className="name">
                                <p>№ заявки</p>
                                <p>Дата</p>
                                <p>Квиз</p>
                                <p>Контакты</p>
                            </div>
                            <ApplicationSmall />
                            <ApplicationSmall />
                            <ApplicationSmall />
                            <ApplicationSmall />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Application;