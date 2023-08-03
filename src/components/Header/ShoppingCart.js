import { useReducer, useRef } from 'react';
import clsx from 'clsx';

import Wrapper from '../Wrapper';
import { ShoppingPopper } from '../Popper';
import FontIcon from '../Common/FontIcon';
// item format
/* const item = {
    itemName: '',
    itemImageUrl: '',
    itemPageUrl: '',
    quantity: 0,
    prices: {
        isDiscount: false,
        originalPrice: 0,
        salePrice: 0,
    },
}; */
// init
const initStore = {
    totalPrice: 0,
    totalItem: 0,
    store: {},
};
// actions
const ADD_ITEM = 'add_item';
const REMOVE_ITEM = 'remove_item';

const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload,
    };
};

const removeItem = (payload) => {
    return {
        type: REMOVE_ITEM,
        payload,
    };
};

const reducer = (state, action) => {
    let newState;
    const item = action.payload;
    switch (action.type) {
        case ADD_ITEM:
            const existItem = state.store[item.id];
            const quantity = item.quantity;
            if (existItem) item.quantity += existItem.quantity;
            state.store[item.id] = item;
            newState = {
                ...state,
                totalItem: state.totalItem + quantity,
                totalPrice: state.totalPrice + quantity * item.prices.salePrice,
            };
            break;
        default:
            throw new Error('Invalid action!');
    }
    console.log(newState);
    return newState;
};

const ShoppingCart = () => {
    const ShoppingCartContainer = useRef(null);
    const [store, dispatch] = useReducer(reducer, initStore);
    return (
        <div
            ref={ShoppingCartContainer}
            className={clsx('shopping-cart', 'btn')}
        >
            <Wrapper
                ref={ShoppingCartContainer}
                Component={ShoppingPopper}
                refProps={{
                    itemStore: [store, dispatch],
                }}
            >
                <div className="info">
                    <FontIcon logoName={'shopping_bag'} fontSize={37} />
                    <span
                        className="shopping-cart--total"
                        style={{
                            visibility: !store.totalItem ? 'hidden' : 'visible',
                        }}
                    >
                        {store.totalItem > 99 ? '99+' : store.totalItem}
                    </span>
                </div>
            </Wrapper>
        </div>
    );
};

export default ShoppingCart;
