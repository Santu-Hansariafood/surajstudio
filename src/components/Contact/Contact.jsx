import React from "react";
import { useTranslation } from "react-i18next";
import ContactCard from "../ContactCard/ContactCard";
import Swal from "sweetalert2";

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const whatsappNumber = e.target.whatsappNumber.value;
    const message = e.target.message.value;
    const whatsappLink = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=Name:%20${encodeURIComponent(
      name
    )}%0AWhatsApp%20Number:%20${encodeURIComponent(
      whatsappNumber
    )}%0AMessage:%20${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    Swal.fire({
      title: t('contact.successTitle'),
      text: t('contact.successMessage'),
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="mt-2.5" id="contact">
      <div className="bg-gray-100 min-h-screen py-8 mt-4">
        <div className="container mx-auto px-4 grid gap-8 grid-cols-1 lg:grid-cols-2">
          <ContactCard />
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">{t('contact.heading')}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  {t('contact.name')}
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('contact.placeholders.name')}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="whatsappNumber"
                >
                  {t('contact.whatsappNumber')}
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  placeholder={t('contact.placeholders.whatsappNumber')}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  {t('contact.message')}
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder={t('contact.placeholders.message')}
                  required
                ></textarea>
              </div>
              <button
                className="w-full bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
                type="submit"
              >
                {t('contact.sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
