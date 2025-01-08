import './Allcourses.css';
import Flutter from '../assets/images/flutter.png';
import AdvancedFlutter from '../assets/images/advancedFlutter.png';
import Dart from '../assets/images/dart.jpg';
import React from '../assets/images/react native.png';
import HTML from '../assets/images/html.webp';
import CSS from '../assets/images/css.jfif';
import JavaScript from '../assets/images/javascript.jpg';
import NodeJS from '../assets/images/nodejs.png';
import MachineLearning from '../assets/images/machine learning for everybody.jpg';
import PythonDataScience from '../assets/images/PythonWithDataScience.png';
import PromptEngineering from '../assets/images/promptEnginering.jpg';
import PythonBeginner from '../assets/images/python for beginners.webp';
import CyberSecurity from '../assets/images/cyberSecurity.jpg';
import EthicalHacking from '../assets/images/Ethical Haking.jpg';
import { useState } from 'react';
import SelectedCourses from './SelectedCourses';
import courses from './StoredCourses';

function Allcourses() {
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

    return (
        <div className='allcourses'>
            <br></br><br></br>
            <h1>Courses Your Can Learn</h1>
            <h3>Learn everything from web development and design to business strategies and digital marketing.</h3>
            <div className="courses">
                {courses.slice(0, visible).map((course,index) => (
                    <div
                        className="course"
                        key={index}
                        onClick={() => openModal(course)}>
                        <img src={course.image} alt={course.name} />
                        <p>
                            <b>Course Name:</b> {course.name}
                            <br />
                            <b>Teacher Name:</b> {course.teacher}
                            <br />
                            <b>Price:</b> {course.price}
                            <br />
                            <b>Rating:</b> {course.rating}
                        </p>
                        <br />
                    </div>
                ))}
            </div>
            <div className='ButtonsDiv'>
                {visible < courses.length ? (
                    <button className='btn' onClick={() => setVisible(visible + 4)}>Show 4 more</button>
                ) : (
                    <button className='btn' disabled>Show 4 more</button>
                )}
                {visible > 4 ? (
                    <button className='btn' onClick={() => setVisible(visible - 4)}>Show 4 Less</button>
                ) : (
                    <button className='btn' disabled>Show 4 Less</button>
                )}
            </div>
            <SelectedCourses selectedCourse={selectedCourse} isModalOpen={isModalOpen} closeModal={closeModal} />

        </div>
    )
}

export default Allcourses;