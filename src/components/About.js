import React from "react";
import image from './ST 1.jpg'
const About = () => {
    return(
        <section id="about__me">
            <div className="about__me-image">
                <img src={image} alt="selfie" />
            </div>
            <div className="about__me-content">
                <h2 className="about__me-content--title">About me</h2>
                <p className="about__me-content--para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, vitae maxime fuga repellendus incidunt minus quas ratione autem aperiam dolore doloribus! Modi ratione minus nulla similique et vel consequatur libero?</p>
                <a href="about" className="about__me-content--link">Read more</a>
            </div>
        </section>
    )
}
export default About