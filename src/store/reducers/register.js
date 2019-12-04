import { handleActions } from "redux-actions"
import { registerApp } from "@/actions/week/weekActionTypes"
const defaultState = {
   date:[]
}

export default handleActions({
    [registerApp]: (state, action) => {
        let registerState = JSON.parse(JSON.stringify(state));
        registerState.date = action.data;
        console.log(registerState.date );
        return registerState;
    }
}, defaultState)

