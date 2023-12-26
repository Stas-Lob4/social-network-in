import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import {App} from './app/App';
import {GlobalStyled} from './styled/GlobalStyled';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        <GlobalStyled/>
    </HashRouter>
)
