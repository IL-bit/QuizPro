import React from 'react';
import { useNavigate } from 'react-router';
import './style.scss';
import deposits from '../../img/deposits.svg';
import writeoff from '../../img/writeoff.svg';
import writeoffsuccess from '../../img/writeoffsuccess.svg';
import bannedWords from '../../img/bannedWords.svg';
import statist from '../../img/deposits.svg';
import users from '../../img/users.svg';
import userBlock from '../../img/userBlock.svg';
import configurations from '../../img/configurations.svg';

const LeftBar = () => {
    const navigate = useNavigate();

    const handleChangeRoute = (route) => {
        navigate(route);
    };
  return (
    <div className="col-xxl-2" id='LeftBar'>
        <div onClick={() => handleChangeRoute('/statist')}><img src={statist} alt="#" />Статистика</div>
        <div onClick={() => handleChangeRoute('/deposits')}><img src={deposits} alt="#" />Пополнения</div>
        <div onClick={() => handleChangeRoute('/writeOff')}><img src={writeoffsuccess} alt="#" />Подтвержденый вывод</div>
        <div onClick={() => handleChangeRoute('/writeOffError')}><img src={writeoff} alt="#" />Отклоненный вывод</div>
        <div onClick={() => handleChangeRoute('/users')}><img src={users} alt="#" />Аккаунты пользователей</div>
        <div onClick={() => handleChangeRoute('/bannedWodrs')}><img src={bannedWords} alt="#" />Запрещенные слова</div>
        <div><img src={configurations} alt="#" />Конфигурация групп</div>
        <div onClick={() => handleChangeRoute('/bannedUsers')}><img src={userBlock} alt="#" />Заблокированные пользователи</div>
    </div>
  )
}

export default LeftBar;