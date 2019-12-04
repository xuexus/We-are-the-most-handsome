import { handleActions } from "redux-actions"
import { homeApp } from "@/actions/week/weekActionTypes"
const defaultState = {
    mes: []
}

export default handleActions({
    [homeApp]: (state, action) => {
        let homeState = JSON.parse(JSON.stringify(state));
        homeState.mes = action.data;
        return homeState;
    }
}, defaultState)

