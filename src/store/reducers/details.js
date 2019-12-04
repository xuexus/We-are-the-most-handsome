import {handleActions} from "redux-actions"
import {DetailsType} from "@/actions/details/detailsActionTypes";
const defaultState = {
    deta:[]
}

export default handleActions({
    [DetailsType]:(state,action)=>{
        let DetailsTypeState = JSON.parse(JSON.stringify(state))
        DetailsTypeState.deta = action.payload
        return DetailsTypeState
    }
},defaultState)

