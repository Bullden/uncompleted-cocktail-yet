import {combineReducers} from 'redux';
import { drinksReducer } from './reducer/Drinks';

const rootReducer = combineReducers({
    drinks: drinksReducer
});

export default rootReducer;