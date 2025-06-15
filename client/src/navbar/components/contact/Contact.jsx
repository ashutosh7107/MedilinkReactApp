import Footer from "../../../footer/Footer";
import MedicalServices from "../home/sections/MedicalServices";
import SecondBannerSection from "../home/sections/SecondBannerSection";
import ThirdBannerImageSection from "../home/sections/ThirdBannerImageSection";
import PageBanner from "../PageBanner";
import ContactBoxes from "./ContactBoxes";
import ContactForm from "./ContactForm";
import { useServiceData } from "../../../context/ServiceDataContext";

const Contact = () => {
  const { serviceData, loading } = useServiceData();

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {/* ServicesBanner Section */}
      <PageBanner title="Contact Us" description="Contact" />

      <ContactBoxes />

      <ContactForm />

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

export default Contact;
