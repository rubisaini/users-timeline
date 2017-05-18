/**
 * Created by intelligrape on 17/5/17.
 */
import Constant from '../constants/action.constant';

export default  function controlReducer(store = {loader : false}, action) {
    switch (action.type) {
        case Constant.LOADING : return {...store, loader:true}
        case Constant.LOADING: return {...store, loader: false}
        default: return store;
    }
}