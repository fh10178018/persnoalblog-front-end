import React,{Component} from  'react'
import './Header.css'
import {Link, NavLink} from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Logo from "../Logo/Logo";
import Search from "./Search/Search";
import AntDropdown from "../AntDropdown/Dropdown";


export default class Header extends  Component{
    //在componentDidMount，进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    state={
        headerType:"top-show"
    }
    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll)
    }
    bindHandleScroll=(event)=>{
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if(scrollTop>60){
            //组件出现第一次时，当滚动大于100px时，组件才出现，
            this.setState({
                headerType:'top-fade'
            })
        }else{
            this.setState({
                headerType:'top-show'
            })
        }
    }
    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount(){
        window.removeEventListener('scroll', this.bindHandleScroll);
    }
    showInfo=()=>{
        const {show}=this.state
        this.setState({show:!show})
    }
    render(){

        const {headerType}=this.state
        return(
            <div className="header-box">
                <header>
                    <div className={"header-top " + (headerType==='top-fade'?'transformY':'')}>
                        <Profile/>
                        <div className="input-search">
                            <Search />
                        </div>
                        <div className="description">一个前端开发工程师</div>
                        <Navbar showInfo={this.showInfo}/>
                        <div className="recent-post">
                            <h3>
                                <span>最近的帖子</span>
                            </h3>
                            <ul className="p-0">
                                <li><a className="active"><i className="fa fa-clock-o"/> asdasddas</a></li>
                                <li><a> <i className="fa fa-clock-o"/> asdasddas</a></li>
                                <li><a><i className="fa fa-clock-o"/> asdasddas</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"header-bottom " + (headerType==='top-fade'?'transformY':'')} >
                        <h2>asdas</h2>
                    </div>
                </header>
                <AntDropdown placement="top" height="121px" Adaptation_type="mb">
                    <div className='navbar-content m-0' >
                        <ul className="nav m-0 p-0">
                            <li>
                                <a href="#" className="active">主页</a>
                            </li>
                            <li><a href="#">精选内容</a></li>
                        </ul>
                    </div>
                </AntDropdown>
            </div>

        )
    }
}
