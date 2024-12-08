import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    pop_up: false
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
});

export default RootReducer;