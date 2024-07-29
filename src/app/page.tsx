import AboutSection from "@/components/home/aboutSection";
import HeroSection from "@/components/home/heroSection";
import NewsSection from "@/components/home/newsSection";
import ServicesSection from "@/components/home/servicesSection.tsx";
import NavBar from "@/components/navbar";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex direction={'column'} w={'100vw'} overflow={'auto'}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <NewsSection />
    </Flex>
  );
}

export default Home;
