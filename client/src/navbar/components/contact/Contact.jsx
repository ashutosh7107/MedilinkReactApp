import Footer from "../../../footer/Footer";
import MedicalServices from "../home/sections/MedicalServices";
import SecondBannerSection from "../home/sections/SecondBannerSection";
import ThirdBannerImageSection from "../home/sections/ThirdBannerImageSection";
import serviceData from "../../../data/serviceData";
import PageBanner from "../PageBanner";
import ContactBoxes from "./ContactBoxes";
import ContactForm from "./ContactForm";

const Contact = () => {
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
