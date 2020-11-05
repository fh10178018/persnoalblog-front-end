import React,{Component} from  'react'
import PropTypes from 'prop-types';
import './ImageLoading.css'
export default class ImageLoading extends  Component{
    state={
        imageStatus: 'loading'//加载成功标识
    }
    propTypes={
        image_url:PropTypes.string.isRequired,//图片地址
        scale:PropTypes.string.isRequired,//图片高/宽比，为百分制
        msg:PropTypes.function //子元素向父元素传递loaded信息
    }
    handleImageLoaded=()=>{
        this.setState({
            imageStatus:"loaded"
        })
        if(this.props.msg){
            this.props.msg("loaded")
        }
    }
    render(){
        const {imageStatus}=this.state
        const {scale,image_url}=this.props
        return(
            <div className="image-loading-box" style={{paddingBottom:scale}}>
                <img className="image-loading" src={image_url}  data-status={imageStatus} style={{paddingBottom:imageStatus==="loaded"?0:scale}} onLoad={this.handleImageLoaded} />
            </div>
        )
    }
}