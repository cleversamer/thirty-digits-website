import { useEffect } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Service from "parts/Service";
import Portfolio from "parts/Portfolio";
import Advantage from "parts/Advantage";
import Testimonial from "parts/Testimonial";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";
import Data from "json/landingPage.json";

const LandingPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header {...props} />
      <Hero {...props} />
      <Service data={Data.service} />
      <Portfolio data={Data.portfolio} />
      <Advantage data={Data.advantage} />
      <Testimonial data={Data.testimonial} />
      <Discuss />
      <Footer />
    </>
  );
};

export default LandingPage;
