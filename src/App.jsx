import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutPage10 from './components/About/AboutPage10'
import Homepage from './components/Pages/Homepage'
import AboutPage from './components/Pages/AboutPage'
import Services1 from './components/Pages/Services1'
import Services2 from './components/Pages/Services2'
import Courses from './components/Pages/Courses'
import News from './components/Pages/News'
import Admission from './components/Pages/Admission'
import Conatct from './components/Pages/Conatct'
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar/>
     <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='/about' Component={AboutPage}/>
      <Route path='/services-1' Component={Services1}/>
      <Route path='/services-2' Component={Services2}/>
      <Route path='/mbbs-course' Component={Courses}/>
      <Route path='/blog-news' Component={News}/>
      <Route path='/admission-process' Component={Admission}/>
      <Route path='/contact-us' Component={Conatct}/>
     </Routes>
     <AboutPage10/>
      <Footer/>
    </div>
  )
}

export default App