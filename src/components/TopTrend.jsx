import './TopTrend.css';
import TrendImage from '../assets/images/pic7.png';
import Searching from './Searching';

function TopTrend() {
    return (
        <div className='container'>
            <Searching />
            <div className='toptrend'>
                <div className='toptrendText'><br></br><br></br><br></br>
                    <h1>Future Skills You Can't Ignore</h1>
                    <p>Discover the essential skills shaping the future job market in our 2025 Learning & Skills Trends Report. Stay ahead by understanding emerging industry demands and how to navigate them. Learn how to adapt, innovate, and thrive in an ever-evolving professional landscape. Equip yourself with the knowledge to succeed in the workforce of tomorrow.
                    </p>
                    <a href="https://www3.weforum.org/docs/WEF_Future_of_Jobs_2023.pdf" target="_blank" rel="noopener noreferrer">
                        <button>Show Document</button>
                    </a>

                </div>
                <div className='trendImage'>
                    <img src={TrendImage}></img>
                </div>
            </div>
        </div>
    )
}

export default TopTrend;