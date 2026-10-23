
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import DoctorProfile from "../pages/DoctorProfile";
import Services from "../pages/Services";
import Facilities from "../pages/Facilities";
import Appointment from "../pages/Appointment";
import Gallery from "../pages/Gallery";
import Reviews from "../pages/Reviews";
import Timing from "../pages/Timing";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Doctor page: support both URLs */}
      <Route path="/doctor" element={<DoctorProfile />} />
      <Route path="/doctor-profile" element={<DoctorProfile />} />

      <Route path="/services" element={<Services />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/timing" element={<Timing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
