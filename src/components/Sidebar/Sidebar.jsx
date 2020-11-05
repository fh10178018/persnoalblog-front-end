import React,{Component} from  'react'
import './Sidebar.css'
import Search from "../Header/Search/Search";
import Tooltip from "../Tooltip/Tooltip";
import { NavLink } from "react-router-dom";

export default class Sidebar extends  Component{
    state={
        inputType:''
    }
    showInfo=(type)=>{
        if (type==="show"){
            this.setState({inputType:'active'})
        }
        else {
            this.setState({inputType:''})
        }
    }
    render(){
        const {match}=this.props
        const {inputType}=this.state
        return(
            <div className="sidebar">
                <div className="sidebar-search">
                    <button data-input="show" onClick={this.showInfo.bind(this,'show')}>
                        <i className="fa fa-search" />
                    </button>
                    <div className={"search-input "+inputType}>
                        <Search/>
                        {/*需要通过 bind 方法来绑定参数，第一个参数指向 this,第二个参数开始才是事件函数接收到的参数*/}
                        <button data-input="fade" onClick={this.showInfo.bind(this,'fade')}><i className="fa fa-angle-left"/></button>
                    </div>
                </div>
                <ul className="p-0">
                    <li className="active"><NavLink to="/content/html5" activeClassName="active"><Tooltip content="html5相关内容" placement="right" Adaptation_type="pc"><i className="fa fa-html5" /></Tooltip></NavLink></li>
                    <li className=""><NavLink to="/content/css" activeClassName="active"><Tooltip content="css，js,html" placement="right" Adaptation_type="pc"><i className="fa fa-code" /></Tooltip></NavLink></li>
                    <li className=""><NavLink to="/content/html" activeClassName="active"><Tooltip content="css，js,html" placement="right" Adaptation_type="pc"><i className="fa fa-paint-brush" /></Tooltip></NavLink></li>
                </ul>
            </div>
        )
    }
}