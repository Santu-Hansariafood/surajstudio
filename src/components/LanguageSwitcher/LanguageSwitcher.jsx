import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4">
      <button onClick={() => changeLanguage('en')} className="px-2 py-1 bg-blue-500 text-white rounded">English</button>
      <button onClick={() => changeLanguage('bn')} className="px-2 py-1 bg-green-500 text-white rounded ml-2">বাংলা</button>
    </div>
  );
};

export default LanguageSwitcher;
