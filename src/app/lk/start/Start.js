import React from 'react';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import Quizes from '../../components/lk/quizes/Quizes';

const Start = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
              <LeftBar />
            </div>
            <div className="col-xxl-9">
              <Quizes />
            </div>
        </div>
    </div>
  )
}
export default Start;