import { useEffect } from "react";
import Header from "parts/Header";
import HeroPortfolio from "parts/HeroPortfolio";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";
import AllPortfolio from "parts/AllPortfolio";
import Data from "json/landingPage.json";

const ProjectPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header {...props} />
      <HeroPortfolio {...props} />
      <AllPortfolio data={Data.portfolio} />
      <Discuss {...props} />
      <Footer />
    </>
  );
};

export default ProjectPage;
