import React from 'react'
import FeedbacksUsers from '../components/FeedbacksUsers'
import Navbar from "../components/Navbar"
import HeroSectionFeedbacks from '../components/HeroSection'

const FeedBacks = () => {
  return (
    <div className='bg-background-1  bg-cover bg-center '>
        <Navbar/>
        <HeroSectionFeedbacks></HeroSectionFeedbacks>
    </div>
  )
}

export default FeedBacks