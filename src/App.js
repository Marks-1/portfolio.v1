import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Projects from "./components/Projects";
import Works from "./components/Work";

function App() {
  return(
        <div>
          <Header/>
          <Hero/>
          {/* <Projects/> */}
          <About/>
          <Works/>
        </div>
  )
}

export default App;
