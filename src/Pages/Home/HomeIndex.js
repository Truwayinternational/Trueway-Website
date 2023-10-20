import React from 'react';

import Form2 from "../../Components/Forms/Form2";
import FromClients from "./FromClients";
import GetinTouch from "../../Components/Forms/GetinTouch";
import Hero from "./Hero";
import HomeSlider from "./HomeSlider";
import HomeSliderMob from './HomeSliderMob'
import ISO from "./ISO";
import OurBlogsCards from './OurBlogsCards';
import OurVideos from "./OurVideos";
import Procedure from "./Procedure";
import ServicesSection from "./ServicesSection";
import ServicesSectionMob from './ServicesSectionMob'
import WhyisTrueway from "../../Components/WhyisTrueway";


function HomeIndex() {
  return (
    <div>
      <HomeSlider />
      <HomeSliderMob />
      <Hero />
      <ISO />
      <ServicesSection />
      <ServicesSectionMob />
      <GetinTouch />
      <WhyisTrueway />
      <Procedure />
      <FromClients />
      <Form2 />
      <OurBlogsCards/>
      <OurVideos />
    </div>
  )
}

export default HomeIndex