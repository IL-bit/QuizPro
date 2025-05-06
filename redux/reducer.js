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
    activebutton: 0,
    Token: ''
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
            state.Token = action.payload.data.accessToken;
            localStorage.setItem('access_token', state.Token); 
            state.login = 'ok';
        })
        .addCase(changeActiveButton, (state, action) => {
            state.activebutton = action.payload;
        })
        .addCase('REFRESH_SUCCESS', (state, action) => {
            state.Token = action.payload.data.accessToken;
            localStorage.setItem('access_token', state.Token); 
            state.login = 'ok';
            state.isAuth = true;        
        })
        .addCase('REFRESH_ERROR', (state) => {
            localStorage.removeItem('access_token');
            state.Token = '';
            state.login = 'error';
            state.isAuth = false;
        })
        .addCase('REFRESH_FAILED', (state) => {
            localStorage.removeItem('access_token');
            state.Token = '';
            state.login = 'error';
            state.isAuth = false;
        })
});

export default RootReducer;