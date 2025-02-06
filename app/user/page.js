import React from 'react';
import LeftBarLK from '../components/Lk/LeftBar/LeftBarLK';
import Quizes from '../components/Lk/Quizes/Quizes';

const User = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBarLK />
            </div>
            <div className="col-xxl-9">
                <Quizes />
            </div>
        </div>
    </div>
  )
}
export default User;