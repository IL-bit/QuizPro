import React from 'react';
import LeftBarLK from '@/app/components/Lk/LeftBar/LeftBarLK';
import Rate from '@/app/components/Lk/Rate/Rate';

const User = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBarLK />
            </div>
            <div className="col-xxl-9">
                <Rate />
            </div>
        </div>
    </div>
  )
}
export default User;