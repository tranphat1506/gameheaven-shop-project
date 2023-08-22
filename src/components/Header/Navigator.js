import { memo } from 'react';
import clsx from 'clsx';

import FontIcon from '../Common/FontIcon';
import NavItem from './NavItem';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Nav = ({
    navClass,
    to,
    type,
    title,
    logoAttributes,
    navItemArray,
    scaleIcon = 1,
}) => {
    const navigate = useNavigate();
    const [currentNavOpen, setCurrentNavOpen] = useState('');
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (!currentNavOpen) return false;
            const nav = document.querySelector(`.${currentNavOpen}`);
            if (e.target === nav || nav.contains(e.target)) return false;
            setCurrentNavOpen('');
        });
        return () => {
            // clean up
            window.removeEventListener('click', (e) => {
                if (!currentNavOpen) return false;
                const nav = document.querySelector(`.${currentNavOpen}`);
                if (e.target === nav || nav.contains(e.target)) return false;
                setCurrentNavOpen('');
            });
        };
    }, [currentNavOpen]);
    const handleOpenNav = (e, payload) => {
        switch (payload.type) {
            case 'menu':
                if (currentNavOpen === payload.className)
                    return setCurrentNavOpen('');
                return setCurrentNavOpen(payload.className);
            case 'link':
                return navigate(payload.to);
            default:
                throw Error('Invalid type of navigator!');
        }
    };
    return (
        <div
            onClick={(e) => handleOpenNav(e, { navClass, type, to })}
            className={clsx(navClass, 'item__nav', {
                'nav--open': currentNavOpen === navClass,
            })}
            //className={`${navClass} item__nav`}
        >
            <div className="nav__title-container">
                {logoAttributes.logoName && (
                    //title-container--logo
                    <FontIcon
                        {...logoAttributes}
                        fontSize={logoAttributes.fontSize * scaleIcon}
                    />
                )}
                <span className="title-container--title">{title}</span>
            </div>
            {type === 'menu' && (
                <div className={clsx('nav__menu', 'menu--column')}>
                    {navItemArray &&
                        navItemArray.map((item, index) =>
                            NavItem(item.title, index),
                        )}
                </div>
            )}
        </div>
    );
};
export default memo(Nav);
