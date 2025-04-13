import { createReducer } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
const initialState = {
    type: '',
    createQuiz: {
        currentSection: 0,
        currentQuestion: null,
        currentQuestionIndex: 0,
        countQuestions: 0,
        data: {
            title: 'Заголовок страницы',   
            isvideo1: false,
            isvideo2: false,              
            theme: {
                backgroundColor: '#425766',
                textColor: '#FFFFFF',
                buttonColor: '#105EFE',
                buttonTextColor: '#FFFFFF',
                font: '',
                buttonStyle: 'style1',
                theme: 'dark'
            },
            canvas1: {
                title: 'Введите заголовок формы',
                subtitle: 'Дополнительный текст-описание',
                img: null,
                logo: null,
                name: 'ООО «Название компании»',
                description: 'Название или слоган компании',
                tel: '+7 (900) 000-00-00',
                button: 'Начать',
                video: null,
                mobile: null,
                mobileVideo: null,
                aling: 'canvas',
                isActive: true
            },
            canvas2: [
            ],
            canvas3: {
                title: 'Введите заголовок формы',
                subtitle: 'Дополнительный текст-описание',
                img: null,
                name: 'Иван',
                email: 'Mail@example.com',
                phone: '+7 (900) 000-00-00',
                video: null,
                aling: 'canvas'
            },
        }
    },
    quiz: {},
    quizes: [],
    login: '',
    isAuth: false,
    balance: 0,
    Token: ''
};

const RootReducer = createReducer(initialState, builder => {
    builder 
    /* Конструктор */
    .addCase('HANDLEBUTTONCLICK', (state, action) => {
        state.createQuiz.currentSection = action.payload;
    })
    .addCase('HANDLEINPUTCHANGE', (state, action) => {
        console.log(action.payload);
        const { canvas, field, value } = action.payload;
        state.createQuiz.data[canvas][field] = value;
    })
    .addCase('CHANGE_TITLE', (state, action) => {
        state.createQuiz.data.title = action.payload; // Обновляем заголовок
    })
    .addCase('HANDLEBUTTONBLUR', (state, action) => {
        const { canvas, field, value } = action.payload;
        state.createQuiz.data[canvas][field] = value;
    })
    .addCase('HANDLEREMOVEFIELD', (state, action) => {
        const { canvas, field } = action.payload;
        state.createQuiz.data[canvas][field] = null;
    })
    .addCase('HANDLEIMAGECHANGE', (state, action) => {
        console.log('img');
        const { canvas, file } = action.payload;
        if (canvas === 'canvas1') {
            state.createQuiz.data.isvideo1 = false;
        }
        if (canvas === 'canvas3') {
            state.createQuiz.data.isvideo2 = false;
        }
        state.createQuiz.data[canvas].video = null;
        state.createQuiz.data[canvas].img = file; 
    })
    .addCase('HANDLEMOBILECHANGE', (state, action) => {
        console.log('mobile');
        const { canvas, file } = action.payload;
        state.createQuiz.data[canvas].mobile = file; // Убедитесь, что file - это URL изображения
    })
    .addCase('HANDLEIMAGE2CHANGE', (state, action) => {
        console.log('logo');
        const { canvas, file } = action.payload;
        state.createQuiz.data[canvas].logo = file; // Убедитесь, что file - это URL изображения
    })
    .addCase('HANDLEVIDEOCHANGE', (state, action) => {
        console.log('video');
        const { canvas, file } = action.payload;
        state.createQuiz.data[canvas].video = file; // Убедитесь, что file - это URL изображения
    })
    .addCase('RESETBACKGROUND', (state, action) => {
        console.log('RESETBACKGROUND');
        console.log(state.createQuiz.isvideo1);
        console.log(state.createQuiz.isvideo2); 
        const canvas = action.payload;
        if (canvas === 'canvas1' && state.createQuiz.data.isvideo1 === false) {
            state.createQuiz.data.isvideo1 = true;
        } else {
            state.createQuiz.data.isvideo1 = false;
        }
        if (canvas === 'canvas3' && state.createQuiz.data.isvideo2 === false) {
            state.createQuiz.data.isvideo2 = true;
        } else {
            state.createQuiz.data.isvideo2 = false;
        }
        state.createQuiz.data[canvas].video = null;
        state.createQuiz.data[canvas].img = null;
    })
    .addCase('HANDLESETCURRENTSECTION', (state, action) => {
        state.createQuiz.currentSection = action.payload;
    })
    .addCase('ADDQUESTION', (state, action) => {
        state.createQuiz.data.canvas2.push(action.payload);

        if (state.createQuiz.currentQuestionIndex === 9) {
            state.createQuiz.countQuestions = 10;
        }
        console.log(initialState);
    })
    .addCase('HANDLESETCURRENTQUESTION', (state, action) => {
        state.createQuiz.currentQuestion = action.payload;
    })
    .addCase('INCREMENTCOUNTQUESTION', (state) => {
        state.createQuiz.currentQuestion = null;        
        state.createQuiz.currentQuestionIndex = state.createQuiz.data.canvas2.length;
        if (state.createQuiz.currentQuestionIndex === 9) {
            state.createQuiz.countQuestions = 10;
        }
    })
    .addCase('UPDATEQUESTION', (state, action) => {
        const { index, newQuestionData } = action.payload;
        state.createQuiz.data.canvas2[index] = {
            ...state.createQuiz.data.canvas2[index], // Сохраняем остальные поля
            ...newQuestionData // Обновляем только нужные поля
        };
    })
    .addCase('CHANGEQUESTION', (state, action) => {
        if (state.createQuiz.currentQuestionIndex === 0) {
            state.createQuiz.currentQuestionIndex = 1;
        } else if (state.createQuiz.currentQuestionIndex === 9) {
            state.createQuiz.countQuestions = 10;
            state.createQuiz.currentQuestionIndex = 8;
        } else {
            state.createQuiz.currentQuestionIndex += action.payload; // Увеличиваем или уменьшаем индекс
        }
        const currentIndex = state.createQuiz.currentQuestionIndex;
        if (state.createQuiz.data.canvas2[currentIndex] && state.createQuiz.data.canvas2[currentIndex].name) {
            state.createQuiz.currentQuestion = state.createQuiz.data.canvas2[currentIndex].name;
        } else {
            if (currentIndex > 0) {
                state.createQuiz.currentQuestion = state.createQuiz.data.canvas2[currentIndex - 1].name;
            } else {
                state.createQuiz.currentQuestion = null;
            }
        }
    })
    .addCase('REMOVEQUESTION', (state, action) => {
        const { index } = action.payload;
        state.createQuiz.data.canvas2.splice(index, 1); // Удаляем вопрос по индексу
        state.createQuiz.currentQuestion = null; // Устанавливаем currentQuestion в null
    })
    .addCase('CLEAR_CANVAS2', (state) => {
        state.createQuiz.data.canvas2 = []; // Очищаем canvas2
        state.createQuiz.currentQuestionIndex = 0; // Сбрасываем индекс текущего вопроса
        state.createQuiz.data.title = 'Заголовок страницы';
    })
    .addCase('TURNOFFCANVAS1', (state) => {
        state.createQuiz.data.canvas1.isActive = false;
        state.createQuiz.data.canvas1.video = null;
        state.createQuiz.data.canvas1.img = null;
        state.createQuiz.data.canvas1.logo = null;
        state.createQuiz.data.canvas1.mobile = null;
    })
    .addCase('TURNONCANVAS1', (state) => {
        state.createQuiz.data.canvas1.isActive = true;
    })
    .addCase('SET_ALIGN', (state, action) => {
        state.createQuiz.data.canvas1.aling = action.payload; // Обновляем значение align
    })
    .addCase('SET_ALIGN3', (state, action) => {
        state.createQuiz.data.canvas3.aling = action.payload; // Обновляем значение align
    })
    .addCase('CHANGETHEME', (state, action) => {
        state.createQuiz.data.theme.theme = action.payload; 
    })
    .addCase('CHANGEBACKGROUNDCOLOR', (state, action) => {
        state.createQuiz.data.theme.theme = 'user';
        state.createQuiz.data.theme.backgroundColor = action.payload;
    })
    .addCase('CHANGETEXTCOLOR', (state, action) => {
        state.createQuiz.data.theme.theme = 'user';
        state.createQuiz.data.theme.textColor = action.payload;
    })
    .addCase('CHANGEBUTTONCOLOR', (state, action) => {
        state.createQuiz.data.theme.theme = 'user';
        state.createQuiz.data.theme.buttonColor = action.payload;
    })
    .addCase('CHANGEBUTTONTEXTCOLOR', (state, action) => {
        state.createQuiz.data.theme.theme = 'user';
        state.createQuiz.data.theme.buttonTextColor = action.payload;
    })
    .addCase('CHANGEFONT', (state, action) => {
        state.createQuiz.data.theme.theme = 'user';
        state.createQuiz.data.theme.font = action.payload;
    })
    .addCase('CHANGEBUTTONSTYLE', (state, action) => {
        state.createQuiz.data.theme.buttonStyle = action.payload;
    })
    /* ЛК */
    .addCase('LOGIN_SUCCESS', (state, action) => {
        console.log('LOGIN_SUCCESS action triggered'); // Для отладки
        console.log('Access Token:', action.payload.data.accessToken); // Для отладки

        if (action.payload.data.accessToken) {
            state.Token = action.payload.data.accessToken; 
            localStorage.setItem('access_token', state.Token); // Сохраняем токен в localStorage

            // Сохраняем время сохранения токена
            const expirationTime = Date.now() + 3 * 24 * 60 * 60 * 1000; // 3 дня в миллисекундах
            localStorage.setItem('token_expiration', expirationTime);

            state.login = 'ok';
            state.isAuth = true;
            console.log('SUCCESS', action);
            console.log('Token saved to localStorage:', state.Token);
        } else {
            console.error('No access token found in action payload');
        }
    })
    .addCase('LOGIN_ERROR', (state) => {
        state.login = 'error';
        console.log('ERROR');
    })
    .addCase('LOGIN_FAILED', (state) => {
        state.login = 'no';
        console.log('NO');
    })
    .addCase('LOGOUT', (state) => {
        state.isAuth = false;
        state.login = 'no';
        state.Token = '';
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; HttpOnly; SameSite=Strict`;
        }
    })
    .addCase('ISLOG', (state) => {
        const isLog = localStorage.getItem('access_token');
        const expirationTime = localStorage.getItem('token_expiration');

        if (isLog && expirationTime) {
            if (Date.now() > expirationTime) {
                // Если срок действия токена истек, удаляем его
                localStorage.removeItem('access_token');
                localStorage.removeItem('token_expiration');
                state.isAuth = false; // Обновляем состояние аутентификации
                console.log('Token expired and removed from localStorage');
            } else {
                state.Token = isLog; 
                state.login = 'ok';
                state.isAuth = true; // Токен действителен
            }
        } else {
            state.isAuth = false; // Токен отсутствует
        }
    })
});

export default RootReducer;