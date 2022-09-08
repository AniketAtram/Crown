import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/logo/crown.svg'
import './NavBar.styles.scss';

function NavBar() {
    return (
        <>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <CrwnLogo className="logo"/>
                </Link>

                <div className="nav-links-container">
                    <Link to='/shop' className="nav-link">
                        SHOP
                    </Link>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default NavBar;