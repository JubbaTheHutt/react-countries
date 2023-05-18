import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainReducer.js';

export default configureStore({
    reducer: { countries: mainReducer },
});
