import './Login.css';
import { useLocation } from 'react-router-dom';

function Contact(props) {
    const location = useLocation();
    const isCartPage = location.pathname === '/Cart';
    return (
        <>
            {props.isContact && (
                <div className='LoginModel'>
                    <div className={`contact nav-link ${isCartPage ? 'down' : 'up'}`} >
                    <button className="closeButton" onClick={props.isClose}>&times;</button>
                        <div className="heading"><b>Contact Us</b></div><br></br>
                        <form id="form" className="textboxes">
                            <input type="text" id="name" placeholder="Full Name" required></input><br></br>
                            <input type="text" id="phone" placeholder="Phone No" required></input><br></br>
                            <input type="email" id="email" placeholder="Email" required></input><br></br>
                            <textarea id="msg" placeholder="Write your Message"></textarea>
                            <button type="submit" class="button"><b>Sent Message</b></button>
                        </form>
                        <br></br>
                        {/* <div className="message" id="message">Message Sent successfully!</div> */}
                    </div>
                </div>
            )}
        </>
    )
}

export default Contact;