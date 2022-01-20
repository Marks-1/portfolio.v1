import React from "react";

const Header = () => {
    return(
        <header id="header">
            <nav id="header__main-nav">
                <div className="header__main-nav--hamburger">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <ul className="header__main-nav--links">
                    <li><a href="about">About</a></li>
                    <li><a href="passion">Passion</a></li>
                    <li><a href="experience">Experience</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header