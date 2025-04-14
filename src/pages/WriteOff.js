import React from 'react';
import { useSelector } from 'react-redux';
import LeftBar from './leftBar/LeftBar';

const WriteOff = () => {
  return (
    <div className='container-fluid'>
    <div className="row">
      <LeftBar />       
      <div className="col-xxl-10">WriteOff</div>
    </div>
  </div>
  )
}

export default WriteOff;