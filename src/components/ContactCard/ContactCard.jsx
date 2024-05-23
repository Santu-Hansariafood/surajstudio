import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import CardImage from "../../Image/card.jpeg";

const ContactCard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <img
          src={CardImage}
          alt="Contact"
          className="w-32 h-32 rounded-sm mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-2">{t('contact.contactCard.name')}</h3>
        <p className="text-gray-700 mb-1 flex items-center justify-center md:justify-start">
          <FaWhatsapp className="mr-2 text-green-500" />: +91 62956 53719
        </p>
        <p className="text-gray-700 mb-1 flex items-center justify-center md:justify-start">
          <FaPhone className="mr-2 text-blue-500" />: +91 62956 53719
        </p>
        <p className="text-gray-700 mb-4 flex items-center justify-center md:justify-start">
          <FaEnvelope className="mr-2 text-red-500" />: surajstudioandediting@gmail.com
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
