import React,{Component} from  'react'
import MyPhoto from './profile-img.jpg'
import './Profile.css'
import Tooltip from "../../Tooltip/Tooltip";

export default class Profile extends  Component{
    render(){
        return(
        <div className="profile">
            <div className="profile-image">
                <h className="who">WHO?</h>
                <div className="border-change">
                    <img className="img-responsive" src={MyPhoto}/>
                    <div className="name-tag">
                        <p>方晗</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}