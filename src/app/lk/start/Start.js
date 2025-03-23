import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BALANCE } from '../../../middleware';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import Quizes from '../../components/lk/quizes/Quizes';

const Start = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.Token);
  useEffect(() => {
    dispatch(BALANCE(token));
  }, []);
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3">
              <LeftBar />
            </div>
            <div className="col-xxl-9 col-xl-9">
              <Quizes />
            </div>
        </div>
    </div>
  )
}
export default Start;