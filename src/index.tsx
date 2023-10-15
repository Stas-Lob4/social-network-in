import {StateType, store} from './redux/state';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import {GlobalStyled} from './styled/GlobalStyled';
import React from 'react';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
let rerenderEntireTree = (state: StateType) => {
    root.render(
        <div>
            <BrowserRouter>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
            <GlobalStyled/>
        </div>
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)