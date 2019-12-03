import {createAction} from "redux-actions"
import {GoodList} from "./goodListActionTypes";
import {GoodListApi} from "@/api/goodList";

export const GoodListAsync = (cateid)=>{
    let GoodListAction = createAction(GoodList,(data)=>data)

    return async (dispatch)=>{
        let data = await GoodListApi(cateid)
        dispatch(GoodListAction(data.list))
    }    
}