/**
 * Created by intelligrape on 17/5/17.
 */

import {ADD_POST, FILTER_USER, DELETE_POST, UPDATE_POST, UPDATE_POST_SUCCESS} from '../constants/action.constant';

export function addPost(user) {
    return {type: ADD_POST, user}
}


export function filterUser(email) {
    return {type: FILTER_USER, email}
}

export function deletePost(deletedId) {
    return {type: DELETE_POST, deletedId}
}

export function updatePost(updatedId) {
    return {type: UPDATE_POST, updatedId}
}

export function updatePostSuccess(data) {
    console.log('>>>>>>>>>', data);
    return {type: UPDATE_POST_SUCCESS, data}
}
