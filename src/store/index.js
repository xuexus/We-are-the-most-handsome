<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import home from "./reducers/home";
import register from "./reducers/register";
import login from "./reducers/login"
const reducers = combineReducers({
    home,
    register,
    login
})




const store = createStore(reducers, applyMiddleware(reduxThunk));
=======
import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import classify from "./reducers/classify"
import smallMBook from "./reducers/smallMBook"
import goodList from "./reducers/goodList"
import details from "./reducers/details"
import brand from "./reducers/brand"


const reducers = combineReducers({
    classify,
    smallMBook,
    goodList,
    details,
    brand
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))
>>>>>>> d484ee9a5a8c065a0babab07fb838b0a27c0caa7


export default store;