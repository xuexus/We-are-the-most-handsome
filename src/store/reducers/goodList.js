import {handleActions} from "redux-actions";
import {GoodList} from "../../actions/goodList/goodListActionTypes";

let defaultState = {
    goodList:[]
    
}

export default handleActions({
    [GoodList]:(state,action)=>{
        let GoodListDefault = JSON.parse(JSON.stringify(state))
        GoodListDefault.goodList = action.payload
        return GoodListDefault
    }
},defaultState)