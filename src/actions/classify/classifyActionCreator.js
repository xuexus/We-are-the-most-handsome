import {classifyLeftData,classifyLeftList,classifyRigh} from "./classifyActionTypes";
import {classifyLeftApi,classifyLeftListApi,classifyLeftListTwoApi,classifyRightApi} from "@/api/classify"

export const classifyLeftAsyncAction = ()=>{
    let classifyLeftAction = (data)=>({
        type:classifyLeftData,
        data
    })
    return async (dispatch)=>{
        let data = await classifyLeftApi()
        dispatch(classifyLeftAction(data))
    }    
}

export const classifyLeftListAsyncAction = (cateid)=>{
    let classifyLeftListAction = (data)=>({
        type:classifyLeftList,
        data
    })

    return async (dispatch)=>{
        if(cateid==="88888888"){
            let data = await classifyLeftListTwoApi(cateid)
            dispatch(classifyLeftListAction(data))
        }else{
            let data = await classifyLeftListApi(cateid)
            dispatch(classifyLeftListAction(data))
        }
    }
}


export const classifyRightAsyncAction = ()=>{
    let classifyRightAction = (data)=>({
        type:classifyRigh,
        data
    })

    return async (dispatch)=>{
        let data = await classifyRightApi()
        dispatch(classifyRightAction(data.brand))
    }
}