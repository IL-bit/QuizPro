import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import Canvas1 from '../../components/constructor/previevPc/canvas1';
import Canvas2 from '../../components/constructor/previevPc/canvas2';
import Canvas3 from '../../components/constructor/previevPc/canvas3';
import close from '../../img/Constructor/create/close.svg';

const PrevievQuizPc = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div className="container" id='previevQuizPc'>
        <div className="row">
            <div className="col-12 ">
                <button className='close' onClick={() => handleClick('/user/createquiz/new')}><img src={close} alt="#" /></button>
                <div className="previev white-theme">
                  {/* <Canvas2 />  */}
                  <Canvas3 />      
                  {/* <Canvas1 /> */}

                </div>
            </div>
        </div>
    </div>
  )
}

export default PrevievQuizPc;