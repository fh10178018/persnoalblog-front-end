import React,{Component} from  'react'
import './ModalContent.css'
export default class ModalContent extends  Component{
    render(){
        const {children}=this.props
        return(
            <div className="modal-content">
                {children}
            </div>
        )
    }
}