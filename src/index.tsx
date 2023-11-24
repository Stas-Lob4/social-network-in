import ReactDOM from 'react-dom/client';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {App} from './App';
import {GlobalStyled} from './styled/GlobalStyled';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        <GlobalStyled/>
    </HashRouter>
)
