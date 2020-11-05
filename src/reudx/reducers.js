/*
包含多个reducer函数：根据老的state和指定的action返回一个新的state
不能直接修改state，redux会比较新旧state的值，直接修改state会导致store内部的也发生改变，那么新旧state也就没有发生变化。页面就不会重新渲染。
组件内对数组元素进行修改后数据有变化但是页面没重新渲染,这是因为组件没能够识别数组的变化，所以页面没有重新渲染
对于简单情况，redux 的 reducer 看起来并不是很复杂，但是在处理深层次数据结构，redux 就显得很无力，因此我们采用immutable.js
模型对象采用List([Map({})]),添加删除主要是List操作，内容属性值变化式Map操作
注意：在JS中对象的赋值是默认引用赋值的，如果改变了赋值对象原对象也会跟着改变，如果想要复制赋值，那么就需要重新分配对象：
*/
import {ANT_DROPDOWN_SHOW,ANT_DROPDOWN_FADE} from  './action-types'
import {combineReducers} from 'redux-immutable'
import {Map,List} from 'immutable'

const dropdownInfo=false



//蚂蚁下拉菜单操作
export function ant_dropdown(state=dropdownInfo,action) {
    switch (action.type) {
        case ANT_DROPDOWN_SHOW: //data是msg
            return true
        case ANT_DROPDOWN_FADE://data是user
            return false
        default:
            return state
    }
}
export default combineReducers({
    ant_dropdown
})


