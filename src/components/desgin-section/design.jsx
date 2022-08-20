import React from 'react'
import { MdImportantDevices } from 'react-icons/md'
import { TbBrandAirtable } from 'react-icons/tb'
import { RiLineChartFill } from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function design() {
    AOS.init({duration:2000})
    return (
        <div className='app__design'>

            <div className="app__design__boxes" data-aos='flip-up'>
                <i><MdImportantDevices fontSize={33} color={'white'} /></i>
                <h3>UI/UX <br /> Design</h3>
            </div>
            <div className="app__design__boxes" data-aos='flip-up'>
                <i><TbBrandAirtable fontSize={33} color={'white'} /></i>
                <h3>Brand<br /> Design</h3>
            </div>
            <div className="app__design__boxes" data-aos='flip-up'>
                <i><RiLineChartFill fontSize={33} color={'white'} /></i>
                <h3>Social <br /> Design</h3>
                <div className="triangle__container">
                    <div class="triangle-up"></div>
                </div>

            </div>
        </div>
    )
}

export default design
