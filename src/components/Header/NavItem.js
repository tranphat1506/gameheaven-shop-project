
const NavItem = (title, index)=>{
    return (
        <li 
            className="item__nav-item" 
            key={index}
            onClick={(e)=>{console.log(title);}}
        >
            <span className="nav-item--title" title={title}>
                {title}
            </span>
        </li>
    );
};

export default NavItem;