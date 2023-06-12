import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style.scss";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import AboutUs from "./components/about";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <main>
    <header>
      <Navbar />
      <Hero />
    </header>
    <Skills />
    <AboutUs />
    <Pricing />
    <Contact />
    <Footer />
  </main>
);
