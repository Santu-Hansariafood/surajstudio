import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../../Image/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-blue-500">
            <img src={Logo} alt="logo" className="w-20 h-20" />
          </Link>
        </div>
        <nav className="mb-4 md:mb-0">
          <Link to="/home" className="px-2 text-gray-300 hover:text-white">
            {t('header.home')}
          </Link>
          <Link to="/about" className="px-2 text-gray-300 hover:text-white">
            {t('header.about')}
          </Link>
          <Link to="/mywork" className="px-2 text-gray-300 hover:text-white">
            {t('header.myWork')}
          </Link>
          <Link to="/location" className="px-2 text-gray-300 hover:text-white">
            {t('header.location')}
          </Link>
          <Link to="/services" className="px-2 text-gray-300 hover:text-white">
            {t('header.services')}
          </Link>
          <Link to="/contact" className="px-2 text-gray-300 hover:text-white">
            {t('header.contact')}
          </Link>
        </nav>

        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={24} title="Facebook"/>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800"
          >
            <FaYoutube size={24} title="Youtube"/>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={24} title="Instagram"/>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={24} title="Twitter"/>
          </a>
        </div>
      </div>

      <div className="py-4 mt-5 mb-0">
        <div className="container mx-auto text-center text-gray-400">
          {t('footer.developedAndMaintainedBy')}{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-700"
          >
            {t('footer.developerName')}
          </a>{" "}
          &copy; {currentYear}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
