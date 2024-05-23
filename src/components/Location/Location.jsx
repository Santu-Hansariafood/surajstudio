import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Location = () => {
  const [clientCount, setClientCount] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setClientCount(count);
      if (count === 1000) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2.5" id="location">
      <div className="bg-gray-100 min-h-screen py-8">
        <h2 className="text-4xl font-bold text-center mb-8 mt-5">{t('location.heading')}</h2>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 p-4 h-96">
            <iframe
              title="Google Maps"
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0851454127553!2d144.96487341548982!3d-37.81070797975242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ced0!2sVictoria%20Harbour%20Promenade%2C%20Docklands%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sus!4v1623916816885!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 p-4 h-96 flex items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
              <h3 className="text-2xl font-semibold mb-4">{t('location.workAddressTitle')}</h3>
              <p className="text-gray-700">{t('location.workAddress')}</p>
              <p className="text-gray-700 mt-4">
                <strong>{t('location.phone')}:</strong> +91 6295653719
              </p>
              <p className="text-gray-700">
                <strong>{t('location.email')}:</strong> surajstudioandediting@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12">
          <h2 className="text-4xl font-bold text-center mb-8">{t('location.happyClients')}</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-5xl font-bold text-blue-500">{clientCount}+</div>
            <p className="text-gray-700 mt-4">{t('location.clientsServed')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
