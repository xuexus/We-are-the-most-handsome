import { handleActions } from "redux-actions"
import { quanbuApp } from "@/actions/week/weekActionTypes"
const defaultState = {
   data:[]
}

export default handleActions({
    [quanbuApp]: (state, action) => {
        let quanbuState = JSON.parse(JSON.stringify(state));
        quanbuState.data = action.payload;
        // console.log(quanbuState.data );
        return quanbuState;
    }
}, defaultState)
