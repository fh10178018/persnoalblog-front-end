import React,{Component} from  'react'
import './ModalFooter.css'
export default class ModalFooter extends  Component{
    render(){
        const {children}=this.props
        return(
            <div className="modal-footer">
                {children}
            </div>
        )
    }
}