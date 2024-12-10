import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    pop_up: false,
    button: 1
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
});

export default RootReducer;