import './About.css';
import LearnAnything from '../assets/images/LearnAnything.jpg';
import saveMoney from '../assets/images/saveMoney.jpg';
import FleaxibleLearning from'../assets/images/flexibleLearning.webp';
import Certificate from '../assets/images/certificate.webp';

function About() {
    return (
        <div className='about'>
            <h1>Empower Your Future with Learnify</h1>
            <h3> Gain access to an extensive selection of courses, specializations, and certifications led by industry experts and instructors from renowned universities and top organizations.</h3>
            <div className='blocks'>
                <div className='subBlocks'>
                    <img src={LearnAnything}></img>
                    <h2>Learn Anything, Anytime</h2>
                    <p>Dive into any topic or trending subject, explore foundational courses, and build advanced skills to stay ahead in your field.</p>
                </div>
                <div className='subBlocks'>
                    <img src= {saveMoney}></img>
                    <h2>Save More, Learn More</h2>
                    <p>Get the most out of your education with Learnify Premium. Enjoy great savings when you commit to multiple courses throughout the year.</p>
                </div>
                <div className='subBlocks'>
                    <img src={FleaxibleLearning}></img>
                    <h2>Explore, Learn, Grow Freely</h2>
                    <p>Take control of your learning experience. Learn at your own pace, switch between courses, or revisit topics whenever you need.</p>
                </div>
                <div className='subBlocks'>
                    <img src={Certificate}></img>
                    <h2>Earn Unlimited Certificates</h2>
                    <p>Complete courses and earn a certificate for each one—at no extra cost. Showcase your accomplishments and advance your career with confidence.</p>
                </div>
            </div>
        </div>
    )
}

export default About;