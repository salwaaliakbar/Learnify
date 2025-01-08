import Landing from './Landing';
import About from './About';
import Allcourses from './Allcourses';
import Login from './Login';
import Footer from './Footer';
import Signup from './Signup';
import Teachers from './Teachers';
import ExploreOthers from './ExploreOther';
import TopTrend from './TopTrend';
import Comments from './Comments';
import Searching from './Searching';

function Home() {
    return (
        <>
            <Landing />
            <About />
            <Allcourses />
            <Teachers />
            <ExploreOthers />
            <TopTrend />
            <Comments />
            <Footer />
        </>
    )
}

export default Home;