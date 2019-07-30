// 
import React from 'react';
//
import ReactDOM from 'react-dom'
// app navigation
import { BrowserRouter } from 'react-router-dom'

// styles 
import './styles/stylesheet.css'
// redux | applyMiddleware for Thunk
import { createStore, applyMiddleware } from 'redux'
// communicate to store
import rootReducer from './redux/reducer'
// bind react and redux
import { Provider } from 'react-redux'
// Main component bound inside App
// import Main from './Components/Main'
import App from './Components/App'
// cannot return methods from actionsCreators
// this is what thunk does
import thunk from 'redux-thunk'
//
import {database} from './database/config'
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDOM.render(<Provider store={store} > <BrowserRouter> <App/> </BrowserRouter> </Provider>, document.getElementById('root'));