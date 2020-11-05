/*
路由生成器
*/
import { Switch, Route, Redirect } from "react-router-dom";
import React from 'react';
function generateRoute(value,key) {
    if (!value.redirect) {
        if (value.children) {
            return (
                <Route path={value.path} key={key} children={<value.component routes={value.children}/>}/>
            )
        }
        return <Route path={value.path} key={key} exact={value.exact} children={<value.component/>}/>
    }
    return  <Redirect  key={key} from={value.path} to={value.redirect}/>
}
export default generateRoute
