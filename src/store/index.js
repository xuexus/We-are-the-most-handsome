import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import classify from "./reducers/classify"
import smallMBook from "./reducers/smallMBook"
import goodList from "./reducers/goodList"
import details from "./reducers/details"
import brand from "./reducers/brand"
import home from "./reducers/home";
import register from "./reducers/register";
import login from "./reducers/login"
import quanbu from "./reducers/quanbu"

const reducers = combineReducers({
    classify,
    smallMBook,
    goodList,
    details,
    brand,
    home,
    register,
    login,
    quanbu,
    
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))


export default store;