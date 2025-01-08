import './App.css';
import Home from '../src/components/Home.jsx';
import Catagories from '../src/components/Catagories.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login.jsx';
import Contact from '../src/components/Contact.jsx';
import Signup from '../src/components/Signup.jsx';
import Courses from '../src/components/Courses.jsx';
import Cart from '../src/components/cart.jsx';
import SelectedCourses from './components/SelectedCourses.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import MyCourses from './components/MyCourses.jsx';

function App() {
  return (
    <>
     <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Catagories' element={<Catagories />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Courses' element={<Courses/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/SelectedCourses' element={<SelectedCourses/>} />
        <Route path='/MyCourses' element={<MyCourses/>} />
      </Routes>

    </>
  )
}

export default App
