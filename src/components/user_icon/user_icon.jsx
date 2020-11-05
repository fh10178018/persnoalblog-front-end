import React,{Component} from  'react'
import connect from "react-redux/es/connect/connect";

class UserIcon extends  Component{
    render(){
        const {header}=this.props.user
        if(header){
            return(
                <img className="rounded mx-auto d-block userimg" src={require(`./default_img/${header}.png`)} />
            )
        }else {
            return(
                <img className="rounded mx-auto d-block userimg" src={require(`./default_img/default-01.png`)} />
            )
        }

    }
}
export default connect(
    (state)=>({user:state.toJS().user}), //state是一个article_list数组，插入一般数据
)(UserIcon)
