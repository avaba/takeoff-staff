import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './assets/fonts/opensans/opensans.css';
import {Provider} from "react-redux";
import {store} from "./store";
import {theme} from "./styles/theme";
import GlobalStyles from "./styles/global";
import {ThemeProvider} from '@mui/material';

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <App/>
        </ThemeProvider>
    </Provider>
)