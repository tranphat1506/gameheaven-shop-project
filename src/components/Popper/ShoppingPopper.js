import styles from './Popper.module.scss';
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import formatMoneyUtils from '~/utils/FormatMoney';
import FontIcon from '../Common/FontIcon';

const formatMoney = formatMoneyUtils('vi-VN', 'VND');
const CardItem = memo(
    ({ itemName, itemImgUrl, itemPageUrl, quantity, prices }) => {
        const navigate = useNavigate();
        const imgRef = useRef();
        const { isDiscount, originalPrice, salePrice } = prices;
        const [totalPrice, totalSalePrice] = [
            formatMoney.format(originalPrice * quantity),
            formatMoney.format(salePrice * quantity),
        ];
        const handleViewPhoto = () => {
            navigate(`/photo?url=${itemImgUrl}`);
        };
        console.log('item');
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
                        src={itemImgUrl}
                        alt={itemName}
                    />
                </span>
                <div className={clsx(styles.info)}>
                    <Link to={itemPageUrl}>{itemName}</Link>
                    <span className={clsx(styles['original-price'])}>
                        {isDiscount ? totalPrice : totalSalePrice}
                    </span>
                    {isDiscount && (
                        <span className={clsx(styles['sale-price'])}>
                            {totalPrice}
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
    useEffect(() => {
        console.log(store);
    }, [store]);
    return (
        <div
            className={clsx(wrapperClass, {
                [styles['shopping-popper']]: 1,
                [styles['--no-items']]: !store.totalItem,
            })}
            style={{ visibility: show ? 'visible' : 'hidden' }}
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
                    onClick={(e) => {
                        const action = {
                            type: 'add_item',
                            payload: {
                                itemName: 'Thẻ Steam 100 HKD',
                                itemImgUrl:
                                    'https://didongviet.vn/dchannel/wp-content/uploads/2022/11/maxresdefault-16.jpg',
                                itemPageUrl: '/SteamCard/123123',
                                quantity: 100,
                                prices: {
                                    isDiscount: false,
                                    salePrice: 320000,
                                },
                            },
                        };
                        dispatch(action);
                    }}
                >
                    Chưa có sản phẩm nào trong giỏ!
                </span>
                <div className={clsx([styles['main-container']])}>
                    <div className={clsx([styles['items-container']])}>
                        {store.store.map((item, index) => {
                            return <CardItem key={index} {...item} />;
                        })}
                    </div>
                    <div className={clsx([styles['details-container']])}>
                        <span
                            className="total"
                            onClick={(e) => {
                                const action = {
                                    type: 'add_item',
                                    payload: {
                                        itemName: 'Thẻ Steam 100 HKD',
                                        itemImgUrl:
                                            'https://didongviet.vn/dchannel/wp-content/uploads/2022/11/maxresdefault-16.jpg',
                                        itemPageUrl: '/SteamCard/123123',
                                        quantity: 100,
                                        prices: {
                                            isDiscount: false,
                                            salePrice: 320000,
                                        },
                                    },
                                };
                                dispatch(action);
                            }}
                        >
                            Tổng: {formatMoney.format(store.totalPrice)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ShoppingPopper);
