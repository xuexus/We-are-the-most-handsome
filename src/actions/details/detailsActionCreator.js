import {createAction} from "redux-actions";
import {DetailsType} from "./detailsActionTypes";
import {DetailsAsyncApi} from "@/api/details"


export const DetailsAsync = (gid)=>{
    let Details = createAction(DetailsType,(data)=>data)

    return async (dispatch)=>{
        let data = await DetailsAsyncApi(gid)
        dispatch(Details(data.datas))
    }
}


