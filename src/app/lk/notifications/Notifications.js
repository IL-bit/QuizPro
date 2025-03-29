import React from 'react';
import Notification from '../../components/lk/notification/Notification';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import './style.scss';
const Notifications = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
          <LeftBar />
        </div>
        <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
          <div id="notification">
              <h2>Уведомления</h2>
              <div className="count">1</div>
              <div className="notification_content">
                <Notification />
                <Notification />
                <Notification />
              </div>
          </div>        
        </div>        
      </div>
    </div>
  )
}
export default Notifications;