import clsx from 'clsx';
import FontIcon from '../Common/FontIcon';
import SocialContainer from '../Common/SocialContainer';
import Nav from './Navigator';
import { useRef, memo } from 'react';
export const BtnOpen = ({ className, handleClickEvent }) => {
    return (
        <div
            className={className}
            title="Menu"
            onClick={(e) => handleClickEvent(e, 'header__menu')}
        >
            <FontIcon logoName={'menu'} fontSize={24} color={'#fff'} />
        </div>
    );
};
const HeaderMenu = ({ API__HeaderNav, handleOpenNav, currentNavState }) => {
    console.log('sidebar render');
    const [currentNavOpen, setCurrentNavOpen] = currentNavState;
    const menuRef = useRef();
    const handleClickOut = (e) => {
        if (e.target === menuRef.current) setCurrentNavOpen('');
    };
    return (
        <div
            ref={menuRef}
            onClick={handleClickOut}
            className={clsx('header__menu', {
                'open--header-menu': currentNavOpen === 'header__menu',
            })}
        >
            <div
                className={clsx(
                    'menu__container',
                    'flex-dir-col',
                    'animation-y',
                )}
            >
                <div
                    className="menu-close__btn"
                    onClick={(e) => handleOpenNav(e, 'header__menu')}
                >
                    <FontIcon fontSize={30} logoName={'close'} />
                </div>
                <div className="content">
                    <div className="profile__box" title="Đăng nhập / Đăng ký">
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
                    <span className="split-border"></span>
                    {API__HeaderNav.bottomNav.map((navInfo, index) => {
                        return <Nav key={index} {...navInfo} scaleIcon={1.2} />;
                    })}
                    <span className="split-border"></span>
                    {API__HeaderNav.topNav.map((navInfo, index) => {
                        return <Nav key={index} {...navInfo} scaleIcon={1.2} />;
                    })}
                </div>
                <SocialContainer width={36} height={36} />
            </div>
        </div>
    );
};
export default memo(HeaderMenu);
