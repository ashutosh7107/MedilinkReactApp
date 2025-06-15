import Footer from "../../../footer/Footer";
import MedicalServices from "../home/sections/MedicalServices";
import SecondBannerSection from "../home/sections/SecondBannerSection";
import ThirdBannerImageSection from "../home/sections/ThirdBannerImageSection";
import PageBanner from "../PageBanner";
import { useServiceData } from "../../../context/ServiceDataContext";

const About = () => {
  const { serviceData, loading } = useServiceData();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* AboutBanner Section */}
      <PageBanner title="About Us" description="About" />

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

export default About;
