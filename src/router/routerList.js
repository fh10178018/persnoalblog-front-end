/*
封装的路由路径文件
*/

import Home from "../views/Home/Home";
import Content from "../views/Content/Content";
import Modal from "../components/Modal/Modal";
import Article from "../views/Article/Article";
import Articles from "../components/Article/Articles/Articles";
import Details from "../views/Details/Details";


let routerList = [
    {
        path:'/content',//博主撰写内容路径,category为分类名称变量
        component:Content,
        children:[
            {
                path:'/content/:category',//内容分类内容页面，category为分类名称
                component:Articles
            },
            {
                path:'/content',//什么都没有时重定向
                redirect:'/content/html5'  //重定向路径
            }
        ]
    },
    {
        path:'/article/:id',//内容详情页面路径
        component:Article     //打开相应文章内容页面
    },

    {
        path:'/',//首页路径
        component:Home,
        exact:true //严格模式
    }
]
export default routerList;