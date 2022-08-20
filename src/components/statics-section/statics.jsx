import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function statics() {
  AOS.init({duration:2000});

  return (
    <div className='app__statics' >
      <div className="app__statics__container" data-aos='fade-left'>
        <div className="app__statics__container__items">
            <h3>12</h3>
            <p>Years of experince</p>
        </div>
        <div className="app__statics__container__items">
            <h3>70</h3>
            <p>Number of project</p>
        </div>
        <div className="app__statics__container__items">
            <h3>50</h3>
            <p>Satisfied clients</p>
        </div>
      </div>
    </div>
  )
}

export default statics
