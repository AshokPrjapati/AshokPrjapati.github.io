import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
