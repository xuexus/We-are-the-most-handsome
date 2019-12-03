import {handleActions} from "redux-actions";
import {BrandActionType} from "@/actions/brand/brandActionTypes"

const defaultState = {
    data:[]
}

export default handleActions({
    [BrandActionType]:(state,action)=>{
        let defaultBrand = JSON.parse(JSON.stringify(state))
        defaultBrand.data=action.payload
        return defaultBrand
    }
},defaultState)



