import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    createQuiz: {
        currentSection: 0,
        currentQuestion: null,
        currentQuestionIndex: 0,
        data: {
            canvas1: {
                title: 'Введите заголовок формы',
                subtitle: 'Дополнительный текст-описание',
                img: null,
                logo: null,
                name: 'ООО «Название компании»',
                description: 'Название или слоган компании',
                tel: '+7 (900) 000-00-00',
                button: 'Начать'
            },
            canvas2: [
            ],
            canvas3: {
                title: 'Введите заголовок формы',
                subtitle: 'Дополнительный текст-описание',
                img: null,
                name: 'Иван',
                email: 'Mail@example.com',
                phone: '+7 (900) 000-00-00'
            },
            title: ''         
        }

    },
    quiz: {},
    quizes: []
};

const RootReducer = createReducer(initialState, builder => {
    builder 
    .addCase('HANDLEBUTTONCLICK', (state, action) => {
        state.createQuiz.currentSection = action.payload;
    })
    .addCase('HANDLEINPUTCHANGE', (state, action) => {
        console.log(action.payload);
        const { canvas, field, value } = action.payload;
        state.createQuiz.data[canvas][field] = value;
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
        state.createQuiz.data[canvas].img = file; // Убедитесь, что file - это URL изображения
    })
    .addCase('HANDLEIMAGE2CHANGE', (state, action) => {
        console.log('logo');
        const { canvas, file } = action.payload;
        state.createQuiz.data[canvas].logo = file; // Убедитесь, что file - это URL изображения
    })
    .addCase('HANDLESETCURRENTSECTION', (state, action) => {
        state.createQuiz.currentSection = action.payload;
    })
    .addCase('ADDQUESTION', (state, action) => {
        state.createQuiz.data.canvas2.push(action.payload);
        console.log(initialState);
    })
    .addCase('HANDLESETCURRENTQUESTION', (state, action) => {
        state.createQuiz.currentQuestion = action.payload;
    })
    .addCase('INCREMENTCOUNTQUESTION', (state) => {
        ++state.createQuiz.currentQuestionIndex;
        state.createQuiz.currentQuestion = null;
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
            state.createQuiz.currentQuestionIndex = 0;
        } else {
            state.createQuiz.currentQuestionIndex += action.payload; // Увеличиваем или уменьшаем индекс
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
    })
});

export default RootReducer;