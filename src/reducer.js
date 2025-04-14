import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    isAuth: true,
    Token: '',
    email: '',
    password: '',
    statistic: {
        countUsers: 0,
        deposits: 0,
        writeOff: 0,
        yuMoney: 0,
        quizAll: 0,
        transactions: 0,
        transactionsError: 0,
        output: 0,
        base: 0,
        optim: 0,
        premium: 0
    },
    filters: {
        from: {
            year: 2025,
            month: 1,
            day: 1
        },
        to: {
            year: 2025,
            month: 4,
            day: 1
        }
    },
    users: [
        {id: '12345', createAt: '12345', rate: 'Base', balance: 0, email: 'email@gmail.com'},
        {id: '1233333345', createAt: '12345', rate: 'Base', balance: 0, email: 'email@gmail.com'}
    ],
    blockedUsers: [
        {id: '12345', createAt: '12345', rate: 'Base', balance: 0, email: 'email@gmail.com', reason: 'a1'},
        {id: '12345', createAt: '12345', rate: 'Base', balance: 0, email: 'email@gmail.com', reason: 'a1'}
    ],
    currentUser: {
        id: '123345',
        createAt: '12345',
        email: 'email@gmail.com',
        name: 'Name',
        surname: 'Surname',
        rate: 'Base',
        balance: 0,
        score: 0,
        frozenBalance: 0,
        history: [
            {id: '12345', amount: 0, balanceAfter: 0, status: 'ok', date: '123456'},
            {id: '12222345', amount: 0, balanceAfter: 0, status: 'ok', date: '123456'},
            {id: '12344445', amount: 0, balanceAfter: 0, status: 'ok', date: '123456'}
        ],
        referal: [
            {id: '12345', name: 'Name', surname: 'Surname', amount: 0, date: '123456'},
            {id: '12343335', name: 'Name', surname: 'Surname', amount: 0, date: '123456'},
            {id: '1234444445', name: 'Name', surname: 'Surname', amount: 0, date: '123456'}
        ]
    },
    deposits: [
        {id: '12345', date: '12345', name: 'Name', email: 'email@gmai.com', amount: 12345, reason: 'text', status: 'ok'},
        {id: '12345', date: '12345', name: 'Name', email: 'email@gmai.com', amount: 12345, reason: 'text', status: 'progress'},
        {id: '12345', date: '12345', name: 'Name', email: 'email@gmai.com', amount: 12345, reason: 'text', status: 'error'},
        {id: '12345', date: '12345', name: 'Name', email: 'email@gmai.com', amount: 12345, reason: 'text', status: 'ok'}
    ],
    bannedWords: ['word', 'word', 'word']
};

const RootReducer = createReducer(initialState, builder => {
    builder 
    .addCase('LOGIN_SUCCESS', (state, action) => {
        state.isAuth = true;
        state.Token = action.payload;
        console.log('LOGIN_SUCCESS');
    })
    // .addCase('', (state, action) => {

    // })
});

export default RootReducer;