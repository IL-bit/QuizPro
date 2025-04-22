import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { APPLICATIONS } from '../../../middleware';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import './style.scss';
import reload from '../../img/application/reload.svg';
import expor from '../../img/application/export.svg';
import ApplicationSmall from '../../components/lk/applications/ApplicationSmall';
import Filters from '../../components/lk/applications/Filters';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const Application = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.Token);
    const data = useSelector((state) => state.applications);

    const exportToExcel = () => {
        // Преобразуем данные в формат, подходящий для Excel
        const formattedData = data.map(application => ({
            '№ заявки': application.id,
            'Дата': application.details, // Предположим, что details - это дата
            'Квиз': application.quizName,
            'Контакты': `${application.name} (${application.phone}) - ${application.email}`
        }));

        // Создаем рабочий лист и книгу
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Заявки');

        // Генерируем файл Excel
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        saveAs(dataBlob, 'заявки.xlsx');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
                    <LeftBar />
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
                    <div id="application">
                        <h2>Заявки</h2>
                        <div className="all">65</div>
                        <div className="new">Новые: <div>32</div></div>
                        <button onClick={() => dispatch(APPLICATIONS(token))}><img src={reload} alt="#" />Обновить</button>
                        <button onClick={exportToExcel}><img src={expor} alt="#" />Экспорт</button>
                        <div className="content">
                            <Filters />
                            <div className="items">
                                <div className="name">
                                    <p>№ заявки</p>
                                    <p>Дата</p>
                                    <p>Квиз</p>
                                    <p>Контакты</p>
                                </div>
                                <div className="scroll">
                                    {data.length > 0 ? data.map((application) => (
                                        <ApplicationSmall key={application.quizId} application={application} />
                                    )) : null}       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;