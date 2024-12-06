import React from 'react'
import Home from "./components/home/Home"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/services/Services"
import Mission from "./components/mission/Mission"
import Team from "./components/team/Team"
import Faq from "./components/carousel/ImgCarousel"
import Footer from "./components/footer/Footer"



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Mission />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;