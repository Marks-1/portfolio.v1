import React from "react";

import image1 from './img/pro1.png'
import image2 from './img/pro2.png'
import image3 from './img/pro3.png'
import image4 from './img/pro4.png'

const Works = () => {
    return(
        <section id="works">
            <div className="works__card">
                <div className="works__card-image">
                    <img src={image3} alt="project 1" />
                </div>
                <div className="works__card-content">
                    <h3 className="works__card-content--title">Project 1</h3>
                    <p className="works__card-content--para">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quibusdam velit nisi magnam ratione laudantiumLorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quibusdam velit nisi magnam ratione laudantium
                    </p>
                    <a href="git"><i className="fab fa-github"></i></a>
                    <a href="git"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div className="works__card">
                <div className="works__card-image">
                    <img src={image2} alt="project 2" />
                </div>
                <div className="works__card-content">
                    <h3 className="works__card-content--title">Project 2</h3>
                    <p className="works__card-content--para">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quibusdam velit nisi magnam ratione laudantiumLorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quibusdam velit nisi magnam ratione laudantium
                    </p>
                    <a href="git"><i className="fab fa-github"></i></a>
                    <a href="git"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div className="works__card">
                <div className="works__card-image">
                    <img src={image4} alt="project 3" />
                </div>
                <div className="works__card-content">
                    <h3 className="works__card-content--title">Project 3</h3>
                    <p className="works__card-content--para">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quibusdam velit nisi magnam ratione laudantiumLorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quibusdam velit nisi magnam ratione laudantium
                    </p>
                    <a href="git"><i className="fab fa-github"></i></a>
                    <a href="git"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div className="works__card">
                <div className="works__card-image">
                    <img src={image1} alt="project 4" />
                </div>
                <div className="works__card-content">
                    <h3 className="works__card-content--title">Project 4</h3>
                    <p className="works__card-content--para">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quibusdam velit nisi magnam ratione laudantiumLorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quibusdam velit nisi magnam ratione laudantium
                    </p>
                    <a href="git"><i className="fab fa-github"></i></a>
                    <a href="git"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </section>
    )
}
export default Works