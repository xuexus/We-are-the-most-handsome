import {createAction} from "redux-actions";
import {BrandActionType} from "./brandActionTypes";
import {BrandActionApi} from "@/api/brand";

export const BrandActionAsync = (brandid)=>{
    const BrandAction = createAction(BrandActionType,(data)=>data)

    return async (dispatch)=>{
        let data = await BrandActionApi(brandid)

        dispatch(BrandAction(data))
    }
}