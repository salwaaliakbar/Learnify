import { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Signup from './Signup';

function Login(props) {
    const [isSignup, setSignup] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const location = useLocation();
    const isCartPage = location.pathname === '/Cart';
    const isCoursesPage = location.pathname === '/Courses';

    useEffect(() => {
        if (!props.isLogin) {
            setLoginData({
                username: '',
                password: ''
            });
        }
    }, [props.isLogin]);

    const openSignup = () => {
        setSignup(true);
        props.isClose();
    };

    const closeSignup = () => setSignup(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];

        const foundUser = storedUsers.find(
            (user) => user.username === loginData.username && user.password === loginData.password
        );

        if (foundUser) {
            alert(`Welcome back, ${foundUser.fullName}!`);
            props.isClose();
            localStorage.setItem('user', JSON.stringify({ username: foundUser.username, password: foundUser.password }));
            navigate('/');
            props.onLogin({ username: foundUser.username, fullName: foundUser.password });
        } else {
            alert('Account not found in our database!');
        }
    };

    return (
        <>
            {props.isLogin && (
                <div className='LoginModel'>
                    <div className={`login nav-link ${isCartPage ||isCoursesPage ? 'down' : 'up'}`} >
                        <button className="closeButton" onClick={props.isClose}>&times;</button>
                        <div className="heading"><b>Login Account</b></div><br />
                        <form id="form" className="textboxes" onSubmit={handleLogin}>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                value={loginData.username}
                                onChange={handleChange}
                                required
                            /><br />
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                autoComplete="new-password"
                                value={loginData.password}
                                onChange={handleChange}
                                required
                            /><br />
                            {/* <div className="Options left"><Link to='/ForgetPassword'> Forget Password?</Link></div> */}
                            <button type="submit" className="button"><b>Login</b></button><br />
                            <div>
                                <span className='black'>Not a member? </span>
                                <span className="Options" onClick={openSignup}>
                                    <a> Sign Up now</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            )}
             <Signup isSignup={isSignup} 
             isClose={closeSignup} 
             onSignup={props.onLogin} />
        </>
    );
}

export default Login;
