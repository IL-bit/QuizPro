import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; 

export const initializeStore = (preloadedState) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};