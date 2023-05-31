import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import navigationMenu from './navigationMenu';

const rootReducer = combineReducers({
    counter,
    todos,
    navigationMenu,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;