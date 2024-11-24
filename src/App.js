import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import{Navbar}from"./component/Navbar/Navbar"
import{Home}from"./component/Home/Home"
function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Navbar/>
            <Home/>
        </ThemeProvider>
    );
}

export default App;
