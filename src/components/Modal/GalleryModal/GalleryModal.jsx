import React,{Component} from  'react'
import './GalleryModal.css'
import PropTypes from 'prop-types';
import {useHistory } from "react-router-dom";
import ModalContent from '../ModalContent/ModalContent';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalHeader from '../ModalHeader/ModalHeader';
function GalleryModal (props){
    const {children}=props
    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
    };
    return(
        <div>
            <div className="modal" >
                <button className="close-btn" onClick={back}><i className="fa fa-close"/></button>
                {children}
            </div>
            <div className="modal-mask" onClick={back}/>
        </div>

    )
}
GalleryModal.Content = ModalContent;
GalleryModal.Header = ModalHeader;
GalleryModal.Footer = ModalFooter;

export default GalleryModal

