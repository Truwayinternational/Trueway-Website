import React from 'react';

import Footer from "../../Components/Layout/Footer";
import Form2 from "../../Components/Forms/Form2";
import FromClients from "./FromClients";
import GetinTouch from "../../Components/Forms/GetinTouch";
import Hero from "./Hero";
import HomeSlider from "./HomeSlider";
import HomeSliderMob from './HomeSliderMob'
import ISO from "./ISO";
// import Navbar from "../../Components/Layout/Navbar";
import OurBlogs from "./OurBlogs";
import OurVideos from "./OurVideos";
import Procedure from "./Procedure";
import ServicesSection from "./ServicesSection";
import TopBar from "../../Components/Layout/TopBar";
import WhyisTrueway from "./WhyisTrueway";
import WhyTruewayCard from './WhyTruewayCard';
import NavBar from '../../Components/Layout/NavBar/NavBar';


function HomeIndex() {
  return (
    <div>
      <TopBar />
      <NavBar />
      {/* <Navbar /> */}
      <HomeSlider />
      <HomeSliderMob />
      <Hero />
      <ISO />
      <ServicesSection />
      <GetinTouch />
      <WhyisTrueway />
      <WhyTruewayCard />
      <Procedure />
      <FromClients />
      <Form2 />
      <OurBlogs />
      <OurVideos />
      <Footer />
    </div>
  )
}

export default HomeIndex