//该dropdown不在任何组件内，罗列于组件之外
import React,{Component} from  'react'
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import './Dropdown.css'
import {AntDropdownFade} from "../../reudx/actions";

class AntDropdown extends  Component{
    propTypes={
        placement:PropTypes.string.isRequired, //方向
        height:PropTypes.string.isRequired, //下拉菜单高度
        Adaptation_type:PropTypes.string //tooltip适配类型，mb ,pc,不填默认都适应并存在

    }
    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll)
    }
    bindHandleScroll=(event)=>{
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if(scrollTop>60&&this.props.ant_dropdown_info){
            //当下拉超过60px，和下拉按钮选中时，自动收起
            this.props.AntDropdownFade()
        }
    }
    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount(){
        window.removeEventListener('scroll', this.bindHandleScroll);
    }
    render(){
        const {placement,children,Adaptation_type,height,ant_dropdown_info}=this.props
        return(
            <div className="ant-dropdown" style={{height:ant_dropdown_info?height:0}} data-placement={placement} data-Adaptation={Adaptation_type}>
                {children}
            </div>
        )
    }
}
export default connect(
    (state)=>({ant_dropdown_info:state.toJS().ant_dropdown}),//state是一个article_list数组，插入一般数据
   {AntDropdownFade}
)(AntDropdown)
