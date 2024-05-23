import React from "react";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import MyWork from "../components/MyWork/MyWork";
import Location from "../components/Location/Location";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <div className="mt-0">
        <Home />
      </div>
      <div className="mt-0">
        <About />
      </div>
      <div className="mt-0">
        <MyWork />
      </div>
      <div className="mt-0">
        <Location />
      </div>
      <div className="mt-0">
        <Services />
      </div>
      <div className="mt-0">
        <Testimonials />
      </div>
      <div className="mt-0">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
