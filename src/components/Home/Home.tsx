import HeroSection from "../../subComponents/HeroSection";
import TopVillas from "../../subComponents/TopVillas";
import Regions from "../../subComponents/Regions";
import OurSpecialities from "../../subComponents/OurSpecialities";
import Host from "../../subComponents/Host";
import About from "../../subComponents/About";
import Contact from "../../subComponents/Contact";

const Home = () => {
  return (
    <>
      <article className="page">
        {/* Tailwind test - this should show a blue background if Tailwind is working */}
        <div className="bg-blue-500 text-white p-4 m-4 rounded-lg">
          <p>Tailwind CSS is working! This is a test element.</p>
        </div>
        <HeroSection />
        <TopVillas />
        <Regions />
        <OurSpecialities />
        <Host />
        <About />
        <Contact />
      </article>
    </>
  );
};

export default Home;
