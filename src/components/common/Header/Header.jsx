import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import LOGO from "../../../Image/logo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = (path) =>
    `text-gray-700 hover:text-blue-500 ${
      location.pathname === path ? "underline" : ""
    }`;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-yellow-500 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white">
            <img src={LOGO} className="h-18 w-24" alt="Logo" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/home" className={linkClasses("/home")}>
            {t('header.home')}
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            {t('header.about')}
          </Link>
          <Link to="/mywork" className={linkClasses("/mywork")}>
            {t('header.myWork')}
          </Link>
          <Link to="/location" className={linkClasses("/location")}>
            {t('header.location')}
          </Link>
          <Link to="/services" className={linkClasses("/services")}>
            {t('header.services')}
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            {t('header.contact')}
          </Link>
          <div className="flex space-x-2">
            <button onClick={() => changeLanguage('en')} className="px-2 py-1 bg-blue-500 text-white rounded">EN</button>
            <button onClick={() => changeLanguage('bn')} className="px-2 py-1 bg-green-500 text-white rounded">বাংলা</button>
          </div>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            {isOpen ? (
              <RxCross2 className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-yellow-500 shadow-md">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <Link
              to="/home"
              className={
                linkClasses("/home") +
                " block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              }
              onClick={toggleMenu}
            >
              {t('header.home')}
            </Link>
            <Link
              to="/about"
              className={
                linkClasses("/about") +
                " block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              }
              onClick={toggleMenu}
            >
              {t('header.about')}
            </Link>
            <Link
              to="/mywork"
              className={
                linkClasses("/mywork") +
                " block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              }
              onClick={toggleMenu}
            >
              {t('header.myWork')}
            </Link>
            <Link
              to="/location"
              className={
                linkClasses("/location") +
                " block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              }
              onClick={toggleMenu}
            >
              {t('header.location')}
            </Link>
            <Link
              to="/services"
              className={
                linkClasses("/services") +
                " block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              }
              onClick={toggleMenu}
            >
              {t('header.services')}
            </Link>
            <Link
              to="/contact"
              className={
                linkClasses("/contact") +
                " block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              }
              onClick={toggleMenu}
            >
              {t('header.contact')}
            </Link>
            <div className="flex justify-center space-x-2 mt-2">
              <button onClick={() => changeLanguage('en')} className="px-2 py-1 bg-blue-500 text-white rounded">EN</button>
              <button onClick={() => changeLanguage('bn')} className="px-2 py-1 bg-green-500 text-white rounded">বাংলা</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
