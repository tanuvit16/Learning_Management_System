import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import Testimonialsection from '../../components/student/Testimonialsection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='felx flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CourseSection/>
      <Testimonialsection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home