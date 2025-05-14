import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BANNEDWORDS, DELETEWORD } from '../../../middleware';
import Logout from './logout/Logout';
import LeftBar from './leftBar/LeftBar';
import eye from '../img/eye_close.svg';
import trash from '../img/trash.svg';
import edit from '../img/edit.svg';

const BannedWords = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Token);
  const words = useSelector((state) => state.admin.bannedWords);
  const [action, setAction] = useState('');
  const handleAction = (id) => {
    if (action ==='delete') {
      dispatch(DELETEWORD(token, id));
      dispatch(BANNEDWORDS(token));
    } else if (action ==='edit') {
      dispatch(BANNEDWORDS(token));
    };
  }
  useEffect(() => {
    dispatch(BANNEDWORDS(token));
  }, []);
  return (
    <div className='container-fluid'>
      <div className="row admin">
        <LeftBar />       
        <div className="col-xxl-10" id='BannedWords'>
          <h1>Запрещенные слова</h1>
          <Logout />
          <div>
            <input type="search" placeholder='Поиск...'/>
            <div className="btns">
              <button onClick={() => setAction('delete')}><img src={trash} alt="#" /></button>              
              <button onClick={() => setAction('')}><img src={eye} alt="#" /></button>
              <button onClick={() => setAction('edit')}><img src={edit} alt="#" /></button>
            </div>
            <div className='items'>
              {words.map((word) => (
                <div className={action} key={word.id}>{word.text}<div onClick={() => handleAction(word.id)}></div></div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannedWords;