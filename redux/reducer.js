import { createReducer, createAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

// Action creators
export const togglePopup = createAction('TOGGLE_POPUP');
export const closePopup = createAction('CLOSE_POPUP');
export const toggleButton = createAction('TOGGLE_BUTTON');
export const logIn = createAction('LOG_IN');
export const isLog = createAction('IS_LOG');
export const changeActiveButton = createAction('CHANGE_ACTIVE_BUTTON');

const initialState = {
    type: '',
    pop_up: false,
    button: 1,
    isAuth: false,
    activebutton: 0
};

const RootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(togglePopup, (state, action) => {
            state.pop_up = action.payload;
            document.body.classList.add('no-scroll');
        })
        .addCase(closePopup, (state) => {
            state.pop_up = false;
            document.body.classList.remove('no-scroll');
        })
        .addCase(toggleButton, (state, action) => {
            state.button = action.payload;
        })
        .addCase(logIn, (state, action) => {
            state.isAuth = true;
            state.pop_up = 'auth';
            if (action.payload.data.accessToken) {
                state.Token = action.payload.data.accessToken; 
                Cookies.set('access_token', state.Token, { expires: 3 }); // Set cookie for 3 days
                const expirationTime = Date.now() + 3 * 24 * 60 * 60 * 1000;
                Cookies.set('token_expiration', expirationTime, { expires: 3 }); // Set cookie for 3 days
                state.login = 'ok';
                console.log('SUCCESS', action);
                console.log('Token saved to cookies:', state.Token);
            } else {
                console.error('No access token found in action payload');
            }
        })
        .addCase(isLog, (state) => {
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
        .addCase(changeActiveButton, (state, action) => {
            state.activebutton = action.payload;
        });
});

export default RootReducer;