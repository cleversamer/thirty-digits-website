import { useEffect } from "react";
import Header from "parts/Header";
import PortfolioDetail from "parts/PortfolioDetail";
import Footer from "parts/Footer";
import Data from "json/landingPage.json";
import WhatsApp from "parts/WhatsApp";

const ProjectDetailPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailData = Data.portfolio.filter(
    (item) => item.id === `${props.match.params.id}`
  );

  return (
    <>
      <Header {...props} />
      <PortfolioDetail
        data={detailData.length === 1 ? [detailData[0]] : null}
      />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default ProjectDetailPage;
