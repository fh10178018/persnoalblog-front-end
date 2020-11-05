import React,{Component} from  'react'
import './Modal.css'
import PropTypes from 'prop-types';

import ModalContent from './ModalContent/ModalContent';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader/ModalHeader';
export default class Modal extends  Component{
    state={
        modalStatus:this.props.modalStatus//modal打开状态，fade和show
    }
    propTypes={
        width:PropTypes.string, //定义模态框宽度，默认属性值为
        modalStatus:PropTypes.string.isRequired //定义是否出现
    }
    handleModalFade (){
        this.setState({modalStatus:'fade'})
    }
    handleModalShow (){
        this.setState({modalStatus:'show'})
    }
    render(){
        const {children}=this.props
        const {modalStatus}=this.state
        return(
            <div className={"modal-"+modalStatus}>
                <div className="modal" >
                    <button className="close-btn" ><i className="fa fa-close"/></button>
                    {children}
                </div>
                <div className="modal-mask"/>
            </div>
        )
    }
}
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;

