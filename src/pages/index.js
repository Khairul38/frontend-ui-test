import Footer from "../components/Footer/Footer";
import CitesSection from "../components/Home/CitesSection/CitesSection";
import DestinationsSection from "../components/Home/DestinationsSection/DestinationsSection";
import ExploreSection from "../components/Home/ExploreSection/ExploreSection";
import HeaderSection from "../components/Home/HeaderSection/HeaderSection";
import OfferSection from "../components/Home/OfferSection/OfferSection";
import PassionSection from "../components/Home/PassionSection/PassionSection";
import SearchSection from "../components/Home/SearchSection/SearchSection";
import TourSection from "../components/Home/TourSection/TourSection";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <SearchSection />
      <DestinationsSection />
      <TourSection />
      <ExploreSection />
      <CitesSection />
      <PassionSection />
      <OfferSection />
      <Footer />
    </div>
  );
}
