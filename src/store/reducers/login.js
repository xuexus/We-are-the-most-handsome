import { handleActions } from "redux-actions"
import { loginApp } from "@/actions/week/weekActionTypes"
const defaultState = {
   date:[]
}

export default handleActions({
    [loginApp]: (state, action) => {
        let loginState = JSON.parse(JSON.stringify(state));
        loginState.date = action.data;
        console.log(loginState.date );
        return loginState;
    }
}, defaultState)
