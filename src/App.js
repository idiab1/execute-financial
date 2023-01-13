import React from "react";
import About from "./components/About/About";
import Demo from "./components/Demo/Demo";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
