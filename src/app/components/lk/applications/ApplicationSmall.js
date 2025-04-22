import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETEAPPLICATION } from '../../../../middleware';
import './style.scss';
import trash from '../../../img/application/trash.svg';
import eye from '../../../img/application/eye.svg';
import person from '../../../img/application/person.svg';
import phone from '../../../img/application/phone.svg';
import email from '../../../img/application/email.svg';
import subtract from '../../../img/application/Subtract.svg';

const ApplicationSmall = ({ application }) => {
  const navigate = useNavigate();   
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Token);
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <>
      <div className="item pc">
        <div className="number">{application.id}</div>
        <p className="date">1 дек. 2024 г., 13:04<br/>Россия, Тюмень</p>
        <p className="name"><img src={subtract} alt="#" />{application.quizName}</p>
        <ul>
          {application.name ? <li><img src={person} alt="#" />{application.name}</li> : null}
          {application.phone ? <li><img src={phone} alt="#" />{application.phone}</li> : null}
          {application.email ? <li><img src={email} alt="#" />{application.email}</li> : null}
        </ul>
        <button className='look' onClick={() => handleClick('/user/applications/answer')}><img src={eye} alt="#" /></button>
        <button className="delete" onClick={() => dispatch(DELETEAPPLICATION(application.id, token))}><img src={trash} alt="#" /></button> 
      </div>    
      <div className="item mobile">
        <div className="left">
          <p>№ заявки</p>
          <p>Дата</p>
          <p>Квиз</p>
          <p>Контакты</p>
        </div>
        <div className="right">
          <div className="number">{application.id}</div>
          <p className="date">1 дек. 2024 г., 13:04<br/>Россия, Тюмень</p>
          <p className="name"><img src={subtract} alt="#" />{application.quizName}</p>
          <ul>
            {application.name ? <li><img src={person} alt="#" />{application.name}</li> : null}
            {application.phone ? <li><img src={phone} alt="#" />{application.phone}</li> : null}
            {application.email ? <li><img src={email} alt="#" />{application.email}</li> : null}
          </ul>
        </div>
          <button className='look' onClick={() => handleClick('/user/applications/answer')}><img src={eye} alt="#" /></button>
          <button className="delete" onClick={() => dispatch(DELETEAPPLICATION(application.id, token))}><img src={trash} alt="#" /></button>   
      </div>
    </>

  )
}
export default ApplicationSmall;