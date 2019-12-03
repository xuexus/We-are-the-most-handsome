import {handleActions} from "redux-actions";
import {FiveType,RecommendType,AppraisalType,VideoType} from "../../actions/smallMBook/bookActionTypes";

let defaultState = {
    five:[],
    list:[],
    appraisal:[],
    video:[]
}

export default handleActions({
    [FiveType]:(state,action)=>{
        let FiveTypeDefault = JSON.parse(JSON.stringify(state))
        FiveTypeDefault.five = action.payload
        return FiveTypeDefault
    },
    [RecommendType]:(state,action)=>{
        let RecommendTypeDefault = JSON.parse(JSON.stringify(state))
        RecommendTypeDefault.list = action.payload
        return RecommendTypeDefault
    },
    [AppraisalType]:(state,action)=>{
        let AppraisalTypeDefault = JSON.parse(JSON.stringify(state))
        AppraisalTypeDefault.appraisal = action.payload
        return AppraisalTypeDefault
    },
    [VideoType]:(state,action)=>{
        let VideoTypeDefault = JSON.parse(JSON.stringify(state))
        VideoTypeDefault.video = action.payload
        return VideoTypeDefault
    }
},defaultState)