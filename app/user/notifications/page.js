import React from 'react';
import Notification from '@/app/components/Lk/notification/Notification';
import LeftBarLK from '@/app/components/Lk/LeftBar/LeftBarLK';
import './style.scss';
const Notifications = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-3">
          <LeftBarLK />
        </div>
        <div className="col-xxl-9">
          <div id="notification">
              <h2>Уведомления</h2>
              <div className="count">1</div>
              <div className="notification_content">
                <Notification />
              </div>
          </div>        
        </div>        
      </div>
    </div>
  )
}
export default Notifications;