import './App.css'
import {Routes,Route,BrowserRouter, useLocation} from "react-router-dom"
import { ThemeProvider} from '@emotion/react'
import { createTheme } from '@mui/material'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Weather from './weather/Weather';

function App() {



  const theme = createTheme({
    typography: {
      fontFamily: '"Outfit", serif;',
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/weather' element={<Weather />}></Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
    </>
  )
}

export default App
