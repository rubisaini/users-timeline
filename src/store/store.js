/**
 * Created by intelligrape on 17/5/17.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import commonReducer from '../reducers/common.reducer';
import postReducer from '../reducers/post.reducer';
import thunk from 'redux-thunk'
import logger from '../middlewares/logger';

const reducers = combineReducers({
    common: commonReducer,
    post: postReducer
});

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(reducers, middlewares);

