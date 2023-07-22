import NavItem from "./navItem";
const Nav = ({id, navClass, title, logo, navItemArray})=>{
    const handleNavOpen = (e)=>{
        const isOpen = e.currentTarget.classList.includes('nav--open');
        e.preventDefault();
    }
    return (
        <ul 
            onClick={handleNavOpen} 
            className={ `${navClass} item__nav` }
            title={title} key={id}
        >
            <div className="nav__title-container">
                <span className="title-container--title">
                    {title}
                </span>
                <span className="title-container--logo">
                    {logo}
                </span>
            </div>
            {navItemArray.map((item, index)=>NavItem(item.title, index))}
        </ul>
    );
};
export default Nav;