import './Courses.css';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Searching from './Searching';
import Footer from './Footer';
import { useState } from 'react';
import SelectedCourses from './SelectedCourses';
import AllCourses from './StoredCourses';

function Courses() {
    const [visible, setVisible] = useState(4);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const openModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
        document.body.style.overflow = "auto";
    };


    const location = useLocation();
    const { image, name, key } = location.state || {};

    if (!image || !name || !key) {
        return <p>No course data available</p>;
    }

    const filteredCourses = AllCourses.filter((course) => course.key === key);

    return (
        <>
            <div
                className='CourseBackground'
                style={{ backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '80vh' }}
            >
                <Navbar />
            </div>

            <div className='Catagories'>
                <h1>Courses in {name}</h1>
                <div className='Catagory'>
                    {filteredCourses.map((course, index) => (
                        <div className='card' key={index} onClick={() => openModal(course)}>
                            {console.log(course.image)}
                            <img src={course.image} />
                            <p>
                                <b>Category:</b> {course.name}
                                <br />
                                <b>Expert Teacher:</b> {course.teacher}
                                <br />
                                <b>Total Courses:</b> {course.courses}
                                <br />
                                <b>Rating:</b> {course.rating}
                            </p><br></br>
                        </div>
                    ))}

                    {filteredCourses.length === 0 && <p>No courses available for this category</p>}
                </div>
                <div className='ButtonsDiv'>
                    {visible < filteredCourses.length ? (
                        <button className='btn' onClick={() => setVisible(visible + 4)}>
                            Show 4 more
                        </button>
                    ) : (
                        <button className='btn' disabled>
                            Show 4 more
                        </button>
                    )}
                    {visible > 4 ? (
                        <button className='btn' onClick={() => setVisible(visible - 4)}>
                            Show 4 Less
                        </button>
                    ) : (
                        <button className='btn' disabled>
                            Show 4 Less
                        </button>
                    )}
                </div>
            </div>
            <SelectedCourses selectedCourse={selectedCourse} isModalOpen={isModalOpen} closeModal={closeModal} />
            <Searching />
            <Footer />
        </>
    );
}

export default Courses;
