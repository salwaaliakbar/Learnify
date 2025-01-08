import './Teacher.css';
import Micheal from '../assets/images/Micheal.jpg';
import Priya from '../assets/images/Priya.webp';
import Emily from '../assets/images/Emily (1).jpg';
import James from '../assets/images/James.jpg';
import student1 from '../assets/images/stu1.jpg';
import student2 from '../assets/images/stu2.jpg';
import student3 from '../assets/images/stu3.avif';
import student4 from '../assets/images/stu4.avif';
import student5 from '../assets/images/stu5.jpg';
import student6 from '../assets/images/stu6.jpg';
import student7 from '../assets/images/stu7.avif';
import student8 from '../assets/images/stu8.jpg';
import { useState } from 'react';

function Comments() {
    const commentsData = [
        {
            name: "Priya S.",
            comment: "As a working professional, Learnify's self-paced learning suits me perfectly. The range of courses is incredible, and I’ve been able to advance my skills in areas that are relevant to my career growth.",
            image: Priya,
        },
        {
            name: "Michael L.",
            comment: "I was skeptical at first, but Learnify really delivers! The quality of the content is top-notch, and the fact that I can get certified without extra costs makes it a no-brainer.",
            image: Micheal,
        },
        {
            name: "Emily W.",
            comment: "Learnify has completely transformed my learning experience! I can now study at my own pace, and the courses are comprehensive. I've gained valuable skills that have directly impacted my career.",
            image: Emily,
        },
        {
            name: "James R.",
            comment: "I love how flexible Learnify is. I can switch between courses whenever I want, and I always feel supported by the instructors. The certificates I earned have already made a difference in my job search.",
            image: James,
        },
        {
            name: "Sophia T.",
            comment: "Learnify’s platform is user-friendly, and the interactive sessions make learning so much fun! It’s the best investment I’ve made in myself.",
            image: student1,
        },
        {
            name: "Aaron K.",
            comment: "The variety of courses at Learnify is unmatched. I’ve gained skills that I couldn’t have imagined learning online!",
            image: student2,
        },
        {
            name: "Natalie B.",
            comment: "Thanks to Learnify, I’ve been able to balance work and learning effortlessly. The guidance and resources provided are exceptional.",
            image: student3,
        },
        {
            name: "Chris M.",
            comment: "The instructors are amazing, and the content is relevant to today’s industry standards. I feel more confident in my skills now.",
            image: student4,
        },
    ];

    const [visible, setVisible] = useState(4);

    return (
        <div className='commentsContainer'>
            <br /><br />
            <h1>Inspiring Journeys of Our Learners</h1>
            <h3>
                Explore how expert guidance and dedication empower our learners to achieve their dreams and transform their lives.
            </h3>
            <div className='comments'>
                {commentsData.slice(0, visible).map((comment, index) => (
                    <div className='comment' key={index}>
                        <img src={comment.image} alt={comment.name} />
                        <p>
                            "{comment.comment}" 
                            <br />
                            <b>{comment.name}</b>
                        </p>
                        <br />
                    </div>
                ))}
            </div>
            <div className='ButtonsDiv'>
                {visible < commentsData.length ? (
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

export default Comments;
