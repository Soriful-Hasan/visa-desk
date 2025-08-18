import HeroSection from "./components/Hero";
import VisaServices from "./visa-services/VisaServices";

export default function Home() {
  return (
    <div className="">
      
      <section>
        <HeroSection/>
      </section>
      <VisaServices/>
    </div>
  );
}
