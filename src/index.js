import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MyContext } from './context/ApplevelContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <
    MyContext >
    <
    App / >
    <
    /MyContext> < /
    React.StrictMode >
);