import { configureStore, createSlice } from '@reduxjs/toolkit';
import productsReducer from "../product/Productslice.js"

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: null,
    forecast: null,
  },
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export const { setCurrentWeather, setForecast } = weatherSlice.actions;

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    products: productsReducer,
  },
});

export default store;
