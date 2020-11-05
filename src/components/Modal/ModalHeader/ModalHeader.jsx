import React,{Component} from  'react'
import './ModalHeader.css'
export default class ModalHeader extends  Component{
    render(){
        const {children}=this.props
        return(
            <div className="modal-header">
                {children}
            </div>
        )
    }
}