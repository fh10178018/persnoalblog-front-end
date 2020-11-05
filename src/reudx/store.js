/*
redux最核心的管理对象模块
它管理着state和reducer
*/
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //异步函数
import {composeWithDevTools} from 'redux-devtools-extension' //工具函数

import reducers from "./reducers";

//向外暴露的store对象
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))