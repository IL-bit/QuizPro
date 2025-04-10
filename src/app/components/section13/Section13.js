import React, { useState } from 'react';
import './style.scss';

const Section13 = () => {
    const [currentButton, setCurrentButton] = useState(0);
    const handleChange = (index) => {
        if (index === currentButton) {
            setCurrentButton(0);
        } else {
            setCurrentButton(index);
        }
    }
    return (
        <section id='thirth_section' className='row'>
            <div className="col-12 col-xxl-12 col-xl-12 col-lg-12">
                <h2>Ответы на частые вопросы</h2>
                <div className={currentButton === 1 ? 'active' : ''}>
                    <button>1. Оплата и тарифы</button>
                    <div className="img" onClick={() => handleChange(1)}></div>
                    <div className="text">
                        <p><strong>Почему я не могу просмотреть данные заявки, если на балансе ещё есть заявки?</strong><br/>Если срок подписки истёк, доступ к заявкам временно заблокирован. Чтобы снова их просмотреть, необходимо продлить тариф с таким же или большим лимитом.</p>
                        <p><strong>Где посмотреть заявки, полученные в неоплаченный период?</strong><br/>После окончания подписки заявки остаются в системе, но доступ к ним возможен только после продления тарифа.</p>
                        <p><strong>Как оплатить через расчётный счёт?</strong><br/>При оформлении тарифа выберите вариант "Оплата по счёту", получите платёжные реквизиты и совершите оплату. После этого свяжитесь с поддержкой для активации подписки.</p>
                        <p><strong>Когда нужно пополнять баланс?</strong><br/>Рекомендуем пополнять баланс заранее, если у вас заканчиваются оплаченные заявки или истекает срок подписки.</p>
                        <p><strong>Куда приходят уведомления о заканчивающемся балансе?</strong><br/>Вы получите уведомление на e-mail, когда останется менее 10 заявок, а также после их полного исчерпания.</p>
                        <p><strong>Есть ли автоплатёж?</strong><br/>Да, вы можете настроить автоматическое продление подписки, чтобы ваш квиз продолжал работать без перерывов.</p>
                        <p><strong>Сколько стоит сервис?</strong><br/>Стоимость зависит от выбранного тарифа. Все актуальные цены можно найти в разделе "Тарифы".</p>
                        <p><strong>Что будет при смене тарифа?</strong><br/>При смене тарифа оставшиеся заявки аннулируются, а новый тариф начинает действовать с момента его активации.</p>
                        <p><strong>Баланс заявок общий для всех квизов?</strong><br/>Да, заявки списываются с единого баланса, вне зависимости от количества квизов в аккаунте.</p>
                        <p><strong>Как оплатить несколько месяцев?</strong><br/>Можно сразу оплатить подписку на 3, 6 или 12 месяцев. Долгосрочные тарифы идут со скидкой.</p>
                        <p><strong>Как оплатить заранее?</strong><br/>Заранее оплатить подписку нельзя, но вы можете подключить автопродление, чтобы не пропустить оплату.</p>
                        <p><strong>Что делать, если лимит заявок закончился раньше срока?</strong><br/>Можно докупить дополнительные заявки или перейти на тариф с большим лимитом.</p>
                    </div>
                </div>
                <div className={currentButton === 2 ? 'active' : ''}>
                    <button>2. Работа с квизом</button>
                    <div className="img" onClick={() => handleChange(2)}></div>
                    <div className="text">
                        <p><strong>Как тестировать квиз без списания заявок с баланса?</strong><br/>Используйте тестовые данные при заполнении формы (например, test@email.com и +79999999999). Такие заявки не будут списываться.</p>
                        <p><strong>Чем отличается «Стартовая страница» и «Landing page»?</strong><br/>Стартовая страница – это первый экран квиза, который помогает вовлечь пользователя. Landing page – это отдельная промо-страница для квиза, на которую можно вести рекламу.</p>
                        <p><strong>Почему не работают результаты (ошибка «Не удалось рассчитать результат»)?</strong><br/>Проверьте настройки условий. Возможно, не заданы параметры для расчёта или нет универсального результата.</p>
                        <p><strong>Как вставить квиз на сайт без кнопки (в тело сайта)?</strong><br/>Вы можете встроить квиз в тело сайта с помощью iframe-кода, который находится в разделе "Установка квиза".</p>
                        <p><strong>Где взять ID квиза?</strong><br/>ID квиза можно найти в его настройках или в адресной строке при редактировании.</p>
                        <p><strong>Как привязать свой домен?</strong><br/>Подключение собственного домена доступно в настройках. Вам потребуется внести изменения в DNS-записи.</p>
                        <p><strong>Как добавить квиз в группу ВК?</strong><br/>В разделе "Установка квиза" есть инструкция по интеграции с ВКонтакте.</p>
                        <p><strong>Почему изменения в квизе или интеграции не работают?</strong><br/>После внесения правок убедитесь, что нажали кнопку "Сохранить" и "Опубликовать".</p>
                        <p><strong>Почему срабатывает автооткрытие квиза, если ползунок отключён?</strong><br/>Обновите страницу и проверьте настройки автооткрытия в разделе "Дизайн".</p>
                        <p><strong>Вы создаёте квиз под заказ?</strong><br/>Нет, но у нас есть партнёры, которые могут помочь с настройкой.</p>
                        <p><strong>Как протестировать сервис бесплатно?</strong><br/>После регистрации у вас будет 14 дней тестового доступа и 10 бесплатных заявок.</p>
                        <p><strong>Что такое бонусные заявки и как их получить?</strong><br/>Бонусные заявки предоставляются новым пользователям для знакомства с сервисом.</p>
                        <p><strong>Что делать после 14 дней тестирования?</strong><br/>Выберите подходящий тариф и активируйте подписку, чтобы продолжить работу.</p>
                        <p><strong>Можно ли использовать квиз без сайта?</strong><br/>Да, вы можете использовать квиз по прямой ссылке или добавить его в соцсети.</p>                       
                    </div>
                </div>
                <div className={currentButton === 3 ? 'active' : ''}>
                    <button>3. Интеграции и уведомления</button>
                    <div className="img" onClick={() => handleChange(3)}></div>
                    <div className="text">
                        <p><strong>Как изменить почту для уведомлений?</strong><br/>Почта для уведомлений настраивается в разделе "Интеграции".</p>
                        <p><strong>Как отправлять письмо клиенту?</strong><br/>Вы можете подключить сервис рассылок и настроить автоматическую отправку писем.</p>
                        <p><strong>Как получать уведомления о заявках на телефон?</strong><br/>Уведомления можно получать в Telegram или по SMS (при подключении интеграции).</p>
                        <p><strong>Где находятся настройки уведомлений?</strong><br/>Все настройки находятся в разделе "Интеграции".</p>
                    </div>
                </div>
                <div className={currentButton === 4 ? 'active' : ''}>
                    <button>4. Настройки и дизайн</button>
                    <div className="img" onClick={() => handleChange(4)}></div>
                    <div className="text">
                        <p><strong>Как изменить пароль от аккаунта?</strong><br/>Перейдите в раздел "Аккаунт" и обновите пароль в настройках безопасности.</p>
                        <p><strong>Какие размеры изображений оптимальны для загрузки?</strong><br/>
                        <strong>Стартовая страница:</strong><br/>
                        Прямая ссылка/домен – 1792х1509 px<br/>
                        Модальное окно – 1380х1300 px<br/>
                        ВК – 1166х1200 px<br/>
                        Планшет – 767х220 px<br/>
                        Мобильная версия – 400x400 px (главный элемент должен быть по центру).<br/>
                        <strong>Изображения в квизе:</strong><br/>
                        Вертикальное – 180х240 px<br/>
                        Квадратное – 240х240 px<br/>
                        Варианты – 380х307 px<br/>
                        Аватар консультанта – 70x70 px<br/>
                        Логотип – 107х37 px<br/>
                        Результаты – 1100х600 px<br/>
                        Бонус – 200x60 px.</p>
                        <p><strong>Как изменить цвет кнопки или квиза?</strong><br/>Настроить цвета можно в разделе "Дизайн".</p>
                        <p><strong>Что такое White Label и сколько это стоит?</strong><br/>White Label – это возможность убрать бренд QuizPro. Доступно в дополнительных настройках тарифа.</p>
                        <p><strong>Партнёрская бонусная программа QuizPro</strong></p>
                        <p><strong>Что такое партнёрская бонусная программа?</strong><br/>Партнёрская бонусная программа QuizPro — это возможность для пользователей приглашать новых клиентов и получать за это вознаграждение в виде кэшбэка на счёт. Программа создана для тех, кто хочет рекомендовать сервис и получать бонусы за активных приглашённых пользователей.</p>
                        <p><strong>Как работает программа?</strong><br/>
                        1. Пригласите друзей и коллег – поделитесь вашей персональной реферальной ссылкой.<br/>
                        2. Новые пользователи регистрируются – приглашённые вами клиенты создают аккаунт по вашей ссылке.<br/>
                        3. Они активируют платный тариф – бонус начисляется, если новый пользователь оплачивает от 300 заявок или от 3 000 ₽.<br/>
                        4. Получайте кэшбэк – как только 5 приглашённых пользователей выполнят условия, вам начисляется 15% кэшбека на карту.</p>
                        <p><strong>Какие бонусы можно получить?</strong><br/>
                        - 15% кэшбека с первой оплаты 5 активных пользователей.<br/>
                        - Возможность приглашать неограниченное количество людей.<br/>
                        - Участие бесплатное и не требует вложений.</p>
                        <p><strong>Где взять свою реферальную ссылку?</strong><br/>Персональная ссылка доступна в личном кабинете во вкладке «Партнёрская бонусная программа». Скопируйте её и отправьте друзьям, разместите в социальных сетях или на сайте.</p>
                        <p><strong>Какие условия должны выполнить приглашённые пользователи?</strong><br/>
                        - Пройти регистрацию по вашей реферальной ссылке.<br/>
                        - Оплатить от 300 заявок или более чем на 3 000 ₽.<br/>
                        - Быть новым пользователем QuizPro (ранее не регистрировались).</p>
                        <p><strong>Как отслеживать свои бонусы?</strong><br/>Вы можете следить за количеством приглашённых пользователей и начисленными бонусами в личном кабинете во вкладке «Партнёрская бонусная программа».</p>

                        <p><strong>Как вывести кэшбэк?</strong><br/>После выполнения условий и начисления бонусов, вы можете запросить вывод на карту. Вывод производится в течение 3 рабочих дней после обработки заявки.</p>

                        <p><strong>Есть ли ограничения?</strong><br/>
                        - Один пользователь может участвовать в программе только с одного аккаунта.<br/>
                        - Бонус начисляется только за новых пользователей.<br/>
                        - Запрещено использовать спам-методы для привлечения пользователей.</p>

                        <p>Начните зарабатывать с QuizPro прямо сейчас!<br/>Присоединяйтесь к партнёрской бонусной программе, делитесь своим опытом использования QuizPro и зарабатывайте на рекомендациях!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section13;