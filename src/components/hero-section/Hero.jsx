import React from 'react'
import profileImg from './../../assets/profile.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Hero() {
  AOS.init({duration:2000})
  return (
    <div style={{color:'white'}} className='app__Hero' >
      <div className="app__Hero__content" data-aos='zoom-in'>
        <p className="testmonialPara">Hello i am</p>
        <h1 >UI / UX Designer </h1>
        <h3>Nabeel AHmed Nazim</h3>
        <p>I am working since past 10 years in this industry Have done mor then 50+ project and many interactive clients</p>

        <div className="app__Hero__content__buttons">
            <button>Get Started</button>
            <button>About Me <span>{'>'}</span></button>
        </div>
      </div>
      <div className="app__Hero__image" data-aos='zoom-in'>
        <div className="speical-Heading">
          <h1>UI/UX <br /> Design</h1>
        </div>
        <img src={profileImg} alt="" />
        <h2 className="app__Hero__image__label">Behence.Net/Nabeelnazim</h2>
      </div>
    </div>
  )
}

export default Hero
