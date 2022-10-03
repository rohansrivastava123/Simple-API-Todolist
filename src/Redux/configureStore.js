//to take all ducks u have to any middleware u want to apply redux 
import { combineReducers , createStore } from 'redux';
import counterReducer from './ducks/counter'


const reducer = combineReducers({
    counter:counterReducer//all ducks come here
})
const store =createStore(reducer);
export default store;