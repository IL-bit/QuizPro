import React from 'react';
import LeftBar from './leftBar/LeftBar';

const BannedWords = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <LeftBar />       
        <div className="col-xxl-10">BannedWords</div>
      </div>
    </div>
  )
}

export default BannedWords;