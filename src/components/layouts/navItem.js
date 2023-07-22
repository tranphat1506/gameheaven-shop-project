
const NavItem = (title, index)=>{
    return (
        <li className="item__nav-item" key={index}>
            <span className="nav-item--title" title={title}>
                {title}
            </span>
        </li>
    );
};

export default NavItem;