import { combineReducers } from "redux";
import changeCounter from './changeCounter'; 

const rootReduce = combineReducers({
    counter: changeCounter,
})

export default rootReduce;