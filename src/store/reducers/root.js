import todoReducer from './todo';
import tobuyReducer from './tobuys';
import eventReducer from './events';
import learnReducer from './learn';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    todos: todoReducer,
    tobuys: tobuyReducer,
    events: eventReducer,
    learn: learnReducer
});

export default rootReducer;