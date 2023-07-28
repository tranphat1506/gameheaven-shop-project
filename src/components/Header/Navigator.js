import { memo } from 'react';
import clsx from 'clsx';

import FontIcon from '../Common/FontIcon';
import NavItem from './NavItem';
const Nav = ({ navClass, title, logoAttributes, navItemArray, scaleIcon = 1 }) => {
    /* const [currentNavOpen, setCurrentNavOpen] = useState('');
    useEffect(()=>{
        window.addEventListener('click',(e)=>{
            if (!currentNavOpen) return false;
            const nav = document.querySelector(`.${currentNavOpen}`);
            if (e.target === nav || nav.contains(e.target)) return false;
            setCurrentNavOpen('');
        })
        return ()=>{
            // clean up
            window.removeEventListener('click',(e)=>{
                if (!currentNavOpen) return false;
                const nav = document.querySelector(`.${currentNavOpen}`);
                if (e.target === nav || nav.contains(e.target)) return false;
                setCurrentNavOpen('');
            })
        }
    },[currentNavOpen]);
    const handleOpenNav = (e, className)=>{
        if (currentNavOpen === className)
            return setCurrentNavOpen('');
        return setCurrentNavOpen(className);
    } */
    return (
        <div
            //onClick={e=>handleOpenNav(e, navClass)}
            //className={ `${navClass} item__nav ${currentNavOpen === navClass && 'nav--open'}` }
            className={`${navClass} item__nav`}
        >
            <div className="nav__title-container">
                {logoAttributes.logoName && (
                    //title-container--logo
                    <FontIcon {...logoAttributes} fontSize={logoAttributes.fontSize * scaleIcon} />
                )}
                <span className="title-container--title">{title}</span>
            </div>
            <div className={clsx('nav__menu', 'menu--column')}>
                {navItemArray && navItemArray.map((item, index) => NavItem(item.title, index))}
            </div>
        </div>
    );
};
export default memo(Nav);
