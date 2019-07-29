// 
import React from 'react';
//
import ReactDOM from 'react-dom'
// app navigation
import { BrowserRouter } from 'react-router-dom'
//
import Main from './Components/Main'
// styles 
import './styles/stylesheet.css'
ReactDOM.render(<BrowserRouter> <Main/> </BrowserRouter>, document.getElementById('root'));