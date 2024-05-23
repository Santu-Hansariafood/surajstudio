import React from "react";

const servicesData = [
  { title: "Service 1", description: "Description for service 1." },
  { title: "Service 2", description: "Description for service 2." },
  { title: "Service 3", description: "Description for service 3." },
  { title: "Service 4", description: "Description for service 4." },
  { title: "Service 5", description: "Description for service 5." },
];

const Services = () => {
  return (
    <div className="mt-6" id="services">
      <div className="bg-gray-100 min-h-screen py-8">
        <h2 className="text-4xl font-bold text-center mb-8 mt-3">
          My Servicess
        </h2>
        <div className="container mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
