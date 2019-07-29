// 
import React from 'react';
//
import ReactDOM from 'react-dom'
// app navigation
import { BrowserRouter } from 'react-router-dom'

// styles 
import './styles/stylesheet.css'
// redux 
import { createStore } from 'redux'
// communicate to store
import rootReducer from './redux/reducer'
// bind react and redux
import { Provider } from 'react-redux'
// Main component bound inside App
// import Main from './Components/Main'
import App from './Components/App'
const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store} > <BrowserRouter> <App/> </BrowserRouter> </Provider>, document.getElementById('root'));