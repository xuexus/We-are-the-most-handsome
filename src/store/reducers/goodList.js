import {handleActions} from "redux-actions";
import {GoodList} from "../../actions/goodList/goodListActionTypes";

let defaultState = {
    goodList:[]
    
}

export default handleActions({
    [GoodList]:(state,action)=>{
        let GoodListDefault = JSON.parse(JSON.stringify(state))
        if(action.payload.page===1){
            GoodListDefault.goodList = action.payload.data
        }else{
            GoodListDefault.goodList = [...GoodListDefault.goodList,...action.payload.data]
        }
        return GoodListDefault
    }
},defaultState)