import React from 'react';
import LeftBarLK from '@/app/components/Lk/LeftBar/LeftBarLK';
import './style.scss';
import Image from 'next/image';
import reload from '../../../public/reload.svg';
import expor from '../../../public/export.svg';
import ApplicationSmall from '@/app/components/Lk/applications/ApplicationSmall';

const Aplication = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBarLK />
            </div>
            <div className="col-xxl-9">
                <div id="application">
                    <h2>Заявки</h2>
                    <div className="all">65</div>
                    <div className="new">Новые: <div>32</div></div>
                    <button><Image src={reload} alt='#'/>Обновить</button>
                    <button><Image src={expor} alt='#'/>Экспорт</button>
                    <div className="content">
                        <div className="filters"></div>
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
export default Aplication;