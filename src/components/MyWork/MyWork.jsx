import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import mywork1 from "../../Image/Myworkimage/WhatsApp Image 2024-05-21 at 1.10.21 PM.jpeg";
import mywork2 from "../../Image/Myworkimage/WhatsApp Image 2024-05-21 at 1.10.22 PM.jpeg";
import mywork3 from "../../Image/Myworkimage/WhatsApp Image 2024-05-21 at 1.10.27 PM (1).jpeg";
import mywork4 from "../../Image/Myworkimage/WhatsApp Image 2024-05-21 at 1.10.27 PM.jpeg";
import mywork5 from "../../Image/Myworkimage/WhatsApp Image 2024-05-21 at 1.10.29 PM.jpeg";
import mywork6 from "../../Image/Myworkimage/WhatsApp Image 2024-05-21 at 1.10.30 PM (1).jpeg";
import mywork7 from "../../Image/Myworkimage/WhatsApp Image 2024-05-21 at 1.10.30 PM.jpeg";
import mywork8 from "../../Image/Myworkimage/WhatsApp Image 2024-05-21 at 1.10.31 PM (1).jpeg";

const MyWork = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState({ src: null, isFullScreen: false });

  const projects = [
    { id: 1, imgSrc: mywork1, title: t('myWork.projects.0') },
    { id: 2, imgSrc: mywork2, title: t('myWork.projects.1') },
    { id: 3, imgSrc: mywork3, title: t('myWork.projects.2') },
    { id: 4, imgSrc: mywork4, title: t('myWork.projects.3') },
    { id: 5, imgSrc: mywork5, title: t('myWork.projects.4') },
    { id: 6, imgSrc: mywork6, title: t('myWork.projects.5') },
    { id: 7, imgSrc: mywork7, title: t('myWork.projects.6') },
    { id: 8, imgSrc: mywork8, title: t('myWork.projects.7') },
  ];

  useEffect(() => {
    let timer;
    if (selectedImage.isFullScreen) {
      timer = setTimeout(() => {
        setSelectedImage({ src: null, isFullScreen: false });
      }, 10000); // 10 seconds
    }
    return () => clearTimeout(timer);
  }, [selectedImage.isFullScreen]);

  const handleImageClick = (imgSrc) => {
    setSelectedImage((prev) => ({
      src: imgSrc,
      isFullScreen: !(prev.src === imgSrc && prev.isFullScreen),
    }));
  };

  return (
    <div className="mt-2.5" id="mywork">
      <div className="bg-gray-100 min-h-screen py-8">
        <h2 className="text-4xl font-bold text-center mb-8 mt-10">{t('myWork.heading')}</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                onClick={() => handleImageClick(project.imgSrc)}
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-white text-xl">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage.src && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black ${selectedImage.isFullScreen ? "bg-opacity-75" : "bg-opacity-50"}`}>
          <div className="relative">
            <img
              src={selectedImage.src}
              alt="Full Screen"
              className={`${selectedImage.isFullScreen ? "max-w-full max-h-full" : "w-auto h-auto"}`}
              onClick={() => handleImageClick(selectedImage.src)}
            />
            {selectedImage.isFullScreen && (
              <button
                onClick={() => setSelectedImage({ src: null, isFullScreen: false })}
                className="absolute top-4 right-4 text-white text-2xl bg-gray-800 bg-opacity-50 p-2 rounded-full"
              >
                &times;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
