import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from './UserContext'
import {v4 as uuidv4} from 'uuid';
import './jokes.json'

const userID = "95e32118-c1e9-4996-b5e0-c13c5989494d"
const jokes = require('./jokes.json')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext value={{id:userID, name:'bits', jokes:jokes, jokeID:null, dataReceived: false}}><App /></UserContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
