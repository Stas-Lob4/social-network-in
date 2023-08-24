import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {GlobalStyled} from './styled/GlobalStyled';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <GlobalStyled/>
    </div>,
);