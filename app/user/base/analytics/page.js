"use client";
import React from 'react';
import LeftBarLK from '@/app/components/Lk/LeftBar/LeftBarLK';
import ArticleSmall from '@/app/components/Lk/base/ArticleSmall';
import '../style.scss';

const Analytics = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xxl-3">
                <LeftBarLK />
            </div>
            <div className="col-xxl-9">
                <div id="page">
                    <h2>Аналитика</h2>
                    <button onClick={() => window.location.href = '/user/base'}></button>
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