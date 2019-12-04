import {handleActions} from "redux-actions";
import {classifyLeftData,classifyLeftList,classifyRigh} from "@/actions/classify/classifyActionTypes"

const defaultState = {
    data:[],
    list:[],
    rightData:[]
}

export default handleActions({
    [classifyLeftData]:(state,action)=>{
        let defaultClassify = JSON.parse(JSON.stringify(state))
        defaultClassify.data=action.payload.categorys
        return defaultClassify
    },
    [classifyLeftList]:(state,action)=>{
        let defaultClassifyLeftList = JSON.parse(JSON.stringify(state))
        defaultClassifyLeftList.list = action.payload.cate_list
        return defaultClassifyLeftList
    },
    [classifyRigh]:(state,action)=>{
        let defaultClassifyRight = JSON.parse(JSON.stringify(state));
        defaultClassifyRight.rightData = action.payload
        return defaultClassifyRight
    }
},defaultState)



