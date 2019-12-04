import {classifyLeftData,classifyLeftList,classifyRigh} from "./classifyActionTypes";
import {classifyLeftApi,classifyLeftListApi,classifyLeftListTwoApi,classifyRightApi} from "@/api/classify";
import {createAction} from "redux-actions"

export const classifyLeftAsyncAction = ()=>{
    let classifyLeftAction = createAction(classifyLeftData,(data)=>data)

    return async (dispatch)=>{
        let data = await classifyLeftApi()
        dispatch(classifyLeftAction(data))
        localStorage.setItem("classifyLeft",JSON.stringify(data.categorys))
    }    
}

export const classifyLeftListAsyncAction = (cateid)=>{
    let classifyLeftListAction = createAction(classifyLeftList,(data)=>data)

    return async (dispatch)=>{
        if(cateid==="88888888"){
            let data = await classifyLeftListTwoApi(cateid)
            dispatch(classifyLeftListAction(data))
            // localStorage.setItem("classifyLeftList",JSON.stringify(data.cate_list))
        }else{
            let data = await classifyLeftListApi(cateid)
            dispatch(classifyLeftListAction(data))
            localStorage.setItem("classifyLeftList",JSON.stringify(data.cate_list))
        }
    }
}


export const classifyRightAsyncAction = ()=>{
    let classifyRightAction = createAction(classifyRigh,(data)=>data)

    return async (dispatch)=>{
        let data = await classifyRightApi()
        dispatch(classifyRightAction(data.brand))
        localStorage.setItem("classifyRight",JSON.stringify(data.brand))
    }
}