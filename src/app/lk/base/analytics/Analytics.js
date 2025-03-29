import React from 'react';
import LeftBar from '../../../components/lk/leftBar/LeftBar';
import ArticleSmall from '../../../components/lk/base/ArticleSmall';
import '../style.scss';
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
    const navigate = useNavigate();   
    const handleClick = (route) => {
      navigate(route);
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
                <LeftBar />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
                <div id="page">
                    <h2>Аналитика</h2>
                    <button onClick={() => handleClick('/user/base')}></button>
                    <div className="content">
                        <h3>Здесь вы найдёте ответы на свои вопросы</h3>
                        <p>5 статей</p>
                        <div className="items">
                            <ArticleSmall />
                            <ArticleSmall />
                            <ArticleSmall />
                            <ArticleSmall />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Analytics;