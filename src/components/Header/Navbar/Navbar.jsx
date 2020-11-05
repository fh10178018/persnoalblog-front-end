import './Navbar.css'
import React,{Component} from  'react'
import connect from "react-redux/es/connect/connect";
import {AntDropdownFade,AntDropdownShow} from "../../../reudx/actions";
import { NavLink } from "react-router-dom";


class Navbar extends  Component{
    state={
        show:false,
        title:'asdas'
    }
    showInfo=()=>{
        const {show}=this.state
        this.setState({show:!show})
    }
    render(){
        const {show,title} = this.state
        const {AntDropdownFade,AntDropdownShow,ant_dropdown_info}=this.props
        return(

                <div className="navbar">
                    {
                        ant_dropdown_info?
                            <button className="dropdown" onClick={AntDropdownFade}><i className='fa fa-close' /></button>
                            :
                            <button className="dropdown" onClick={AntDropdownShow}><i className='fa fa-bars' /></button>
                    }
                    <div className='navbar-content m-0' >
                        <ul className="nav m-0 p-0">
                            <li>
                                <NavLink to='/' activeClassName="active" exact={true}>主页</NavLink>
                            </li>
                            <li><NavLink to='/content' activeClassName="active">精选内容</NavLink></li>
                        </ul>
                    </div>
                </div>
        )
    }
}
export default connect(
    (state)=>({ant_dropdown_info:state.toJS().ant_dropdown}), //state是一个article_list数组，插入一般数据
    {AntDropdownFade,AntDropdownShow}
)(Navbar)