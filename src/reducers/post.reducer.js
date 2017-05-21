/**
 * Created by intelligrape on 17/5/17.
 */
import {ADD_POST, GET_POST, FILTER_USER, DELETE_POST, DELETE_POST_SUCCESS, UPDATE_POST, UPDATE_POST_SUCCESS} from '../constants/action.constant';

export default function postReducer(store = {posts : [], filterId: null, updatedId: null}, action) {
    switch (action.type) {
        case GET_POST :
            return {...store, loader:true};
        case ADD_POST:
            store.posts.push(action.user);
            return {...store, filterId: null};
        case FILTER_USER:
            return {...store, filterId:action.email};
        case UPDATE_POST:
            return {...store, updatedId: action.updatedId};
        case UPDATE_POST_SUCCESS:
            store.posts[store.updatedId].comment = action.data.comment;
            return {...store, updatedId: null};
        case DELETE_POST:
            store.posts.splice(action.deletedId, 1);
            return {...store};
        default:
            return store;
    }
}