import { useState } from 'react';
import clsx from 'clsx';

import SearchBox from './SearchBox';
import Nav from './Navigator';
import API__HeaderNav from '~/test/api/HeaderNav.json';
import HeaderSidebar, { BtnOpen } from './HeaderSidebar';
import ShoppingCart from './ShoppingCart';
const Header = () => {
    // Header Nav Event
    const [currentNavOpen, setCurrentNavOpen] = useState('');
    const handleOpenNav = (e, className) => {
        if (currentNavOpen === className) return setCurrentNavOpen('');
        return setCurrentNavOpen(className);
    };
    // ------------------------

    const redirectHome = () => {
        return (window.location.href = '/');
    };
    console.log('re-render');
    return (
        <header id="header">
            <div className="header__container">
                <a
                    href="/"
                    className={clsx('header__logo', 'logo__content')}
                    onClick={redirectHome}
                ></a>
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
                            handleClickEvent={(e) =>
                                handleOpenNav(e, 'header__menu')
                            }
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
                setCurrentNavOpen={setCurrentNavOpen}
                currentNavOpen={currentNavOpen}
            />
        </header>
    );
};

export default Header;
