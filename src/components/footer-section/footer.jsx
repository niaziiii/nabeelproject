import React from 'react'
import { TiSocialTwitter, TiSocialFacebook, TiSocialInstagram, TiSocialYoutube } from 'react-icons/ti'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const footer = () => {
    AOS.init({duration:2000})
    return (
        <div className='app__footer'>
            <div className="app__footer__getInTouch">
            <div className="triangle-side__container">
                        <div class="triangle-up"></div>
                    </div>
                <div className='app__footer__text' data-aos='zoom-in'>
                    <h1>Get in touch to work together</h1>
                    <h2>Send me a message</h2>
                    <button>Contact Me</button>
                </div>
            </div>
            <div className="app__footer__copyRight">
                <div>
                    <p>Copyright@NabeelZain</p>
                    <p>Developed By <a href="https://twitter.com/MuhabatNiazi" rel='noreferrer' target='_blank'>Niazi</a></p>
                </div>
                <ul>
                    <li><TiSocialFacebook /></li>
                    <li><TiSocialInstagram /></li>
                    <li><TiSocialTwitter /></li>
                    <li><TiSocialYoutube /></li>
                </ul>
            </div>
        </div>
    )
}

export default footer
