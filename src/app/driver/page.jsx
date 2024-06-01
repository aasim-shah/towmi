import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/drivePage/HeroSection";
import TruckOweners from "../components/drivePage/TruckOwenersSection";
import AmbulanceOwner from "../components/drivePage/AmbulanceOwner";
import UserFriendlyApp from "../components/drivePage/UserFriendAppSection";
import BusinessSection from "../components/BusinessPromotionSection";
import DownloadSection from "../components/DownloadSection";
import FooterSection from "../components/FooterSection";
import DriverCardsSection from "../components/drivePage/CardsSection";


export default function Home() {
  return (
    <>
    <div className="bgClr">
    <Navbar/>
    <HeroSection/>
    </div>
    <TruckOweners/>
    <AmbulanceOwner/>
    <BusinessSection/>
    <DriverCardsSection/>
    <UserFriendlyApp/>
    <DownloadSection/>
    <FooterSection/>
    
    </>
  )
}
