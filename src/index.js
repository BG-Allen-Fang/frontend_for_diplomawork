import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const vacancies = [1, 2, 3, 4, 5, 6];

ReactDOM.render(
    <React.StrictMode>
        <App vacancies={vacancies} />
    </React.StrictMode>,
    document.getElementById('root')
);

