import styles from './Popper.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import formatMoneyUtils from '~/utils/FormatMoney';
import { itemActions } from '~/contexts/CartStore';
import * as gbConst from '~/global_constants';

import FontIcon from '../Common/FontIcon';
import SteamCard from '~/assets/img/STEAMCARD-20-USD.png';
import SteamCard2 from '~/assets/img/5d0a3a0146177c6108026182.webp';
const formatMoney = formatMoneyUtils('vi-VN', 'VND');

const CardItem = memo(
    ({ _id, itemName, itemImages, quantity, prices, typeOfItem }) => {
        const navigate = useNavigate();
        const imgRef = useRef();

        const itemImage = (!!itemImages[0] && itemImages[0].imgSrc) || '';
        const itemImageAlt =
            (!!itemImages[0] && itemImages[0].imgAlt) || itemName;
        const itemPageUrl = typeOfItem.id
            ? `/shop/${typeOfItem.display}/${_id}`
            : undefined;
        // check if error
        if (!_id || !itemPageUrl) {
            console.warn(
                `This item '${_id}' is error. Please contact admin !!!`,
            );
            return <></>;
        }
        const { isDiscount, originalPrice, salePrice } = prices;
        const [totalPrice, totalSalePrice] = [
            formatMoney.format(originalPrice * quantity),
            formatMoney.format(salePrice * quantity),
        ];
        const handleViewPhoto = () => {
            navigate(`/photo?url=${itemImage}`);
        };
        return (
            <div
                className={clsx([styles.item], {
                    [styles['--sale']]: isDiscount,
                })}
            >
                <span
                    className={clsx(styles.imgHover)}
                    onClick={handleViewPhoto}
                    title="Xem ảnh"
                >
                    <FontIcon logoName={'visibility'} fontSize={20} fill={1} />
                    <img
                        loading="lazy"
                        ref={imgRef}
                        src={itemImage}
                        alt={itemImageAlt}
                    />
                </span>
                <div className={clsx(styles.info)}>
                    <Link to={itemPageUrl}>{itemName}</Link>
                    <span className={clsx(styles['original-price'])}>
                        {isDiscount ? totalPrice : totalSalePrice}
                    </span>
                    {isDiscount && (
                        <span className={clsx(styles['sale-price'])}>
                            {totalSalePrice}
                        </span>
                    )}
                </div>
                <div className={clsx(styles.value)}>SL: {quantity}</div>
            </div>
        );
    },
);
const ShoppingPopper = ({ wrapperClass, itemStore, state }) => {
    const [show, setShow] = state;
    const [store, dispatch] = itemStore;
    const fetchItemById = async (itemId, quantity = 0) => {
        if (!itemId || quantity <= 0) return false;
        const r = await fetch(gbConst.BE_URL + '/api/item/' + itemId, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return (await r.json()).payload;
    };
    return (
        show && (
            <div
                className={clsx(wrapperClass, {
                    [styles['shopping-popper']]: 1,
                    [styles['--no-items']]: !store.totalItem,
                })}
            >
                <div
                    className={clsx({
                        [styles.content]: 1,
                    })}
                >
                    <span
                        className={clsx({
                            [styles['no-items-display']]: 1,
                        })}
                        onClick={async (e) => {
                            const itemId = '8ktbRGqUm-B9X6N';
                            const quantity = 3;
                            const payload = await fetchItemById(
                                itemId,
                                quantity,
                            );
                            dispatch(
                                itemActions.addItem({
                                    ...payload['item'],
                                    status: payload.status,
                                }),
                            );
                        }}
                    >
                        Chưa có sản phẩm nào trong giỏ!
                    </span>
                    <div className={clsx([styles['main-container']])}>
                        <div className={clsx([styles['items-container']])}>
                            {Object.keys(store.store).map((_id) => {
                                return (
                                    <CardItem
                                        key={_id}
                                        {...store['store'][_id]}
                                    />
                                );
                            })}
                        </div>
                        <div className={clsx([styles['details-container']])}>
                            <span
                                className="total"
                                onClick={async (e) => {
                                    const itemId = '8ktbRGqUm-B9X6N';
                                    const quantity = 3;
                                    const payload = await fetchItemById(
                                        itemId,
                                        quantity,
                                    );
                                    dispatch(
                                        itemActions.addItem({
                                            ...payload['item'],
                                            status: payload.status,
                                        }),
                                    );
                                }}
                            >
                                Tổng: {formatMoney.format(store.totalSalePrice)}
                            </span>
                            <span
                                onClick={(e) => {
                                    dispatch({
                                        type: 'reset_store',
                                    });
                                }}
                            >
                                Clear All
                            </span>
                            <span
                                onClick={(e) => {
                                    dispatch({
                                        type: 'remove_item',
                                        payload: {
                                            id: 300,
                                            quantity: 1,
                                        },
                                    });
                                }}
                            >
                                Remove
                            </span>
                            <span
                                onClick={(e) => {
                                    dispatch({
                                        type: 'save_store',
                                    });
                                }}
                            >
                                Save Store
                            </span>
                            <span
                                onClick={(e) => {
                                    dispatch({
                                        type: 'load_store',
                                    });
                                }}
                            >
                                Load Store
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default memo(ShoppingPopper);
