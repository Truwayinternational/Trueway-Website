import Form2 from "./Components/Form2";
import FromClients from "./Components/FromClients";
import GetinTouch from "./Components/GetinTouch";
import Hero from "./Components/Hero";
import HomeSlider from "./Components/HomeSlider";
import ISO from "./Components/ISO";
import Navbar from "./Components/Navbar";
import Procedure from "./Components/Procedure";
import ServicesSection from "./Components/ServicesSection";
import TopBar from "./Components/TopBar";
import WhyisTrueway from "./Components/WhyisTrueway";
import WhyTruewayCard from './Components/WhyTruewayCard'


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
      <WhyisTrueway />
      <WhyTruewayCard />
      <Procedure />
      <FromClients />
      <Form2 />
    </>
  );
}

export default App;
