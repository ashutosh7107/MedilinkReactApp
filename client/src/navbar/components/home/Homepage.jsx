import MedicalServices from "./sections/MedicalServices"; // Import the MedicalServices component
import LaboratoryPartners from "./sections/LaboratoryPartners";
import Footer from "../../../footer/Footer";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import SecondBannerSection from "./sections/SecondBannerSection";
import ThirdBannerImageSection from "./sections/ThirdBannerImageSection";
import { useServiceData } from "../../../context/ServiceDataContext";
import { useBookAppointmentData } from "../../../context/BookAppointmentContext"; // Import the BookAppointmentContext

const Homepage = () => {
  const { serviceData, loading } = useServiceData();
  const { appointmentData } = useBookAppointmentData();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* Hero Section */}
      <HeroSection appointmentData={appointmentData} />

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
