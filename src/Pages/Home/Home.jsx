import React from "react";
import AppoinmentSection from "./AppoinmentSection";
import Banner from "./Banner";
import ContactUsSection from "./ContactUsSection";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <AppoinmentSection></AppoinmentSection>
      <TestimonialSection></TestimonialSection>
      <ContactUsSection></ContactUsSection>
    </div>
  );
};

export default Home;
