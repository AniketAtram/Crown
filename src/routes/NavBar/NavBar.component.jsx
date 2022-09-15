import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { ReactComponent as CrwnLogo } from '../../assets/logo/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './NavBar.styles.scss';

function NavBar() {

    const {currentUser} = useContext(UserContext);

    const OnSignoutHandler = async () => {
        await signOutUser();
    }

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
                    {
                        currentUser? (
                            <span className="nav-link" onClick={OnSignoutHandler}>Sign Out</span>
                        ):
                        <Link to='/auth' className="nav-link">
                            SIGN IN
                        </Link>
                    }
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default NavBar;