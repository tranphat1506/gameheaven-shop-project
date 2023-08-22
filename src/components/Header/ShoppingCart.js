import { useRef, memo } from 'react';
import clsx from 'clsx';

import Wrapper from '../Wrapper';
import { ShoppingPopper } from '../Popper';
import FontIcon from '../Common/FontIcon';
import { useCartStore } from '~/hooks/useCartStore';
const ShoppingCart = () => {
    const ShoppingCartContainer = useRef(null);
    const [store, dispatch] = useCartStore();
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

export default memo(ShoppingCart);
