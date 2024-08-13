import AboutSection from "@/components/home/aboutSection";
import { Flex } from "@chakra-ui/react";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/heroSection";
import NavBar from "@/components/navbar";
import NewsLetter from "@/components/home/newsLetter";
import NewsSection from "@/components/home/newsSection";
import ServicesSection from "@/components/home/servicesSection.tsx";

const Home = () => {
  return (
    <Flex direction={'column'} w={'100vw'} overflow={'auto'}>
      <NavBar />
      <div id="heroSection">
        <HeroSection />
      </div>
      <div id="aboutSection">
        <AboutSection />
      </div>
      <div id="servicesSection">
        <ServicesSection />
      </div>
      <div id="insightsSection">
        <NewsSection />
      </div>
      <NewsLetter />
      <Footer />
    </Flex>
  );
}

export default Home;
