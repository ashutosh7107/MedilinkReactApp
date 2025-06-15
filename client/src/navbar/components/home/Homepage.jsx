import Topbar from "../../../topbar/Topbar";
import Navbar from "../../Navbar";
import MedicalServices from "./sections/MedicalServices"; // Import the MedicalServices component
import LaboratoryPartners from "./sections/LaboratoryPartners";
import Footer from "../../../footer/Footer";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import serviceData from "../../../data/serviceData";
import {
  faTooth,
  faCapsules,
  faHeartPulse,
  faEye,
  faBrain,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";
import SecondBannerSection from "./sections/SecondBannerSection";
import ThirdBannerImageSection from "./sections/ThirdBannerImageSection";

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* MedicalServices Section */}
      <MedicalServices services={serviceData} />

      {/* Second Banner Section */}
      <SecondBannerSection />

      {/* Third Banner Image Section */}
      <ThirdBannerImageSection />

      {/* Laboratory Partners Section */}
      {/* <LaboratoryPartners /> */}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Homepage;
