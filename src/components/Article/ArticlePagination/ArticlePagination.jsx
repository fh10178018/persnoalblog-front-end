import React,{Component} from  'react'
import ArticleBox from "../ArticleBox/ArticleBox";
import './ArticlePagination.css'
export default class ArticlePagination extends  Component{
    render(){
        return(
            <div className="grid-container" id="0">
                <div className="grid-item"><ArticleBox/></div>
                <div className="grid-item"><ArticleBox/></div>
                <div className="grid-item"><ArticleBox/></div>
                <div className="grid-item"><ArticleBox/></div>
            </div>
        )
    }
}