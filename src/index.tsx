import {StateType, store} from './redux/state';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import {GlobalStyled} from './styled/GlobalStyled';
import React from 'react';
 let rerenderEntireTree = (state: StateType) => {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    root.render(
        <div>
            <BrowserRouter>
                <App state={store.getState()} store={store}/>
            </BrowserRouter>
            <GlobalStyled/>
        </div>
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)