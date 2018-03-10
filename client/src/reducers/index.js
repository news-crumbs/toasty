import { combineReducers } from 'redux';
import favorites from './favorites';

//Reducer stores all the info from multiple files in one place for use//
const rootReducer = combineReducers({
    favorites
});

export default rootReducer;