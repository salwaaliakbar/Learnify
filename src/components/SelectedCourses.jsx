import './SelectedCourses.css';
import Login from './Login';
import OrderDetail from './OrderDetail';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectedCourses(props) {
    const [isLogin, setLogin] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [orderDetails, setOrderDetails] = useState({ username: '', address: '', paymentMethod: 'COD' });

    const navigate = useNavigate();

    const closeLogin = () => {
        setLogin(false);
    };

    const AddToCart = () => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (!loggedInUser) {
            alert('You need to be logged in to purchase or add to cart.');
            setIsVisible(false);
            setLogin(true);
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];
        const user = existingUsers.find(
            (user) => user.username === loggedInUser.username && user.password === loggedInUser.password
        );

        if (user) {
            user.cart = user.cart || [];
            user.orders = user.orders || [];
            const isCourseInCart = user.cart.some(course => course.name === props.selectedCourse.name);
            const isCourseInOrder = user.orders.some(course => course.name === props.selectedCourse.name);
            if (isCourseInOrder) {
                alert(`Course "${props.selectedCourse.name}" your current enrolled courses.`);
                window.location.reload();
            } else if (isCourseInCart) {
                alert(`Course "${props.selectedCourse.name}" is already in your cart.`);
                window.location.reload();
            } else {
                user.cart.push(props.selectedCourse);
                alert(`Course "${props.selectedCourse.name}" added to your cart.`);
                navigate('/Cart');
            }

            const updatedUsers = existingUsers.map(existingUser =>
                existingUser.username === user.username ? user : existingUser
            );

            localStorage.setItem('SignupUsers', JSON.stringify(updatedUsers));
            localStorage.setItem('user', JSON.stringify(user));
            setIsVisible(false);
        } else {
            alert('Error: User not found in SignupUsers.');
        }
    };

    const handleBuyNow = () => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (!loggedInUser) {
            alert('You need to be logged in to purchase courses.');
            setIsVisible(false);
            setLogin(true);
            return;
        }
        const existingUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];
        const user = existingUsers.find(
            (user) => user.username === loggedInUser.username && user.password === loggedInUser.password
        );

        if (user) {
            user.cart = user.cart || [];
            user.orders = user.orders || [];
            const isCourseInCart = user.cart.some(course => course.name === props.selectedCourse.name);
            const isCourseInOrder = user.orders.some(course => course.name === props.selectedCourse.name);
            if (isCourseInOrder) {
                alert(`Course "${props.selectedCourse.name}" your current enrolled courses.`);
                window.location.reload();
            } else if (isCourseInCart) {
                alert(`Course "${props.selectedCourse.name}" is already in your cart.`);
                window.location.reload();
            } else {
                setIsVisible(false);
                setShowOrderDetail(true);
            }

            const updatedUsers = existingUsers.map(existingUser =>
                existingUser.username === user.username ? user : existingUser
            );

            localStorage.setItem('SignupUsers', JSON.stringify(updatedUsers));
            localStorage.setItem('user', JSON.stringify(user));
            setIsVisible(false);
        } else {
            alert('Error: User not found in SignupUsers.');
        }
    };

    const handleOrderSubmit = () => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        const existingUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];
        const userIndex = existingUsers.findIndex(
            (user) => user.username === loggedInUser.username && user.password === loggedInUser.password
        );

        if (userIndex !== -1) {
            const user = existingUsers[userIndex];
            const newOrder = {
                ...props.selectedCourse,
                ...orderDetails,
                orderDate: new Date().toLocaleString(),
            };

            user.orders = user.orders || [];
            user.orders.push(newOrder);

            localStorage.setItem('SignupUsers', JSON.stringify(existingUsers));
            setShowOrderDetail(false);
            alert('Order placed successfully!');
            navigate('/MyCourses');
            window.location.reload();
        }
    };

    useEffect(() => {
        setIsVisible(true);
    }, [props]);

    return (
        <>
            {isVisible && props.isModalOpen && props.selectedCourse && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modalLeft">
                            <img src={props.selectedCourse.image} alt={props.selectedCourse.name} />
                        </div>
                        <div className="modalRight">
                            <h2>{props.selectedCourse.name}</h2>
                            <p>
                                <b>Teacher Name:</b> {props.selectedCourse.teacher}
                            </p>
                            <p>
                                <b>Price:</b> {props.selectedCourse.price}
                            </p>
                            <p>
                                <b>Rating:</b> {props.selectedCourse.rating}
                            </p>
                            <div className="PopUpButtonsDiv">
                                <button className="PopUpbtn" onClick={AddToCart}>Add to Cart</button>
                                <button className="PopUpbtn" onClick={handleBuyNow}>Buy Now</button>
                            </div>
                        </div>
                        <button className="close-modal" onClick={props.closeModal}>×</button>
                    </div>
                </div>
            )}
            {showOrderDetail && (
                <OrderDetail
                    showModal={showOrderDetail}
                    handleOrderSubmit={handleOrderSubmit}
                    selectedItem={props.selectedCourse}
                    setOrderDetails={setOrderDetails}
                    setOrderDetailsAddress={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                    setOrderDetailsUsername={(e) => setOrderDetails({ ...orderDetails, username: e.target.value })}
                    setOrderDetailsPayment={(e) => setOrderDetails({ ...orderDetails, paymentMethod: e.target.value })}
                    orderDetails={orderDetails}
                    onClose={() => setShowOrderDetail(false)}
                />
            )}
            <Login isLogin={isLogin} isClose={closeLogin} />
        </>
    );
}

export default SelectedCourses;
