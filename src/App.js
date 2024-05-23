// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import HomePage from "./Page/HomePage";
import i18n from './i18n';
import "./App.css";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const MyWork = lazy(() => import("./components/MyWork/MyWork"));
const Location = lazy(() => import("./components/Location/Location"));
const Services = lazy(() => import("./components/Services/Services"));
const Testimonials = lazy(() =>
  import("./components/Testimonials/Testimonials")
);
const Contact = lazy(() => import("./components/Contact/Contact"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* <LanguageSwitcher /> */}
          <main className="flex-grow">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mywork" element={<MyWork />} />
                <Route path="/location" element={<Location />} />
                <Route path="/services" element={<Services />} />
                <Route path="/review" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
