import React from "react";
import ProfilePhoto from "../../Image/profile.png";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-2.5" id="home">
      <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center pt-4 md:pt-0">
        <div className="md:w-1/2 mb-8 md:mb-0 px-4">
          <h1 className="text-4xl font-bold mb-4">
            {t('home.welcome')} <br />
            <span className="text-yellow-500">{t('home.studio')}</span>
          </h1>
          <p className="text-gray-300 mb-4 italic">
            {t('home.intro')}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center px-4">
          <img
            src={ProfilePhoto}
            alt="Placeholder Image"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
