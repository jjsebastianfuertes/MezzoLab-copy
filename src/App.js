import React from "react";

import "./App.css";
import Hero from "./components/hero/hero";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Slogan from "./components/slogan/slogan";
import OurClients from './components/our-clients/our-clients';
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="container-content">
      <Header></Header>
      <Hero/>
      <Slogan />
      <Projects/>
      <OurClients/>
      <Footer></Footer>
    </div>
  );
}

export default App;
