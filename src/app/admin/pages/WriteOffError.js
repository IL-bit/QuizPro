import React from 'react';
import { useSelector } from 'react-redux';
import LeftBar from './leftBar/LeftBar';

const WriteOffError = () => {
  return (
    <div className='container-fluid'>
      <div className="row admin">
        <LeftBar />       
        <div className="col-xxl-10">WriteOffError</div>
      </div>
    </div>
  )
}

export default WriteOffError;