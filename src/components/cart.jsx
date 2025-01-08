import './Cart.css';
import emptyCart from '../assets/images/emptyCart.jpg';
import Navbar from './Navbar';
import Allcourses from './Allcourses';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import OrderDetail from './OrderDetail';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [orderDetails, setOrderDetails] = useState({ username: '', address: '', paymentMethod: 'COD' });

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            const existingUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];
            const user = existingUsers.find(user => user.username === loggedInUser.username && user.password === loggedInUser.password);

            if (user && user.cart) {
                setCartItems(user.cart);
            }
        }
    }, []);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);


    const getLoggedInUserIndex = () => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        const existingUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];
        return existingUsers.findIndex(user => user.username === loggedInUser.username);
    };

    const handleRemoveItem = (index) => {
        const userIndex = getLoggedInUserIndex();
        if (userIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart.splice(index, 1);

            const existingUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];
            existingUsers[userIndex].cart = updatedCart;
            localStorage.setItem('SignupUsers', JSON.stringify(existingUsers));
            setCartItems(updatedCart);
        }
    };

    const handlePlaceOrderForItem = (index) => {
        setSelectedItem(cartItems[index]);
        setShowModal(true);
    };

    const handleOrderSubmit = () => {
        const userIndex = getLoggedInUserIndex();
        if (userIndex !== -1) {
            const existingUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];
            const user = existingUsers[userIndex];

            const newOrder = {
                ...selectedItem,
                ...orderDetails,
                orderDate: new Date().toLocaleString(),
            };

            user.orders = user.orders || [];
            user.orders.push(newOrder);
            
            const updatedCart = cartItems.filter(item => item !== selectedItem);
            user.cart = updatedCart;

            localStorage.setItem('SignupUsers', JSON.stringify(existingUsers));
            setCartItems(updatedCart);
            setShowModal(false);
            alert('Order placed successfully!');
        }
    };

    return (
        <>
            <Navbar />
            <hr></hr>
            <div className='cart'>
                {cartItems.length === 0 ? (
                    <div className='empty-cart'>
                        <img src={emptyCart} className='cartImage' alt="Empty Cart" />
                    </div>
                ) : (
                    <div className='cart-items'>
                        <h1>Your Cart</h1>
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p><b>{item.name}</b></p>
                                    <p><b>Teacher:</b> {item.teacher}</p>
                                    <p><b>Price:</b> {item.price}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => handlePlaceOrderForItem(index)} className="btn">
                                        checkout
                                    </button>
                                    <button onClick={() => handleRemoveItem(index)} className="btn">
                                       Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <OrderDetail
                showModal={showModal}
                handleOrderSubmit={handleOrderSubmit}
                selectedItem={selectedItem}
                setOrderDetails={setOrderDetails}
                setOrderDetailsAddress={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                setOrderDetailsUsername={(e) => setOrderDetails({ ...orderDetails, username: e.target.value })} 
                setOrderDetailsPayment={(e) => setOrderDetails({ ...orderDetails, paymentMethod: e.target.value })}
                orderDetails={orderDetails}
                onClose={() => {
                    setShowModal(false)
                }}
            />
            <Allcourses />
            <Footer />
        </>
    );
}

export default Cart;
