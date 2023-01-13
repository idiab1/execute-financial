import React from "react";
import About from "./components/About/About";
import Demo from "./components/Demo/Demo";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
    </div>
  );
}

export default App;
