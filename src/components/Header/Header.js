import { useEffect, useState, useRef, useCallback } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useCartStore } from '~/hooks/useCartStore';
import { storeActions } from '~/contexts/CartStore';
import * as gbConst from '~/global_constants';

import SearchBox from './SearchBox';
import Nav from './Navigator';
import API__HeaderNav from '~/test/api/HeaderNav.json';
import HeaderSidebar, { BtnOpen } from './HeaderSidebar';
import ShoppingCart from './ShoppingCart';
const Header = () => {
    const headerRef = useRef();
    const [store, dispatch] = useCartStore();
    useEffect(() => {
        console.log('Load store');
        const fetchCart = async () => {
            try {
                const r = await fetch(
                    gbConst.BE_URL + '/api/cart/get_cart_info',
                    {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: '25f759d9-883d-4749-b063-1a2d9b0fee08',
                        }),
                    },
                );
                const payload = (await r.json()).payload;
                dispatch(storeActions.loadStore(payload));
            } catch (error) {}
        };
        fetchCart();
    }, []);
    // Header Nav Event
    const [currentNavOpen, setCurrentNavOpen] = useState('');
    const handleSetCurrentNavOpen = useCallback((navClass = '') => {
        setCurrentNavOpen(navClass);
    }, []);
    const handleOpenNav = useCallback(
        (e, className) => {
            if (currentNavOpen === className) return handleSetCurrentNavOpen();
            return handleSetCurrentNavOpen(className);
        },
        [currentNavOpen],
    );
    // scroll
    useEffect(() => {
        window.onscroll = (e) => {
            if (!window.scrollY) return (headerRef.current.style = '');
            if (window.scrollY > 110)
                return (headerRef.current.style.transform =
                    'translateY(-100%)');
        };
        return (window.onscroll = () => {});
    }, []);
    // ------------------------
    console.log('header render');
    return (
        <header id="header" ref={headerRef}>
            <div className="header__container">
                <Link
                    to={'/'}
                    className={clsx('header__logo', 'logo__content')}
                />
                <div className="nav__container">
                    <div className="nav--top">
                        {API__HeaderNav.topNav.map((navInfo, index) => {
                            return <Nav key={index} {...navInfo} />;
                        })}
                    </div>
                    <div className="nav--bottom">
                        <SearchBox />
                        <div
                            className="profile__box"
                            title="Đăng nhập / Đăng ký"
                        >
                            <div className="profile__avatar">
                                <img
                                    className="avatar-size"
                                    src="/man.png"
                                    alt="avatar"
                                ></img>
                                <span className="plate"></span>
                            </div>
                            <div className="profile__title">
                                Đăng nhập / Đăng ký
                            </div>
                        </div>
                        <ShoppingCart />
                        <BtnOpen
                            className={'btn--menu btn'}
                            handleClickEvent={handleOpenNav}
                        />
                    </div>
                </div>
            </div>
            <div className={clsx('header__container', 'container--bottom')}>
                {API__HeaderNav.bottomNav.map((navInfo, index) => {
                    return <Nav key={index} {...navInfo} />;
                })}
            </div>
            <HeaderSidebar
                API__HeaderNav={API__HeaderNav}
                handleOpenNav={handleOpenNav}
                currentNavState={[currentNavOpen, handleSetCurrentNavOpen]}
            />
        </header>
    );
};

export default Header;
