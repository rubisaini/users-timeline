/**
 * Created by intelligrape on 17/5/17.
 */
import {LOADING, LOADED} from '../constants/action.constant';

export const loading = () => {
    return {type: LOADING}
};

export const loaded = () => {
    return {type: LOADED}
};