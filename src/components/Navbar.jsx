import './Navbar.css';
import SearchIcon from '../assets/images/SearchLogo.png';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from '../components/Login';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isLogin, setLogin] = useState(false);
    const [isContact, setContact] = useState(false);
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isopen, setIsOpen] = useState(false);

    const location = useLocation();
    const isCartPage = location.pathname === '/Cart';

    const closeLogin = () => {
        setLogin(false);
        // window.location.reload();
    }
    const closeContact = () => setContact(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    useEffect(() => {
        if (isLogin || isContact) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isLogin, isContact]);

    const toogle = () => {
        setIsOpen(!isopen)
    }

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            setUser(null);
            localStorage.removeItem('user');
            setShowDropdown(false);
            navigate('/');
        }
    };

    return (
        <>
            <nav>
                <Link to='/' className='logo'><div>Learnify</div></Link>
                <div className="searchbarContainer">
                    <input className="searchbar" type="text" placeholder="What do you want to learn?" />
                    <img src={SearchIcon} alt="SearchIcon" className="searchIcon" />
                </div>
                <div className={`hamburger nav-link ${isCartPage ? 'black' : 'white'}`} id="hamburger" onClick={toogle}>&#9776;</div>
                <ul className={isopen ? 'active' : 'notactive'}>
                    <li><Link to='/Catagories' className={`nav-link ${isCartPage ? 'black' : 'white'}`}><b>Categories</b></Link></li>
                    <li><Link to='/Cart' className={`nav-link ${isCartPage ? 'black' : 'white'}`}><b>Cart</b></Link></li>
                    <li onClick={() => setContact(true)} className={`nav-link ${isCartPage ? 'black' : 'white'}`}><b><a>ContactUs</a></b></li>
                </ul>
                {user ? (
                    <div className="userMenu">
                        <button
                            className="loginbutton"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <b>{user.username}</b>
                        </button>
                        {showDropdown && (
                            <div className="dropdownMenu" >
                                <Link to="/MyCourses" onClick={() => setShowDropdown(false)}>MyCourses</Link>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        className="loginbutton"
                        onClick={() => setLogin(true)}
                    >
                        <b>Login</b>
                    </button>
                )}
            </nav>
            <Login
                isLogin={isLogin}
                isClose={closeLogin}
                onLogin={(userData) => {
                    setUser(userData);
                }}
            />
            <Contact isContact={isContact} isClose={closeContact} />
        </>
    );
}

export default Navbar;
