import SearchBox from "../hooks/SearchBox";
import Nav from "../layouts/Navigator";
const Header = ()=>{
    const fakeApi = {
        id : 1,
        title : 'Giảm giá',
        navClass : 'nav__welcome',
        logo : <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M583-73q-28 28-67.5 28T448-73L73-448q-15-15-21-32t-6-36v-304q0-40 27-67.5t67-27.5h304q19 0 37 6.5t33 21.5l373 372q29 29 29 69t-29 69L583-73ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664Z"/></svg>,
        navItemArray: [
            {
                title : "Mùa hè rực rỡ"
            },
            {
                title : "Chúc mừng sĩ tử 2k5"
            },
            {
                title : "Mừng sinh nhật GameHeaven"
            },
        ]
    }
    const redirectHome = ()=>{
        return window.location.href = '/';
    }
    return (
        <header id="header">
            <div className="header__container">
                <div className="header__logo logo__content" onClick={redirectHome}></div>
                <div className="nav__container">
                    <SearchBox />
                    <div className="btn--signUp btn" title="Đăng ký">
                        Đăng ký
                    </div>
                    <div className="btn--signIn btn" title="Đăng nhập">
                        Đăng nhập
                    </div>
                </div>
            </div>
            <div className="header__container container--bottom">
                <Nav {...fakeApi} />
            </div>
        </header>
    );
}

export default Header;