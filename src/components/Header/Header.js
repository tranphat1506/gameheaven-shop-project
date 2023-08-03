import { useEffect, useState, useRef, useCallback } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import SearchBox from './SearchBox';
import Nav from './Navigator';
import API__HeaderNav from '~/test/api/HeaderNav.json';
import HeaderSidebar, { BtnOpen } from './HeaderSidebar';
import ShoppingCart from './ShoppingCart';
const Header = () => {
    const headerRef = useRef();
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
            {currentNavOpen === 'header__menu' && (
                <HeaderSidebar
                    API__HeaderNav={API__HeaderNav}
                    handleOpenNav={handleOpenNav}
                    setCurrentNavOpen={handleSetCurrentNavOpen}
                />
            )}
        </header>
    );
};

export default Header;
