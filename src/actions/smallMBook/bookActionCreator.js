import {FiveAsyncActionApi} from "../../api/smallMBook"
import {FiveType,RecommendType,AppraisalType,VideoType} from "./bookActionTypes";
import {createAction} from "redux-actions"

export const FiveAsyncAction =()=>{
    var FiveAction = createAction(FiveType,(data)=>data)

    return async (dispatch)=>{
        let data = await FiveAsyncActionApi();
        dispatch(FiveAction(data.data.list[0].data))

    }
}

export const RecommendAction = (param,pet_type)=>{
    var FiveAction = createAction(RecommendType,(data)=>data)

    return async (dispatch)=>{
        let data = await FiveAsyncActionApi(param,pet_type)
        var list=[]
        data.data.list.map(item=>{
            if(item.type===1){
                list.push(item)
            }
        })
        dispatch(FiveAction(list))
    }
}

export const AppraisalAction = (param,pet_type)=>{
    var Appraisal = createAction(AppraisalType,(data)=>data)

    return async (dispatch)=>{
        let data = await FiveAsyncActionApi(param,pet_type)
        dispatch(Appraisal(data.data.list))
    }
}


export const VideoAction = (param,pet_type)=>{
    var Video = createAction(VideoType,(data)=>data)

    return async (dispatch)=>{
        let data = await FiveAsyncActionApi(param,pet_type)
        dispatch(Video(data.data.list))
    }
}