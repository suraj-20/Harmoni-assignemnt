import React from 'react'
import "../../styles/Hero.css";

const Hero = () => {
    return (
        <>
            <div className="hero flex-column justify-content-center align-items-center">
                <div className="main-heading d-flex justify-content-center align-items-center">
                    <h1>Welcome to <span>My Store</span>  Your Shoping  Destination </h1>
                </div>
                <div className="sub-heading d-flex justify-content-center align-items-center">
                    <p>Discover a wide range products tailored just for you. Shop with ease and find exactly what you need.</p>
                </div>
            </div>
        </>
    )
}

export default Hero
