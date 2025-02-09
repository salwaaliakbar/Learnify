import './ExploreOthers.css';
import Coursera from '../assets/images/coursera.png';
import Udemy from '../assets/images/udemy.png';
import LinkdlenLearning from '../assets/images/inkdlenLearning.png';
import EDX from '../assets/images/edx.webp'

function ExploreOthers (){
    return (
        <div>
            <h1 className='h1heading'>Explore Other Learning Platforms</h1>
            <h3>Browse top online learning platforms offering diverse courses to help you advance your skills at your own pace.</h3>
            <div className='images'>
            <a href="https://www.coursera.org" target="_blank"><img src={Coursera} alt="Coursera" /></a>
                <a href="https://www.udemy.com" target="_blank"><img src={Udemy} alt="Udemy" /></a>
                <a href="https://www.linkedin.com/learning/" target="_blank"><img src={LinkdlenLearning} alt="LinkedIn Learning" /></a>
                <a href="https://www.edx.org" target="_blank" ><img src={EDX} alt="edX" /></a>
            </div>
        </div>
    )
}

export default ExploreOthers;