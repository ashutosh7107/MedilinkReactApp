import Topbar from "../../../topbar/Topbar";
import Navbar from "../../Navbar";
import Footer from "../../../footer/Footer";
import MedicalServices from "../home/sections/MedicalServices";
import SecondBannerSection from "../home/sections/SecondBannerSection";
import ThirdBannerImageSection from "../home/sections/ThirdBannerImageSection";
import serviceData from "../../../data/serviceData";
import PageBanner from "../PageBanner";

const Services = () => {
  return (
    <div>
      {/* Blue top bar */}
      <Topbar />

      {/* Top Navbar */}
      <Navbar />

      {/* ServicesBanner Section */}
      <PageBanner title="Our Services" description="Services" />

      {/* MedicalServices Section */}
      <MedicalServices services={serviceData} />

      {/* Second Banner Section */}
      <SecondBannerSection />

      {/* Third Banner Image Section */}
      <ThirdBannerImageSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Services;
