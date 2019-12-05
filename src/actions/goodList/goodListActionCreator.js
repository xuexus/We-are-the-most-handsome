import {createAction} from "redux-actions"
import {GoodList} from "./goodListActionTypes";
import {GoodListApi} from "@/api/goodList";

export const GoodListAsync = (cateid,desc,m)=>{
    let GoodListAction = createAction(GoodList,(data)=>data)

    return async (dispatch)=>{
        let data = await GoodListApi(cateid,desc,m)
        dispatch(GoodListAction(data.list,m))
    }    
}