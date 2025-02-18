import React from 'react';
import './style.scss';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import trash from '../../img/answer/trash.svg';
import again from '../../img/answer/again.svg';

const Answer = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBar />
            </div>
            <div className="col-xxl-9">
                <div id="answer">
                    <div className="answers">
                        <h2>Ответы клиента</h2>
                        {/* <button></button> */}
                        <div className="info">
                            <p>Время заявки: <span>воскресенье, 1 декабря 2024 г., 13:04 UTC(+03:00)</span><br/>Местоположение: <span>Россия, Тюмень<br/>Для клиента 23:01 на часах , Contact us during office hours</span></p>
                            <p>Имя: <span>Екатерина Мещерякова</span><br/>Email: <span>emesh26042015@gmail.com</span><br/>Телефон: <span>+79129285745</span></p>
                        </div>
                        <div className="answer">
                            <h2>Ответы</h2>
                            <div>
                                <p>Выберите направления, которые ведете<br/><span>Я веду все направления "Универсальный фитнес-тренер"</span></p>
                                <p>Выберите направления, которые ведете<br/><span>Я веду все направления "Универсальный фитнес-тренер"</span></p>
                                <p>Выберите направления, которые ведете<br/><span>Я веду все направления "Универсальный фитнес-тренер"</span></p>
                                <p>Выберите направления, которые ведете<br/><span>Я веду все направления "Универсальный фитнес-тренер"</span></p>
                                <p>Выберите направления, которые ведете<br/><span>Я веду все направления "Универсальный фитнес-тренер"</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="id_answer">ID заявки:<div>674c34b9f426100026a73545</div></div>
                        <div className="actions">
                            <p><img src={trash} alt="#" />Удалить</p>
                            <p><img src={again} alt="#" />Отправить повторно в интеграции</p>                                  
                        </div>
                        <button>Заблокировать адрес</button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Answer;