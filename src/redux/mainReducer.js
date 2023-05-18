import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_COUNTRIES_API_KEY_2;

export const fetchCountries = createAsyncThunk(
    'countries/fetchTodos',
    async () => {
        const response = await axios.get(
            `https://countryapi.io/api/all?apikey=${apiKey}`
        );
        return Object.values(response?.data);
    }
);

export const mainReducer = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        colorMode: window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'Dark'
            : 'Light',
    },
    reducers: {
        switchMode(state, action) {
            state.colorMode = action.payload;
            console.log(state.countries);
        },
    },
    extraReducers: {
        [fetchCountries.fulfilled]: (state, action) => {
            state.countries = action.payload;
        },
    },
});

export const { switchMode } = mainReducer.actions;
export default mainReducer.reducer;
