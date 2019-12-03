import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import classify from "./reducers/classify"
import smallMBook from "./reducers/smallMBook"
import goodList from "./reducers/goodList"

const reducers = combineReducers({
    classify,
    smallMBook,
    goodList
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))


export default store;