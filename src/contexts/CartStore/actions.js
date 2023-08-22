import * as constants from './constants';
import * as gbConst from '~/global_constants';
// STORE actions
const resetStore = () => {
    return {
        type: constants.RESET_STORE,
    };
};
const saveStore = (payload) => {
    return {
        type: constants.RESET_STORE,
    };
};
const loadStore = (payload) => {
    return {
        type: constants.LOAD_STORE,
        payload,
    };
};

// ITEM actions
const addItem = (payload) => {
    return {
        type: constants.ADD_ITEM,
        payload,
    };
};
const removeItem = (payload) => {
    return {
        type: constants.REMOVE_ITEM,
        payload,
    };
};

export const itemActions = { addItem, removeItem };
export const storeActions = { resetStore, saveStore, loadStore };
