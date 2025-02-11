import React from 'react';
import './style.scss';
import Image from 'next/image';
import trash from '../../../../public/trash.svg';
import eye from '../../../../public/eye.svg';
import person from '../../../../public/applications/person.svg';
import phone from '../../../../public/applications/phone.svg';
import email from '../../../../public/applications/email.svg';
import subtract from '../../../../public/applications/Subtract.svg';

const ApplicationSmall = () => {
  return (
    <div className="item">
      <div className="number">1</div>
      <p className="date">1 дек. 2024 г., 13:04<br/>Россия, Тюмень</p>
      <p className="name"><Image src={subtract} alt='#'/>Натяжные потолки</p>
      <ul>
        <li><Image src={person} alt='#'/>Екатерина Мещерякова</li>
        <li><Image src={phone} alt='#'/>+79129285745</li>
        <li><Image src={email} alt='#'/>emesh26042015@gmail.com</li>
      </ul>
      <button className='look'><Image src={eye} alt='#' /></button>
      <button className="delete"><Image src={trash} alt='#' /></button>
    </div>
  )
}
export default ApplicationSmall;