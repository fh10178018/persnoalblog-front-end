/*
react 路由render属性:能够更方便地给组件传递额外的属性
* */
import React, {Component} from 'react'

import './index.css';
import {Switch, Route, useLocation, withRouter} from "react-router-dom";
import generateRoute from '../router/generateRoute'
import routerList from '../router/routerList';
import Header from "../components/Header/Header";
import ScrollUp from "../components/ScrollUp/ScrollUp";
import Details from "./Details/Details";
import Content from "./Content/Content";
import Home from "./Home/Home";


function App() {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;
  console.log(location)
  console.log(background)

  return (
      <div className="box">
        <Header/>
        <Switch location={background || location}>

          {
            routerList.map((item, key) => {
              return generateRoute(item, key)
            })
          }
        </Switch>
        {background && <Route path="/details/:id" children={<Details/>}/>}
        <ScrollUp/>
      </div>
  )

}

export default withRouter(App)
