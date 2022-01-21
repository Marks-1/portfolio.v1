import React from "react";
import image from './mrkk.jpg'

const Hero = () => {
    return(
        <section id="showcase" style={{backgroundImage:`url(${image})`}}>
            <div id="showcase__content">
                <h1 className="showcase__content-title">Howdy! I'm Mark</h1>
                <p className="showcase__content-para">Front-end developer & UI/UX Designer</p>
                <a href="works" className="showcase__content-link">My Projects</a>
            </div>
        </section>
    )
}
export default Hero