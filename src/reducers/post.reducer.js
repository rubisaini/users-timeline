/**
 * Created by intelligrape on 17/5/17.
 */
import Constant from '../constants/action.constant';

export default function postReducer(store = {posts : []}, action) {
    switch (action.type) {
        case Constant.GET_POST : return {...store, loader:true}
        case Constant.UPDATE_POST: return {...store, loader: false}
        default: return store;
    }
}