import React from  'react'
import './Details.css'
import {useHistory,useParams } from "react-router-dom";
import GalleryModal from "../../components/Modal/GalleryModal/GalleryModal";

export default function Details (){
    let history = useHistory();
    let {id}=useParams()
    return(
    <div>
        <GalleryModal>
            <GalleryModal.Header>
                    <h2>{id}</h2>
            </GalleryModal.Header>
            <GalleryModal.Content>aadsdassd</GalleryModal.Content>
            <GalleryModal.Footer>asdasdasdasasd3213d</GalleryModal.Footer>
        </GalleryModal>
    </div>
    )

}