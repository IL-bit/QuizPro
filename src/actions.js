import { createAction } from "@reduxjs/toolkit";

export const turnOff = createAction('TURNOFFCANVAS1');
export const turnOn = createAction('TURNONCANVAS1');
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
export const changeQuestion = createAction('CHANGEQUESTION', (index) => ({payload: index}));
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
export const changeBackgroundColor = createAction('CHANGEBACKGROUNDCOLOR', (color) => ({payload: color}));
export const changeTextColor = createAction('CHANGETEXTCOLOR', (color) => ({payload: color}));
export const changeButtonColor = createAction('CHANGEBUTTONCOLOR', (color) => ({payload: color}));
export const changeButtonTextColor = createAction('CHANGEBUTTONTEXTCOLOR', (color) => ({payload: color}));
export const changeFont = createAction('CHANGEFONT', (font) => ({payload: font}));
export const changeButtonStyle = createAction('CHANGEBUTTONSTYLE', (style) => ({payload: style}));
export const changeTheme = createAction('CHANGETHEME', (theme) => ({payload: theme}));


// Лк
export const logOut = createAction('LOGOUT');
export const islog = createAction('ISLOG');


export const isQuizes = createAction('ISQUIZES');
export const noQuizes = createAction('NOQUIZES');
export const noApplications = createAction('NO_APPLICATIONS');
export const setCurrentQuiz = createAction('SET_CURRENT_QUIZ', (id) => ({payload: id}));
export const setCurrentQuiz2 = createAction('SET_CURRENT_QUIZ2', (id) => ({payload: id}));
export const setQuizes = (quizes) => ({
  type: 'SET_QUIZES',
  payload: quizes
});
export const setBalance = (balance) => ({
  type: 'SET_BALANCE',
  payload: balance
});
export const setRate = (rate) => ({
  type: 'SET_RATE',
  payload: rate
});
export const setProfile = (profile) => ({
  type: 'SET_PROFILE',
  payload: profile
});
export const setApllications = (applications) => ({
  type: 'SET_APPLICATIONS',
  payload: applications
});
export const setQuiz = (quiz) => ({
  type: 'SET_QUIZ',
  payload: quiz
});
export const setQuiz2 = (quiz) => ({
  type: 'SET_QUIZ2',
  payload: quiz
});
export const setStatist = (statist) => ({
  type: 'SET_STATIST',
  payload: statist
});
export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users
});
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user
});
export const setDeposits = (statist) => ({
  type: 'SET_DEPOSITS',
  payload: statist
});
export const setBannedWords = (words) => ({
  type: 'SET_BANNEDWORDS',
  payload: words
});
export const setBannedUsers = (users) => ({
  type: 'SET_BANNEDUSERS',
  payload: users
});
export const isUser = createAction('IS_USER');
export const noUser = createAction('NO_USER');
export const isUsers = createAction('IS_USERS');
export const noUsers = createAction('NO_USERS');
export const isBlocked = createAction('IS_BANNED');
export const noBlocked = createAction('NO_BANNED');