import './Catagories.css';
import Navbar from './Navbar';
import Web from '../assets/images/web.jpg';
import Cyber from '../assets/images/cyber security.webp';
import AI from '../assets/images/AI.jpg';
import App from '../assets/images/appDevelopment.jpg';
import Searching from './Searching';
import Footer from './Footer';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Catagories() {
  const [visible, setVisible] = useState(4);
  const navigate = useNavigate();

  const Catagory = [
    {
      image: Web,
      name: "Web Development",
      teacher: "Dr. Lisa M.",
      courses: 4,
      rating: "⭐⭐⭐⭐⭐ (4.8/5)"
    },
    {
      image: App,
      name: "Mobile App Development",
      teacher: "Natalie R.",
      courses: 4,
      rating: "⭐⭐⭐⭐⭐ (4.7/5)"
    },
    {
      image: AI,
      name: "Artificial Intelligence",
      teacher: "Sarah L.",
      courses: 4,
      rating: "⭐⭐⭐⭐ (4.4/5)"
    },
    {
      image: Cyber,
      name: "Cyber Security",
      teacher: "Natalie R.",
      courses: 2,
      rating: "⭐⭐⭐⭐ (4.5/5)"
    }
  ];

  return (
    <>
      <div className="Background">
        <Navbar />
      </div>
      <div className="Catagories">
        <h1>Categories Offered by Learnify</h1>
        <div className="Catagory">
          {Catagory.slice(0, visible).map((course, index) => (
            <div
              className="card"
              key={index}
              onClick={() =>
                navigate("/Courses", { state: { image: course.image, name: course.name, teacher: course.teacher, courses: course.courses, rating: course.rating, key: index + 1 } })
              }
            >
              <img src={course.image} alt={course.name} />
              <p>
                <b>Category:</b> {course.name}
                <br />
                <b>Expert Teacher:</b> {course.teacher}
                <br />
                <b>Total Courses:</b> {course.courses}
                <br />
                <b>Rating:</b> {course.rating}
              </p>
              <br />
            </div>
          ))}
        </div>
        <div className='ButtonsDiv'>
          {visible < Catagory.length ? (
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
      <Searching />
      <Footer />
    </>
  );
}

export default Catagories;
