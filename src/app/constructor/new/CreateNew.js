import React from 'react';
import LeftBar from '../../components/constructor/leftbar/LeftBar';
import Constructor from '../../components/constructor/Constructor';

const CreateNew = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
              <LeftBar />
            </div>
            <div className="col-xxl-9">
              <Constructor />
            </div>
        </div>
    </div>
  )
}

export default CreateNew;