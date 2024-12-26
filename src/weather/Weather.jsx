import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWeather, setForecast } from './Store.js';
import Search from './Search';
import Currentweather from './Types/Currentweather.jsx';
import Forecast from './Types/Forecast.jsx';
import { WEATHER_API_URL, WEATHER_API_KEY } from './connect.js';
import { Box } from '@mui/material';
import SideBar from '../components/Sidebar.jsx';

export function Weather() {
  const dispatch = useDispatch();
  const { currentWeather, forecast } = useSelector((state) => state.weather);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentweatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentweatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      dispatch(setCurrentWeather({ city: searchData.label, ...weatherResponse }));
      dispatch(setForecast({ city: searchData.label, ...forecastResponse }));
    });
  };

  return (
    <>
    <Box sx={{
        display:'flex'
    }}>
        <SideBar/>
      <Box
        sx={{
          width: '100%',
          height: {
            xs: 'auto',
            md: 'auto',
          },
          marginTop:'70px',
          backgroundImage: 'linear-gradient(to right, #fff,#00A9F2)',
          padding: '20px',
        }}
      >
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <Currentweather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </Box>
      </Box>
    </>
  );
}

export default Weather;
