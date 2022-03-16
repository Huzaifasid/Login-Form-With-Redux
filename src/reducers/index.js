import { combineReducers } from "redux";
import {loginReducer, logoutReducer} from "./loginReducer";

const rootReducers = combineReducers({
    loginReducer,
    logoutReducer
})
export default rootReducers