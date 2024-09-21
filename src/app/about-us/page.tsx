import { Box, Container, Flex, Text } from "@chakra-ui/react";

import AboutBreadCrumb from "@/components/aboutUs/breadcrumb";
import ConsultingSection from "@/components/aboutUs/consultingSection";
import Footer from "@/components/footer";
import MissionStatement from "@/components/aboutUs/missionStatement";
import NavBar from "@/components/navbar";
import NewsLetter from "@/components/home/newsLetter";
import { aboutUsSections } from "../../../public/constants";

const AboutUs = () => {
    return (
        <Container maxW={'140rem'} px={0}>
        <Flex direction="column" h="100vh" >
            <NavBar />
            <Flex flex={1} mt={'3rem'}  direction="column" gap="2.5rem">
                <Flex px={'1.5rem'} direction={'column'} gap={'1.5rem'}>
                <AboutBreadCrumb />
                <Text fontWeight={600} fontSize="4.5rem">A Little About Us</Text>
                </Flex>
                {aboutUsSections.map((section, index) => (
                        <>
                            <Box key={index} mb={8}>
                                <MissionStatement 
                                    title={section.title} 
                                    content={section.content} 
                                    image={section.image} 
                                    right={section.right} 
                                />
                            </Box>
                            {index === 1 && (
                                <div id="consultingSection" key="consultingSection">
                                    <ConsultingSection />
                                </div>
                            )}
                        </>
                    ))}
            </Flex>
            <NewsLetter />
            <Footer />
        </Flex>
        </Container>
    );
};

export default AboutUs;
