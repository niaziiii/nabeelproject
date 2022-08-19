import React from 'react'
import { MdImportantDevices } from 'react-icons/md'
import { TbBrandAirtable } from 'react-icons/tb'
import { RiLineChartFill } from 'react-icons/ri'

function design() {
    return (
        <div className='app__design'>
            <div className="app__design__boxes">
                <i><MdImportantDevices fontSize={33} color={'white'} /></i>
                <h3>UI/UX <br /> Design</h3>
            </div>
            <div className="app__design__boxes">
                <i><TbBrandAirtable fontSize={33} color={'white'} /></i>
                <h3>Brand<br /> Design</h3>
            </div>
            <div className="app__design__boxes">
                <i><RiLineChartFill fontSize={33} color={'white'} /></i>
                <h3>Social <br /> Design</h3>
            </div>
        </div>
    )
}

export default design
