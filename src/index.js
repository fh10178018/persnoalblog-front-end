/*
react 路由render属性:能够更方便地给组件传递额外的属性
* */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";


import store from './reudx/store'
import App from "./views/app";


ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
), document.getElementById('root'));


