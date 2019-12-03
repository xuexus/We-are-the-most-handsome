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


export default store;