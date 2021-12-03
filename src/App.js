import React from "react";
import * as s from "./styles/globalStyles";
import Mint from "./components/mint"
import Header from "./components/header";
import About from "./components/About";
import Apes from "./components/apes";
import EcoSystems from "./components/ecoSystems";
import RoadMap from "./components/roadMap";
import Faqs from "./components/faqs";
import Contact from "./components/contact";
import Footer from "./components/footer"

function App() {
  return (
    <s.Screen>
      <Header/>
      <Mint/>
      <About/>
      <Apes/>
      <EcoSystems/>
      <RoadMap/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </s.Screen>
  );
}

export default App;
