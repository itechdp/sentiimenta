import React from 'react'
import './About.css'
import dhrumil from '../../assets/dhrumilp.jpeg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={dhrumil}/>
            
        </div>
        <div className="about-right">
            <h2>About Us</h2>
            <p>I welcome Each and Every one here, I am <br /><span>Dhrumil Patel</span>. Confident machine learning developer,
                Data Science Developer and Artificial Intelligence Developer. I have built plenty of projects in
                Python Programming, Machine Learning and Data science. Along with that i am serving my service
                to USA clients and want to expand globally, and You can help me in that to expand myself and my
                firm globally be a part of our company and service and join us in our journey.
            </p>
            <button className='button'>Read More</button>
        </div>
    </div>
  )
}

export default About