import React,{Component} from  'react'

import './Content.css'
import { BrowserRouter as Router,Switch, Route,Redirect } from "react-router-dom";
import Articles from "../../components/Article/Articles/Articles";
import Sidebar from "../../components/Sidebar/Sidebar";
import Details from "../Details/Details";
import generateRoute from "../../router/generateRoute";


export default class Content extends  Component{
    state={
        //记录当前所在页数
        now_page_id:0
    }
    next=()=>{
        const {now_page_id}=this.state
        //判断不为最后一页
        if (now_page_id!==0){
        this.setState({now_page_id:now_page_id+1})
        }
    }
    previous=()=>{
        const {now_page_id}=this.state
        //判断不为第一页
        if (now_page_id!==0){
            this.setState({now_page_id:now_page_id-1})
        }
    }
    render(){
        const {routes}=this.props
        const {now_page_id}=this.state
        return(
            <div className="content">
                <Sidebar/>
                <Switch>
                    {
                        routes.map((item,key)=>{
                            return generateRoute(item,key)
                        })
                    }
                </Switch>
            </div>
        )
    }
}