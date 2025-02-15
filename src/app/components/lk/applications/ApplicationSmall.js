import React from 'react';
import './style.scss';
import trash from '../../../img/application/trash.svg';
import eye from '../../../img/application/eye.svg';
import person from '../../../img/application/person.svg';
import phone from '../../../img/application/phone.svg';
import email from '../../../img/application/email.svg';
import subtract from '../../../img/application/Subtract.svg';

const ApplicationSmall = () => {
  return (
    <div className="item">
      <div className="number">1</div>
      <p className="date">1 дек. 2024 г., 13:04<br/>Россия, Тюмень</p>
      <p className="name"><img src={subtract} alt="#" />Натяжные потолки</p>
      <ul>
        <li><img src={person} alt="#" />Екатерина Мещерякова</li>
        <li><img src={phone} alt="#" />+79129285745</li>
        <li><img src={email} alt="#" />emesh26042015@gmail.com</li>
      </ul>
      <button className='look'><img src={eye} alt="#" /></button>
      <button className="delete"><img src={trash} alt="#" /></button>
    </div>
  )
}
export default ApplicationSmall;