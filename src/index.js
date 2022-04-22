import React from 'react';
import './index.css';
import store from "./redux/redux";
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext from "./StoreContext";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state);
});