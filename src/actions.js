import { createAction } from "@reduxjs/toolkit";

export const turnOff = createAction('TURNOFFCANVAS1');
export const turnOn = createAction('TURNONCANVAS1');



// Действия для управления состоянием
export const buttonClick = createAction('HANDLEBUTTONCLICK');

// Действия для изменения ввода
export const inputChange = createAction('HANDLEINPUTCHANGE', (canvas, field, value) => ({
  payload: { canvas, field, value },
}));

export const buttonBlur = createAction('HANDLEBUTTONBLUR', (canvas, field, value) => ({
  payload: { canvas, field, value },
}));

export const changeTitle = (newTitle) => ({
  type: 'CHANGE_TITLE',
  payload: newTitle,
});

// Действия для управления изображениями
export const imageChange = createAction('HANDLEIMAGECHANGE', (canvas, file) => ({payload: { canvas, file }}));
export const mobileChange = createAction('HANDLEMOBILECHANGE', (canvas, file) => ({payload: { canvas, file }}));
export const image2Change = createAction('HANDLEIMAGE2CHANGE', (canvas, file) => ({payload: { canvas, file }}));
export const videoChange = createAction('HANDLEVIDEOCHANGE', (canvas, file) => ({payload: { canvas, file }}));
export const resetBackground = createAction('RESETBACKGROUND');
// Действия для управления вопросами
export const removeField = createAction('HANDLEREMOVEFIELD');
export const setCurrentSection = createAction('HANDLESETCURRENTSECTION');

export const setCurrentQuestion = createAction('HANDLESETCURRENTQUESTION');
export const addQuestion = createAction('ADDQUESTION', data => ({ payload: data }));
export const updateQuestion = createAction('UPDATEQUESTION', data => ({ payload: data }));
export const incremenCountQuestion = createAction('INCREMENTCOUNTQUESTION');
export const changeQuestion = createAction('CHANGEQUESTION');
export const removeQuestion = createAction('REMOVEQUESTION');
export const clearCanvas2 = createAction('CLEAR_CANVAS2');

// Иснтрументы
export const setAlign = (alignValue) => ({
  type: 'SET_ALIGN',
  payload: alignValue,
});
export const setAlign3 = (alignValue) => ({
  type: 'SET_ALIGN3',
  payload: alignValue,
});
export const logOut = createAction('LOGOUT');