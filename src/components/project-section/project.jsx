import React from 'react'
import data from './../../constrains/data'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const project = () => {
    AOS.init({duration:2000})
    return (
        <div className='app__projects'>
            <div className="app__projects__heading" data-aos='zoom-in-down'>
                <h1>PROJECTS</h1>
                <div></div>
            </div>


            {sectionGen(data[0]) }
            {sectionGen(data[1],'RR') }
            {sectionGen(data[2]) }
            {sectionGen(data[3], 'RR') }

        </div>
    )
}


const sectionGen = (prop,direction) => {
    return (
        <div className="app__projects__content" style={{flexDirection: `${direction? 'row-reverse' : 'row'}` }}>
            <div className="app__projects__content__text" 
            style={{paddingLeft : `${direction ? '3rem' : '0%'}`}}
            data-aos={direction? 'fade-left': 'fade-right'}>
                <h2>{prop.title}</h2> 
                <p>{prop.describe}</p>
                <button type='button'>VIEW MORE</button>
            </div>
            <div className="app__projects__content__image" data-aos={direction? 'fade-right': 'fade-left'}>
                <div></div>
            </div>
        </div>
    )
}

export default project
