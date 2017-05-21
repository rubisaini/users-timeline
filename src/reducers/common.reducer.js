/**
 * Created by intelligrape on 17/5/17.
 */
import {LOADED, LOADING} from '../constants/action.constant';

export default  function controlReducer(store = {loader : false}, action) {
    switch (action.type) {
        case LOADING : return {...store, loader:true}
        case LOADED: return {...store, loader: false}
        default: return store;
    }
}