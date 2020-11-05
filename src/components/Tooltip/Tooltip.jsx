import React,{Component} from  'react'
import './Tooltip.css'
import PropTypes from 'prop-types';
export default class Tooltip extends  Component{

    propTypes={
        content:PropTypes.string.isRequired, //内容
        placement:PropTypes.string.isRequired, //方向
        Adaptation_type:PropTypes.string //tooltip适配类型，mb ,pc,不填默认都适应并存在

    }
    render(){
        const {children,content,Adaptation_type,placement}=this.props
        return(
            <div className="tooltip" data-Adaptation={Adaptation_type} data-content={content} data-placement={placement}>
                {children}
            </div>
        )
    }
}
