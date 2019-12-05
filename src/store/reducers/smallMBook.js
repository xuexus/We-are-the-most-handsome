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
        var storage = JSON.parse(localStorage.getItem("Recommend"))
        if(!storage){
            storage=[]
        }
        for(var n=0;n<storage.length;n++){
            for(var i=0;i<RecommendTypeDefault.list.length;i++){
                if(storage[n].id===RecommendTypeDefault.list[i].data.id){
                    RecommendTypeDefault.list[i].flag=true
                }else{
                    RecommendTypeDefault.list[i].flag=false
                }
            }
        }
        



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