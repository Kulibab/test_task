import {createStore, combineReducers} from 'redux';
import gradientsReducer from './gradients-reducer'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    gradientsPage: gradientsReducer,
    form: formReducer
})

let store = createStore(reducers);

window.store = store;

export default store;