// Import
import { SAVE_STORE, LOAD_STORE, RESET_STORE } from './constants';
import { ADD_ITEM, REMOVE_ITEM } from './constants';
import { INVALID_ACTION } from './constants';
const initStore = {
    totalSalePrice: 0,
    totalOriginalPrice: 0,
    totalItem: 0,
    store: [],
};
const reducer = (state, action) => {
    let newState;
    let item;
    let existItem;
    let quantity;
    switch (action.type) {
        case INVALID_ACTION:
            return state;
        //
        case RESET_STORE:
            newState = {
                ...initStore,
                store: {},
            };
            break;
        case SAVE_STORE:
            newState = state;
            localStorage.setItem(SAVE_STORE, JSON.stringify(state));
            break;
        case LOAD_STORE:
            const storeJson = action.payload || state;
            newState = storeJson;
            break;
        //---
        case ADD_ITEM:
            item = action.payload;
            existItem = state.store[item._id];
            quantity = item.quantity;
            if (existItem) item.quantity += existItem.quantity;
            state.store[item._id] = item;
            newState = {
                ...state,
                totalItem: !existItem ? state.totalItem + 1 : state.totalItem,
                totalSalePrice:
                    state.totalSalePrice + quantity * item.prices.salePrice,
                totalOriginalPrice:
                    state.totalOriginalPrice +
                    quantity *
                        (item.prices.isDiscount
                            ? item.prices.originalPrice
                            : item.prices.salePrice),
            };
            break;
        case REMOVE_ITEM:
            item = action.payload;
            existItem = state.store[item._id];
            quantity = item.quantity;
            if (!existItem) {
                console.error(`Cannot find item ID=${item._id} in cart`);
                newState = state;
                break;
            }
            if (!quantity || quantity <= 0 || quantity > existItem.quantity) {
                console.error(`Invalid quantity value ${quantity}!`);
                newState = state;
                break;
            }
            existItem.quantity -= item.quantity;
            newState = {
                ...state,
                totalSalePrice:
                    state.totalSalePrice -
                    quantity * existItem.prices.salePrice,
                totalOriginalPrice:
                    state.totalOriginalPrice -
                    quantity *
                        (existItem.prices.isDiscount
                            ? existItem.prices.originalPrice
                            : existItem.prices.salePrice),
            };
            if (existItem.quantity === 0) {
                delete newState.store[item._id];
                newState = {
                    ...newState,
                    totalItem: state.totalItem - 1,
                };
                break;
            }
            break;
        default:
            throw new Error('Invalid action!');
    }
    console.log(newState);
    return newState;
};
// Export
export default reducer;
export { initStore };
