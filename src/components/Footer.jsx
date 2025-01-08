import './Footer.css';
import FB from '../assets/images/fb.png';
import Instagram from '../assets/images/instagram.png';
import Linkdlen from '../assets/images/linkdlen.jpg';
import Phone from '../assets/images/phone.png';
import Twitter from '../assets/images/twitter.png';
import Youtube from '../assets/images/youtube.jpg';

function Footer() {
    return (
        <div className='footer'>
            <hr></hr>
            <br></br>
            <span className="copyright">© 2024 Learnify Inc. All rights reserved.</span><br></br>
            <img className="icons" src={Phone} alt="" />
            <img className="icons" src={Linkdlen} alt="" />
            <img className="icons" src={Twitter} alt="" />
            <img className="icons" src={Youtube} alt="" />
            <img className="icons" src={FB}alt="" />
            <img className="icons" src={Instagram} alt="" />
        </div>
    )
}

export default Footer;