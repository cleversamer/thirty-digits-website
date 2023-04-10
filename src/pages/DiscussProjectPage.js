import { useEffect, useState } from "react";
import Header from "parts/Header";
import DiscussForm from "parts/DiscussForm";
import Footer from "parts/Footer";

const DiscussProjectPage = (props) => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectIdea: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectIdea: "",
    });
  };

  return (
    <>
      <Header {...props} />
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      <Footer />
    </>
  );
};

export default DiscussProjectPage;
