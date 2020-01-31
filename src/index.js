import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";



ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>,
    </BrowserRouter>,
    document.getElementById('root')
);
