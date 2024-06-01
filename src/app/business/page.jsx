import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HeroCards from "../components/HeroCards";
import ScheduleSection from "../components/ScheduleSection";
import CoverageSection from "../components/CoverageSection";
import BusinessSection from "../components/BusinessPromotionSection";
import FeaturesSection from "../components/FeaturesSection";
import DownloadSection from "../components/DownloadSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <>
    <div className="bgClr">
    <Navbar/>
    <HeroSection/>
    </div>
    <HeroCards/>
    <ScheduleSection/>
    <CoverageSection/>
    <BusinessSection/>
    <FeaturesSection/>
    <DownloadSection/>
    <FooterSection/>
    </>
  )
}
