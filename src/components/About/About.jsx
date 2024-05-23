import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import AboutImage from "../../Image/about.jpeg";

const About = () => {
  const { t } = useTranslation();
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentService, setCurrentService] = useState("");
  const services = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
  ];
  const typingSpeed = 100;
  const serviceDisplayTime = 3000;

  useEffect(() => {
    const typeWriter = (text, index) => {
      if (index < text.length) {
        setCurrentService((prevService) => prevService + text.charAt(index));
        setTimeout(() => typeWriter(text, index + 1), typingSpeed);
      } else {
        setTimeout(() => {
          setCurrentServiceIndex(
            (prevIndex) => (prevIndex + 1) % services.length
          );
        }, serviceDisplayTime);
      }
    };

    setCurrentService("");
    typeWriter(services[currentServiceIndex], 0);
  }, [currentServiceIndex, services]);

  return (
    <div className="mt-2.5 px-4" id="about">
      <h2 className="text-3xl font-bold mb-4 text-center">
        {t("about.title")}
      </h2>
      <div className="flex flex-col md:flex-row items-center md:justify-center bg-gray-100 min-h-screen">
        <div className="md:w-1/2 px-4 md:px-8">
          <img
            src={AboutImage}
            alt="Placeholder Image"
            className="w-full max-h-[65%] md:max-w-lg rounded-full shadow-lg object-contain"
          />
        </div>
        <div className="md:w-1/2 px-4 md:px-8 mt-8 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">{t("about.welcome")}</h2>
          <p className="text-gray-500">{t("about.description")}</p>
          <p className="text-gray-700 leading-relaxed mt-4">{currentService}</p>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <h2 className="text-lg font-semibold mr-4">
              {t("about.connectWithUs")}
            </h2>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              title="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
              title="YouTube"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
              title="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
