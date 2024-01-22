import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counterSlice.jsx';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});