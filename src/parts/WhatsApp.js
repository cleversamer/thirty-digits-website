import { useState, useEffect } from "react";

const WhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/970599995488"
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-6 right-7 w-20 shadow-light-purple block rounded-full p-3 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src="/assets/images/whatsapp.webp" alt="whatsapp logo" />
    </a>
  );
};

export default WhatsApp;
