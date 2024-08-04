import React from 'react'
import "./Hero.css"
import dark_button from '../../dark-arrow.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-text container">
                <h1>
                    We Ensure better education for a better world
                </h1>
                <p>
                    Out cutting-edge curriculum is designed to empower students with knowledge, skills, and experiences nedded to excel in the dynamic field of education
                </p>
                <button className="btn">Explore more <img src={dark_button} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
