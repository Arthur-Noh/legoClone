import { combineReducers } from 'redux';
import addSubReducer from './addsub';
import countReducer from './countReducer';

const rootReducer = combineReducers({
    value: addSubReducer,
    count: countReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;