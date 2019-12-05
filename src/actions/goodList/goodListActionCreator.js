import {createAction} from "redux-actions"
import {GoodList} from "./goodListActionTypes";
import {GoodListApi} from "@/api/goodList";

export const GoodListAsync = (cateid,desc,page,m)=>{
    let GoodListAction = createAction(GoodList,(data)=>data)

    return async (dispatch)=>{
        let data = await GoodListApi(cateid,desc,page,m)
        if(page===1){
            dispatch(GoodListAction({data:data.list,page:1}))
        }else{
            dispatch(GoodListAction({data:data.list,page:2}))
        }
    }    
}