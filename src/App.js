import GetinTouch from "./Components/GetinTouch";
import Hero from "./Components/Hero";
import HomeSlider from "./Components/HomeSlider";
import ISO from "./Components/ISO";
import Navbar from "./Components/Navbar";
import ServicesSection from "./Components/ServicesSection";
import TopBar from "./Components/TopBar";


function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HomeSlider />
      <Hero />
      <ISO />
      <ServicesSection />
      <GetinTouch />
    </>
  );
}

export default App;
