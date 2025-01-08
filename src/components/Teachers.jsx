import './Teacher.css';
import Lisa from '../assets/images/lisa.jpg';
import John from '../assets/images/john.jpg';
import Mark from '../assets/images/mark.jpg';
import Sarah from '../assets/images/sarah.jpg';
import teacher1 from '../assets/images/teac1.avif';
import teacher2 from '../assets/images/teac2.jpg';
import teacher3 from '../assets/images/teac3.jpg';
import teacher4 from '../assets/images/teach4.avif';
import teacher5 from '../assets/images/teach5.jpg';
import teacher7 from '../assets/images/teach7.jpg';
import teacher8 from '../assets/images/teach8.jpg';
import { useState } from 'react';

function Teachers() {
    const teachers = [
        {
            name: "Dr. Lisa M.",
            expertise: "Web Development",
            comment: "Inspiring students globally with engaging Web Development courses",
            image: Lisa,
        },
        {
            name: "Mark H.",
            expertise: "Mobile App Development",
            comment: "Guiding students to build user-friendly mobile applications with real-world impact",
            image: Mark,
        },
        {
            name: "Sarah L.",
            expertise: "Graphic Design & Animation",
            comment: "Empowering learners with creativity and cutting-edge design techniques",
            image: Sarah,
        },
        {
            name: "John P.",
            expertise: "Data Science & Machine Learning",
            comment: "Simplifying complex concepts for students eager to excel in Data Science",
            image: John,
        },
        {
            name: "Dr. Emily R.",
            expertise: "Artificial Intelligence",
            comment: "Bringing AI to life for aspiring developers",
            image: teacher1,
        },
        {
            name: "Michael T.",
            expertise: "Cybersecurity",
            comment: "Securing the digital world, one student at a time",
            image: teacher2,
        },
        {
            name: "Natalie J.",
            expertise: "Cloud Computing",
            comment: "Guiding learners through the vast universe of cloud technology",
            image: teacher3,
        },
        {
            name: "Aaron S.",
            expertise: "Backend Development",
            comment: "Creating robust and scalable backend systems",
            image: teacher4,
        },
        {
            name: "Sophia W.",
            expertise: "UI/UX Design",
            comment: "Transforming ideas into seamless user experiences",
            image: teacher5,
        },
        {
            name: "Daniel K.",
            expertise: "Game Development",
            comment: "Empowering students to create engaging and immersive games",
            image: teacher7,
        },
        {
            name: "Rebecca L.",
            expertise: "Digital Marketing",
            comment: "Helping students master the art of online marketing strategies",
            image: teacher8,
        },
    ];

    const [visible, setVisible] = useState(4);

    return (
        <div className='teachersContainer'>
            <br /><br />
            <h1>Meet the Minds Behind the Mastery</h1>
            <h3>
                Empowering learners through expert guidance and innovative teaching methods to unlock their full potential and achieve success
            </h3>
            <div className='teachers'>
                {teachers.slice(0, visible).map((teacher, index) => (
                    <div className='teacher' key={index}>
                        <img src={teacher.image} alt={teacher.name} />
                        <p>
                            <b>Teacher Name:</b> {teacher.name}
                            <br />
                            <b>Expertise:</b> {teacher.expertise}
                            <br />
                            <b>"{teacher.comment}"</b>
                        </p>
                        <br />
                    </div>
                ))}
            </div>
            <div className='ButtonsDiv'>
                {visible < teachers.length ? (
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
        </div>
    );
}

export default Teachers;
