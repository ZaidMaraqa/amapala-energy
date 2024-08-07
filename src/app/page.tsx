import ServicesSection from "@/components/home/servicesSection.tsx";
import AboutSection from "@/components/home/aboutSection";
import HeroSection from "@/components/home/heroSection";
import NewsSection from "@/components/home/newsSection";
import NewsLetter from "@/components/home/newsLetter";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { Flex } from "@chakra-ui/react";
import posthog from "posthog-js";

const Home = () => {
  // console.log(posthog)
  // posthog.capture('my event', { property: 'value' })
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
