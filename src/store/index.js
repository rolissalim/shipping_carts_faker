import { createStore, combineReducers } from 'redux';
import { uiSlice } from './reducers/ui';

const reducers = combineReducers({
    ui: uiSlice.reducer,
});

export default createStore(reducers);
