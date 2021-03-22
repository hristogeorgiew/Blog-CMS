import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_row">
                    <div className="navbar_left">
                        <Link to='/'>
                            <img src="/images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="navbar_right">
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;