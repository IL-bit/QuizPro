import { createReducer } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const initialState = {
    type: '',
    pop_up: false,
    button: 1,
    isAuth: false
};

const RootReducer = createReducer(initialState, builder => {
    builder 
    .addCase('TOGGLEPOPUP', (state, action) => {
        state.pop_up = action.payload;
        document.body.classList.add('no-scroll');
    })
    .addCase('CLOSEPOPUP', (state) => {
        state.pop_up = false;
        document.body.classList.remove('no-scroll');
    })
    .addCase('TOGGLEBUTTON', (state, action) => {
        state.button = action.payload;
    })
    .addCase('LOG_IN', (state, action) => {
        state.isAuth = true;
        state.pop_up = 'auth';
        if (action.payload.data.accessToken) {
            state.Token = action.payload.data.accessToken; 
            Cookies.set('access_token', state.Token, { expires: 3 }); // Устанавливаем cookie на 3 дня
            const expirationTime = Date.now() + 3 * 24 * 60 * 60 * 1000;
            Cookies.set('token_expiration', expirationTime, { expires: 3 }); // Устанавливаем cookie на 3 дня
            state.login = 'ok';
            console.log('SUCCESS', action);
            console.log('Token saved to cookies:', state.Token);
        } else {
            console.error('No access token found in action payload');
        }
    })
    .addCase('ISLOG', (state) => {
        const isLog = Cookies.get('access_token');
        const expirationTime = Cookies.get('token_expiration');
        console.log(isLog);
        if (isLog && expirationTime) {
            if (Date.now() > expirationTime) {
                Cookies.remove('access_token');
                Cookies.remove('token_expiration');
                state.isAuth = false; 
                console.log('Token expired and removed from cookies');
            } else {
                state.Token = isLog; 
                state.login = 'ok';
                state.isAuth = true;
            }
        } else {
            state.isAuth = false; 
        }
    })
});

export default RootReducer;