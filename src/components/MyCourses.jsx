import { useEffect, useState } from "react";
import Allcourses from "./Allcourses";
import Background from '../assets/images/pic5.jpg';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './MyCourses.css';

function MyCourses() {
    const [orderedCourses, setOrderedCourses] = useState([]);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            const existingUsers = JSON.parse(localStorage.getItem('SignupUsers')) || [];
            const user = existingUsers.find(user => user.username === loggedInUser.username && user.password === loggedInUser.password);

            if (user && user.orders) {
                setOrderedCourses(user.orders);
            }
        }
    }, []);

    return (
        <>
            <div
                className='CourseBackground'
                style={{ backgroundImage: `url(${Background})` }}
            >
                <Navbar />
            </div>
            <div className="MyCoursesDiv">
                <h1>My Currently Enrolled Courses</h1>
                {orderedCourses.length === 0 ? (
                    <p>No courses ordered yet. Browse our courses to get started!</p>

                ) : (
                    <div className="mycourses">
                        {orderedCourses.map((course, index) => (
                            <div
                                className="mycourse" key={index}>
                                <img src={course.image} alt={course.name} />
                                <p>
                                    <b>Course Name:</b> {course.name}
                                    <br />
                                    <b>Teacher Name:</b> {course.teacher}
                                </p>
                                <div className="buttonDiv">
                                <button className="startlearnignbtn">Start Learning</button></div>
                            </div>
                        ))
                        }
                    </div>
                )}
            </div><div className="gradient"><br></br><br></br><br></br>
                <Allcourses />
                <Footer />
            </div>
        </>
    );
}

export default MyCourses;
