import { createAction } from "@reduxjs/toolkit";

export const togglePopup = createAction('TOGGLE_POPUP');
export const closePopup = createAction('CLOSE_POPUP');
export const toggleButton = createAction('TOGGLE_BUTTON');
export const logIn = createAction('LOG_IN'); // Use camelCase for consistency
export const isLog = createAction('IS_LOG'); // Use camelCase for consistency
export const changeActiveButton = createAction('CHANGE_ACTIVE_BUTTON'); // Fixed typo