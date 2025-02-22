import { createAction } from "@reduxjs/toolkit";
import { data } from "react-router";

// Действия для управления состоянием
export const buttonClick = createAction('HANDLEBUTTONCLICK');

// Действия для изменения ввода
export const inputChange = createAction('HANDLEINPUTCHANGE', (canvas, field, value) => ({
  payload: { canvas, field, value },
}));

export const buttonBlur = createAction('HANDLEBUTTONBLUR', (canvas, field, value) => ({
  payload: { canvas, field, value },
}));

// Действия для управления изображениями
export const imageChange = createAction('HANDLEIMAGECHANGE', (canvas, file) => ({payload: { canvas, file }}));
export const image2Change = createAction('HANDLEIMAGE2CHANGE', (canvas, file) => ({payload: { canvas, file }}));

// Действия для управления вопросами
export const removeField = createAction('HANDLEREMOVEFIELD');
export const setCurrentSection = createAction('HANDLESETCURRENTSECTION');

export const setCurrentQuestion = createAction('HANDLESETCURRENTQUESTION');
export const addQuestion = createAction('ADDQUESTION', data => ({ payload: data }));
export const incremenCountQuestion = createAction('INCREMENTCOUNTQUESTION');