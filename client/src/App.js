import React from "react";
import Homepage from "./navbar/components/home/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./navbar/components/about/About";
import Services from "./navbar/components/services/Services";
import Contact from "./navbar/components/contact/Contact";
import BlogPost from "./navbar/components/blog/BlogPost";
import BlogDetails from "./navbar/components/blog/BlogDetails";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/services" element={<Services />} />{" "}
          <Route path="/blog/post" element={<BlogPost />} />{" "}
          <Route path="/blog/details" element={<BlogDetails />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
