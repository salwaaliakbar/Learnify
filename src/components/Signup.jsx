import { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Signup(props) {
    const [signupData, setSignupData] = useState({
        fullName: '',
        email: '',
        phone: '',
        username: '',
        password: ''
    });

    const navigate = useNavigate(); 
    const location = useLocation();
    const isCartPage = location.pathname === '/Cart';
    const isCoursesPage = location.pathname === '/Courses';

    useEffect(() => {
        if (!props.isSignup) {
            setSignupData({
                fullName: '',
                email: '',
                phone: '',
                username: '',
                password: ''
            });
        }
    }, [props.isSignup]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setSignupData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSignup = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];

        const usernameExists = existingUsers.some(
            (user) => user.username === signupData.username
        );

        if (usernameExists) {
            alert('Username already exists! Please choose another one.');
            return;
        }

        existingUsers.push(signupData);
        localStorage.setItem('SignupUsers', JSON.stringify(existingUsers));

        localStorage.setItem('user', JSON.stringify({ username: signupData.username, password: signupData.password }));

        alert('Account created successfully!');
        props.isClose(); 
        navigate('/');
        props.onSignup({ username: signupData.username, password: signupData.password });

        
    };

    return (
        <>
            {props.isSignup && (
                <div className='LoginModel'>
                    <div className={`signup nav-link ${isCartPage || isCoursesPage ? 'down' : 'up'}`}>
                        <button className="closeButton" onClick={props.isClose}>&times;</button>
                        <div className="heading"><b>Create Account</b></div><br />
                        <form id="form" className="textboxes" onSubmit={handleSignup}>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Full Name"
                                value={signupData.fullName}
                                onChange={handleChange}
                                required
                            /><br />
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={signupData.email}
                                onChange={handleChange}
                                required
                            /><br />
                            <input
                                type="number"
                                id="phone"
                                placeholder="Phone Number"
                                value={signupData.phone}
                                onChange={handleChange}
                                required
                            /><br />
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                value={signupData.username}
                                onChange={handleChange}
                                required
                            /><br />
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={signupData.password}
                                onChange={handleChange}
                                required
                            /><br />
                            <button type="submit" className="button"><b>Sign Up</b></button>
                        </form><br />
                    </div>
                </div>
            )}
        </>
    );
}

export default Signup;
