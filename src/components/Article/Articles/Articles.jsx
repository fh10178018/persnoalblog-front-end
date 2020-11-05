import React,{Component} from  'react'
import './Articles.css'
import ArticlePagination from "../ArticlePagination/ArticlePagination";
import Footer from "../../Footer/Footer";
export default class Articles extends  Component{
    render(){
        const{match}=this.props

        return(
            <div className="articles-page">
                <div className="articles-box">

                    <div className="page-container">
                        <ArticlePagination/>
                        <ArticlePagination/>
                        <ArticlePagination/>
                    </div>
                    <button className="btn btn-previous p-0" onClick={this.previous}><i className="fa fa-chevron-left" /></button>
                    <button className="btn btn-next p-0" onClick={this.next}><i className="fa fa-chevron-right" /></button>
                </div>
                <Footer/>
            </div>
        )
    }
}