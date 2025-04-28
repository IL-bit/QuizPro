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
    const downloadScriptFile = (text, buttonKey) => {
      navigator.clipboard.writeText(text).then(() => {
        setButtonText((prev) => ({
            ...prev,
            [buttonKey]: 'Файл скачан', // Меняем текст кнопки
        }));

        setImageVisible((prev) => ({
            ...prev,
            [buttonKey]: false, // Скрываем изображение
        }));

        setTimeout(() => {
            setButtonText((prev) => ({
                ...prev,
                [buttonKey]: 'Скачать', // Восстанавливаем текст через 3.5 секунды
            }));
            setImageVisible((prev) => ({
                ...prev,
                [buttonKey]: true, // Восстанавливаем изображение
            }));
        }, 3500);
    });
      const link = document.createElement('a');
      link.href = '/script.js'; // Путь к вашему файлу
      link.download = 'script.js'; // Имя файла для скачивания
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    const codeInit = `<button id="buttonQuiz">Пройти квиз</button><div id="Quiz"></div><script src="путь до файла JS"/>`;
    const codeInit2 = `<script>const quiz_id = ${currentQuizID};</script><style>#Quiz,.item{top:0;left:0}#Quiz>div>img,.btns,.item,a{position:absolute}.answers,.btns{padding-left:16px}#buttonQuiz,button.active{background:#105efe}a,h3{font-weight:400;font-size:16px}#Quiz>div,input{position:relative}.right,a{color:#fff}#buttonQuiz {border-radius:18px;width:351px;height:200vh;color:#fff;cursor:pointer}#Quiz{display:none;position:fixed; width:100vw;height:100vh;background:#000 ;z-index:90;overflow:none} #Quiz>div{left:50%;top:50%;transform:translate(-50%,-50%);border:1px solid #1d2a33 ;border-radius:25px; max-width:1400px;height:902px; width:100vw;background:#0f181e} #Quiz>div>img{right:22px;top:24px;cursor:pointer;height:18px;width:18px}#Quiz>div>#canvas {padding:94px 61px 134px 73px;height:674px}#Quiz>div>#canvas>.canvas1{border-radius:15px;padding:13px;display:flex;position:relative;height:100%;border:none;background-position:center!important;background-repeat:no-repeat!important;background-size:cover!important}a{text-decoration:underline;text-decoration-skip-ink:none;text-align:center;bottom:43px;right:auto;left:50%;transform:translateX(-50%);text-decoration-color:#105efe;text-decoration-color:#105efe;text-decoration-color:#ff6210}.answers{width:100%;display:grid;grid-template-columns:repeat(2,1fr);gap:15px;border-radius:100%;background:#d3dbe1;margin-bottom:-5px;display:flex;align-items:center;height:25px;border:none;cursor:pointer}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:51px;height:51px;background-color:none;cursor:pointer;z-index:3}input[type=range]::-moz-range-thumb{width:51px;height:51px;background-color:none;cursor:pointer;z-index:3}.item{border:.85px solid #d3dbe1;border-radius:15px;width:408px;height:100%!important;margin-right:26px;flex:0 0 auto;background-position:center;background-size:cover;background-repeat:no-repeat}.btns{left:0;bottom:0;width:100%;display:flex;align-items:center;background:#d3dbe1;height:25px;border:none;border-radius:100%}h3{margin:0}input,p{font-weight:400;font-size:14px}input{border-radius:6px;width:281px;height:44px;bottom:0;padding-left:42px;background:rgba(106,132,150,.09)}p{margin:0 0 0 23px;line-height:17px;text-align:right;left:auto;right:43px}img{left:14px!important;bottom:18px!important}.canvas-center,.canvas1,.canvas2,.canvas3{background:#1153fe}input::placeholder{color:#fff}</style>`;
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
                <div>{codeInit2}</div>
                <button onClick={() => copyToClipboard(codeInit2, 'initCode')}>
                  {buttonText['initCode'] || 'Копировать'}{imageVisible['initCode'] !== false && <img src={copy} alt="#" />}
                </button>
              </div>
              <div className="instal">
                <h5>Код установки квиза</h5>
                <p>Скопируйте этот код и установите в то место, где должен быть квиз.</p>
                <div>{codeInit}</div>
                <button onClick={() => downloadScriptFile('<button id="buttonQuiz">Пройти квиз</button><div id="Quiz"></div><script src="путь до файла JS"/>', 'initCode2')}>                  
                    {buttonText['initCode2'] || 'Скачать'}{imageVisible['initCode2'] !== false && <img src={copy} alt="#" />}
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