import React from 'react';
import LeftBar from '../../components/constructor/leftbar/LeftBar';
import './style.scss';

const Plugins = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-12'>
              <LeftBar />                
            </div> 
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
              <div id="plugins">
                <div className="btns">
                  <button>Стартовая страница</button>
                  <button>Вопросы</button>
                  <button>Форма контактов</button>
                </div>
                <div className="items">
                  <div className="item">
                    <h5>Приём оплат</h5>
                    <p>Настройте один или несколько<br/>способов оплаты, чтобы посетитель<br/>выбрал наиболее удобный для себя.</p>
                    <button>Настроить</button>
                  </div>
                  <div className="soon">Скоро</div>
                  <div className="soon">Скоро</div>
                  <div className="soon">Скоро</div>
                  <div className="soon">Скоро</div>
                </div>
              </div>
            </div>
        </div>

    </div>            
  )
}

export default Plugins;
