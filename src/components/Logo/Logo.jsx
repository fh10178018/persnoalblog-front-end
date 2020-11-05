import React,{Component} from  'react'
import logo_img from './LOGO.jpg'
export default class Logo extends  Component{
    render(){
        return(
            <div>
                <img style={{width:'100%'}} src={logo_img}/>
            </div>
        )
    }
}