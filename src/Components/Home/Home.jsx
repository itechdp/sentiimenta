import React from 'react'
import './Home.css'


const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='home' id='home'>
      <div className="home-left">
        <h1>Flexible Solutions For Your Projects</h1>
        <p>Are you in need of someone to handle your AL,ML,Data Science or Data Analytics Projects?Look no further! we specializes in these fields.Ensuring comprehensive expertise and the highest quality of work. We delivering projects in less time then expected, without compromising on quality. Let us take the worry out of your project needs.</p>
        <button className='button'  onClick={() => { scrollToSection('services')}}>Explore</button>
      </div>
     {/*<div className="home-right">
          <img src={robot} alt="robot" />
        </div> */}
    </div>
  )
}

export default Home