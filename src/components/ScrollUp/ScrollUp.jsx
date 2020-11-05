import React,{Component} from  'react'
import './ScrollUp.css'
export default class ScrollUp extends  Component{
    //在componentDidMount，进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    state={
        positionType:'down-out',//滚动动画判定事件
        display:'none'//组件是否出现
    }
    //componentDidMount渲染后第一次调用
    //element.addEventListener(event, function, useCapture)添加绑定事件
    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll)
    }
    bindHandleScroll=(event)=>{
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if(scrollTop>100){
            //组件出现第一次时，当滚动大于100px时，组件才出现，
            this.setState({
                display:'block',
                positionType:'down-in'
            })
        }else{
            this.setState({
                positionType:'down-out'
            })
        }
    }
    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount(){
        window.removeEventListener('scroll', this.bindHandleScroll);
    }
    //定时循环回到顶部,回到顶部,减的值越来越少，给人一种由快到慢的感觉
    backTop=()=>{
        const scrollToptimer = setInterval(function () {
            var top = document.documentElement.scrollTop;
            var speed = top / 4;
            if (document.documentElement.scrollTop!==0) {
                document.documentElement.scrollTop -= speed;
            }else {
                document.documentElement.scrollTop -= speed;
            }
            if (top === 0) {
                clearInterval(scrollToptimer);
            }
        }, 30);
    }
    render(){
        const {positionType,display}=this.state
        return(
            <a  className={'scrollup '+positionType}  style={{display}} onClick={this.backTop}>
                <i className="fa fa-angle-up"/>
            </a>
        )
    }
}