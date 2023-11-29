import React from 'react';
import {Helmet} from "react-helmet";

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Certificate Attestation Consultancy|Indian Document|Fast Service</title>
          <meta name="description" content="Trueway is a leading attestation consultancy that offers quick and secure services across India. We provide Embassy, MEA, MOFA, HRD, Home & Apostille attestation." />
          <link rel="canonical" href="http://truewayinternational.com/" />
        </Helmet>

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