import React, { useState } from "react";
import Homepage from "./navbar/components/home/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./navbar/components/about/About";
import Services from "./navbar/components/services/Services";
import Contact from "./navbar/components/contact/Contact";
import BlogPost from "./navbar/components/blog/BlogPost";
import BlogDetails from "./navbar/components/blog/BlogDetails";
import Navbar from "./navbar/Navbar";
import Topbar from "./topbar/Topbar";
import { ServiceDataProvider } from "./context/ServiceDataContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <ServiceDataProvider>
      <Router>
        <Topbar loggedInUser={loggedInUser} />
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route path="/about" element={<About />} />{" "}
            <Route path="/services" element={<Services />} />{" "}
            <Route path="/blog/post" element={<BlogPost />} />{" "}
            <Route path="/blog/details" element={<BlogDetails />} />{" "}
            <Route path="/contact" element={<Contact />} />{" "}
          </Routes>
        </div>
      </Router>
    </ServiceDataProvider>
  );
}

export default App;
