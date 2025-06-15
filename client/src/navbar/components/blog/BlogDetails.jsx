import Footer from "../../../footer/Footer";
import MedicalServices from "../home/sections/MedicalServices";
import SecondBannerSection from "../home/sections/SecondBannerSection";
import ThirdBannerImageSection from "../home/sections/ThirdBannerImageSection";
import PageBanner from "../../components/PageBanner";
import { useServiceData } from "../../../context/ServiceDataContext";

const BlogPost = () => {
  const { serviceData, loading } = useServiceData();

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {/* AboutBanner Section */}
      <PageBanner title="Blog Details" description="Blog Details" />

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

export default BlogPost;
