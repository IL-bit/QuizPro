import React from 'react';
import LeftBar from '../../../../components/lk/leftBar/LeftBar';
import ArticleSmall from '../../../../components/lk/base/ArticleSmall';
import '../../style.scss';
import { useNavigate } from 'react-router-dom';

const IntegSites = () => {
    const navigate = useNavigate();   
    const handleClick = (route) => {
      navigate(route);
    };
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBar />
            </div>
            <div className="col-xxl-9">
                <div id="page">
                    <h2>Интеграция с сайтом</h2>
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
export default IntegSites;