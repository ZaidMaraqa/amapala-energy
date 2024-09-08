import { Box, Flex, Text } from "@chakra-ui/react";

import AboutBreadCrumb from "@/components/aboutUs/breadcrumb";
import ConsultingSection from "@/components/aboutUs/consultingSection";
import Footer from "@/components/footer";
import MissionStatement from "@/components/aboutUs/missionStatement";
import NavBar from "@/components/navbar";
import NewsLetter from "@/components/home/newsLetter";
import { aboutUsSections } from "../../../public/constants";

const AboutUs = () => {
    return (
        <Flex direction="column" h="100vh">
            <NavBar />
            <Flex flex={1} p="2rem" direction="column" gap="1.5rem">
                <AboutBreadCrumb />
                <Text fontWeight={600} fontSize="4.5rem">A Little About Us</Text>
                {aboutUsSections.map((section, index) => (
                    <Box key={index} mb={8}>
                        <MissionStatement title={section.title} content={section.content} image={section.image} />
                    </Box>
                ))}
            </Flex>
            <div id="consultingSection">
                <ConsultingSection />
            </div>
            <NewsLetter />
            <Footer />
        </Flex>
    );
};

export default AboutUs;
