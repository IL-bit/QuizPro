import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import LeftBar from '../../components/constructor/leftbar/LeftBar';
import copy from '../../img/Constructor/create/copy.svg';
import tt from '../../img/Constructor/create/tt.svg';
import vk from '../../img/Constructor/create/vk.svg';
import tg from '../../img/Constructor/create/tg.svg';

const Install = () => {
    const currentQuizID = useSelector((state) => state.createQuiz.currentQuizID);
    const [buttonText, setButtonText] = useState({}); // Состояние для текста кнопок
    const [imageVisible, setImageVisible] = useState({}); // Состояние для видимости изображений

    const copyToClipboard = (text, buttonKey) => {
        navigator.clipboard.writeText(text).then(() => {
            setButtonText((prev) => ({
                ...prev,
                [buttonKey]: 'Текст скопирован', // Меняем текст кнопки
            }));

            setImageVisible((prev) => ({
                ...prev,
                [buttonKey]: false, // Скрываем изображение
            }));

            setTimeout(() => {
                setButtonText((prev) => ({
                    ...prev,
                    [buttonKey]: 'Копировать', // Восстанавливаем текст через 3.5 секунды
                }));
                setImageVisible((prev) => ({
                    ...prev,
                    [buttonKey]: true, // Восстанавливаем изображение
                }));
            }, 3500);
        });
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
          <LeftBar />
        </div>
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
          <div id="install">
            <div className="head">
              <h2>Прямая ссылка на квиз</h2>
              <div className="status">Не опубликовано</div>
              <div className="link">
                <div>
                  https://qzpro.ru/quiz/{currentQuizID}
                  <button onClick={() => copyToClipboard(`https://qzpro.ru/quiz/${currentQuizID}`, 'quizLink')}>
                    {buttonText['quizLink'] || 'Копировать'}{imageVisible['quizLink'] !== false && <img src={copy} alt="#" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="social">
              <h2>Социальные сети</h2>
              <div className="items">
                <div className="item">
                  <h6>ВКонтакте</h6>
                  <p>Поставить ссылку-виджет<br />в сообществе</p>
                  <button onClick={() => copyToClipboard('Ссылка для ВКонтакте', 'vkLink')}>
                    {buttonText['vkLink'] || 'Копировать'}
                  </button>
                  <img src={vk} alt="#" />
                </div>
                <div className="item">
                  <h6>Telegram</h6>
                  <p>Открывать по ссылке в<br />телеграм-боте</p>
                  <button onClick={() => copyToClipboard('Ссылка для Telegram', 'tgLink')}>
                    {buttonText['tgLink'] || 'Копировать'}
                  </button>
                  <img src={tg} alt="#" />
                </div>
                <div className="item">
                  <h6>Tik Tok</h6>
                  <p>Поставить ссылку в шапку<br />профиля</p>
                  <button onClick={() => copyToClipboard('Ссылка для Tik Tok', 'ttLink')}>
                    {buttonText['ttLink'] || 'Копировать'}
                  </button>
                  <img src={tt} alt="#" />
                </div>
              </div>
            </div>
            <div className="code">
              <h2>Встраивание на сайт</h2>
              <div className="init">
                <h5>Код инициализации</h5>
                <p>Вставьте код в блок head в начале страницы.</p>
                <div></div>
                <button onClick={() => copyToClipboard('Код инициализации', 'initCode')}>
                  {buttonText['initCode'] || 'Копировать'}{imageVisible['initCode'] !== false && <img src={copy} alt="#" />}
                </button>
              </div>
              <div className="instal">
                <h5>Код установки квиза</h5>
                <p>Скопируйте этот код и установите в то место, где должен быть квиз.</p>
                <div></div>
                <button onClick={() => copyToClipboard('Код установки квиза', 'initCode2')}>                  
                    {buttonText['initCode2'] || 'Копировать'}{imageVisible['initCode2'] !== false && <img src={copy} alt="#" />}
                </button>
              </div>
              <p><span>Проверить правильность установки</span><br />Введите полный адрес страницы, где вы установили квиз, и нажмите "проверить".</p>
              <div className="link">Ccылка<div>https://qzpro.me<button>Проверить</button></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Install;