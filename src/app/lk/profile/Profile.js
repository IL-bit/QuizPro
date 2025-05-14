import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PROFILE, PUTPROFILE, RESET } from '../../../middleware';
import LeftBar from '../../components/lk/leftBar/LeftBar';
import './style.scss';
import money from '../../img/profile/money.svg';
import copy from '../../img/profile/copy.svg';
import close from '../../img/close.svg';
import success from '../../img/success.svg';

const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const balance = useSelector((state) => state.balance);
    const token = useSelector((state) => state.Token);
    const id = useSelector((state) => state.id);
    const isProfile = useSelector((state) => state.isProfile);
    const [modalActive, setModalActive] = useState(false);
    const [modaSuccessActive, setModalSuccessActive] = useState(false);
    
    const [newEmail, setEmail] = useState(profile.email || '');
    const [newPhone, setPhone] = useState(profile.phone || '');
    const [newName, setName] = useState(profile.name || '');

    const [dataForm, setDataForm] = useState({
        password_old: '',
        password: '',
        password_confirmation: ''
    });

    const data = {
        id: profile.id,
        email: newEmail,
        phone: newPhone,
        name: newName
    };

    const handleSend = () => {
        dispatch(PUTPROFILE(token, data));
    };
    const handleReset = () => {
        setEmail(profile.email);
        setPhone(profile.phone);
        setName(profile.name);
    };

    useEffect(() => {
        if (!isProfile) {
            dispatch(PROFILE(token, id));            
        }
    }, [dispatch, isProfile, token, id]);
    useEffect(() => {
        setEmail(profile.email || '');
        setPhone(profile.phone || '');
        setName(profile.name || '');
    }, [profile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm(prevState => {
            const newState = {
                ...prevState,
                [name]: value
            };
            return newState;
        });
    };
    const handlePost = () => {
        if (dataForm.password === dataForm.password_confirmation && dataForm.password !== '' && dataForm.password_old !== '') {
            dispatch(RESET(dataForm)).then(() => {
                setModalActive(false);
                setModalSuccessActive(true);
            }).catch(() => {});

        };
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-12">
                    <LeftBar />
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-12">
                    <div id="profile">
                        <div className="head">
                            <h2>Профиль</h2>
                            <p><img src={money} alt="#" />Текущий баланс</p>
                            <div className="balance">{balance} ₽</div>
                            <button>Пополнить</button>
                            <button>Вывести</button>
                        </div>
                        <div className="email">
                            <h6>Email</h6>
                            <input 
                                type="text" 
                                placeholder={profile.email} 
                                value={newEmail} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="name">
                            <h6>Ваше имя</h6>
                            <input 
                                type="text" 
                                placeholder={profile.name} 
                                value={newName} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className="password">
                            <h6>Пароль</h6>
                            <input type="text" placeholder='сменить пароль' readOnly onClick={() => setModalActive(!modalActive)}/>
                        </div>
                        <div className="phone">
                            <h6>Телефон</h6>
                            <input 
                                type="text" 
                                placeholder={profile.phone} 
                                value={newPhone} 
                                onChange={(e) => setPhone(e.target.value)} 
                            />
                            <button onClick={handleSend}>Сохранить изменения</button>
                            <p onClick={handleReset}>Не сохранять изменения</p>
                        </div>    
                        <div className="tg_notification">
                            <p><span>Уведомлять меня в Telegram</span><br/>чтобы знать, когда заканчиваются заявки или тариф</p>
                            <input type="text" placeholder='@tg....'/>
                        </div>                      
                        <div className="referal">
                            <p>Пригласите новых пользователей<br/>с помощью вашей уникальной ссылки:</p>
                            <div>q.pro/referal/#id324235</div>
                            <button>Копировать<img src={copy} alt="#" /></button>
                        </div>
                    </div>
                    <div id="changePassword" style={{ display: modalActive ? 'block' : 'none' }}>
                        <h2>Вы действительно<br/>изменить пароль?</h2>
                        <input type="password" name="password_old" placeholder='Старый пароль'onChange={handleChange} value={dataForm.password_old} required />
                        <input type="password" name="password" placeholder='Новый пароль'onChange={handleChange} value={dataForm.password} required />
                        <input type="password" name="password_confirmation" placeholder='Повторите пароль'onChange={handleChange} value={dataForm.password_confirmation} required />
                        <div className="btns">
                            <button>Да</button>
                            <button onClick={() => setModalActive(false)}>Нет</button>
                        </div>
                        <div className="close" onClick={() => setModalActive(false)}><img src={close} alt="#" /></div>
                    </div>
                    <div id="changePasswordOk" style={{ display: modaSuccessActive ? 'block' : 'none' }}>
                        <h2>Ваш пароль<br/>успешно изменён</h2>
                        <img src={success} alt="#" />
                        <button>Хорошо</button>
                        <div className="close" onClick={() => setModalSuccessActive(false)}><img src={close} alt="#" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
