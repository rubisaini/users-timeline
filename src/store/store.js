/**
 * Created by intelligrape on 17/5/17.
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from '../reducers';
import middlewares from '../middlewares';

const store = createStore(combineReducers(reducers), applyMiddleware(...middlewares));
store.subscribe(()=> {
    console.log('Store updated: ', store.getState());
})
export default store;

