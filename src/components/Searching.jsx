import './Searching.css';
import SearchLogo from '../assets/images/SearchLogo.png';

function Searching() {
    return(
        <div className='searching'>
            <br></br>
                <h1>Search the 1,000 plus courses with Learnify</h1>
                    <div className='searchBox'>
                        <input type='text' placeholder='e.g Mobile App Development'></input>
                        <img src={SearchLogo}></img>
                    </div>
                    <div className='Catogories'>
                    <p>Cybersecurity</p>
                    <p>Data Science & Machine Learning</p>
                    <p>Web Development</p>
                    <p>Mobile App Development</p>
                    </div>
            </div>
    )
}

export default Searching;