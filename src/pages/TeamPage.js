import { useEffect } from "react";
import Header from "parts/Header";
import HeroTeam from "parts/HeroTeam";
import AllTeam from "parts/AllTeam";
import Footer from "parts/Footer";
import Data from "json/landingPage.json";
import WhatsApp from "parts/WhatsApp";

const TeamPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header {...props} />
      <HeroTeam {...props} />
      <AllTeam data={Data.team} />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default TeamPage;
