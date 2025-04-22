import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isQuizes } from '../../../actions';
import { APPLICATIONS } from '../../../middleware';
import { BALANCE, QUIZESALL } from '../../../middleware';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import Quizes from '../../components/lk/quizes/Quizes';

const Start = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Token);
  const isQuiz = useSelector((state) => state.isQuizes);
  const isApplications = useSelector((state) => state.isApplications);
  useEffect(() => {
    console.log(token);
    if (isQuiz) {   
      dispatch(BALANCE(token));      
      dispatch(QUIZESALL(token));      
    }
    if (!isApplications) {
      dispatch(APPLICATIONS(token));
    }
  });
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
              <LeftBar />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
              <Quizes />
            </div>
        </div>
    </div>
  )
}
export default Start;