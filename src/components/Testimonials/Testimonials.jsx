import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const Testimonials = () => {
  const { t } = useTranslation();

  const initialTestimonials = [
    {
      id: 1,
      text: "The service provided was exceptional. Highly recommend!",
      author: "Happy Client",
      rating: 5,
    },
    {
      id: 2,
      text: "Absolutely wonderful! The team was very professional.",
      author: "Satisfied Customer",
      rating: 4,
    },
    {
      id: 3,
      text: "Exceeded my expectations in every way.",
      author: "Grateful Client",
      rating: 5,
    },
    {
      id: 4,
      text: "The best experience I’ve ever had.",
      author: "Delighted Customer",
      rating: 5,
    },
    {
      id: 5,
      text: "I would highly recommend them to anyone.",
      author: "Pleased Client",
      rating: 4,
    },
    {
      id: 6,
      text: "Outstanding service and results.",
      author: "Thrilled Client",
      rating: 5,
    },
    {
      id: 7,
      text: "Very satisfied with the quality of work.",
      author: "Content Customer",
      rating: 4,
    },
    {
      id: 8,
      text: "A truly remarkable experience.",
      author: "Impressed Client",
      rating: 5,
    },
    {
      id: 9,
      text: "Professional and efficient service.",
      author: "Happy Customer",
      rating: 5,
    },
    {
      id: 10,
      text: "Top-notch service from start to finish.",
      author: "Satisfied Client",
      rating: 5,
    },
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [newReview, setNewReview] = useState({
    text: "",
    author: "",
    rating: 0,
  });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.text && newReview.author && newReview.rating) {
      setTestimonials((prev) => [
        ...prev,
        { ...newReview, id: prev.length + 1 },
      ]);
      setNewReview({ text: "", author: "", rating: 0 });
      Swal.fire({
        title: t("testimonials.thankYou"),
        text: t("testimonials.reviewSubmitted"),
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        {t("testimonials.heading")}
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center mt-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {t("testimonials.testimonial")}
            </h3>
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
            <p className="text-gray-700 mt-4">- {testimonial.author}</p>
            <div className="flex justify-center mt-2">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <FaStar key={index} className="text-yellow-500" size={24} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center mt-8">
        <h3 className="text-2xl font-semibold mb-4">
          {t("testimonials.addReview")}
        </h3>
        <form onSubmit={handleReviewSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-bold" htmlFor="author">
              {t("testimonials.yourName")}
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder={t("testimonials.yourName")}
              value={newReview.author}
              onChange={handleReviewChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="text">
              {t("testimonials.yourReview")}
            </label>
            <textarea
              id="text"
              name="text"
              value={newReview.text}
              placeholder={t("testimonials.yourReview")}
              onChange={handleReviewChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-bold">
              {t("testimonials.rating")}
            </label>
            <div className="flex justify-center">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={`cursor-pointer ${
                    index < newReview.rating
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => handleStarClick(index + 1)}
                  size={32}
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            {t("testimonials.submitReview")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
