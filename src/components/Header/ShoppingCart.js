import { useState } from 'react';
import clsx from 'clsx';

import FontIcon from '../Common/FontIcon';
import Tippy, { tippy } from '@tippyjs/react';
const ShoppingCart = () => {
    const [itemsInCart, setItemsInCart] = useState(0);
    const addItemToCart = (item = 1) => {
        setItemsInCart(itemsInCart + 1);
    };
    const removeItemToCart = (item = 1) => {
        setItemsInCart(itemsInCart - 1);
    };
    return (
        <div className={clsx('shopping-cart', 'btn')} onClick={addItemToCart}>
            <div className="info">
                <FontIcon logoName={'shopping_bag'} fontSize={30} />
                <span className="shopping-cart--total" style={{ visibility: !itemsInCart ? 'hidden' : 'visible' }}>
                    {itemsInCart}
                </span>
            </div>
            <div className="container"></div>
        </div>
    );
};

export default ShoppingCart;
