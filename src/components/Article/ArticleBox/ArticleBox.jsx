//用来展示文章的盒子链接
import React, { useState } from  'react'
import { NavLink,useLocation } from "react-router-dom";
import Default from './default.jpg'
import './ArticleBox.css'
import ImageLoading from "../../Loading/ImageLoading/ImageLoading";



export default function ArticleBox(){
    const [imageStatus, setimageStatus] = useState("loading");
    let location=useLocation()
    function loaded(imageStatus) {
        setimageStatus(imageStatus)
    }
    return(
        <div className="article-box">
            <div className="img-show">
                <ImageLoading msg={loaded} image_url="https://assets.codepen.io/3879263/internal/screenshots/pens/JjGVbjY.custom.png?fit=cover&format=auto&ha=false&height=360&quality=75&v=2&version=1596457569&width=640" scale="56.25%"/>
                {/*<img src={Default}/>*/}
                <NavLink to={{
                    pathname: `/details/1`,
                    // This is the trick! This link sets
                    // the `background` in location state.
                    state: { background: location }
                }} className="btn"><i className="fa fa-arrows-alt"/></NavLink>

            </div>
            <div className="header">
                <h2 className={"title text"+imageStatus}>asd</h2>
                <div className="stats">
                    <button><i className="fa fa-eye"/><span>231</span></button>
                </div>
            </div>
        </div>
    )

}