/*

包含n个action creator
异步action
同步action
*/
import {ANT_DROPDOWN_FADE,ANT_DROPDOWN_SHOW} from './action-types'



//授权成功的同步action
export const AntDropdownFade=(data)=>({type:ANT_DROPDOWN_FADE,data:data})
export const AntDropdownShow=(data)=>({type:ANT_DROPDOWN_SHOW,data:data})
