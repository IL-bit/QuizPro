import React from 'react';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import Rate from '../../components/lk/rates/Rates';

const User = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBar />
            </div>
            <div className="col-xxl-9">
                <Rate />
            </div>
        </div>
    </div>
  )
}
export default User;