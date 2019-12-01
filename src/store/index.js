import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import classify from "./reducers/classify"

const reducers = combineReducers({
    classify
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))


export default store;