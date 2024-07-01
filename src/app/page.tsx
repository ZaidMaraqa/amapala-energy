'use client'
import { ASSETS } from "@/assets";
import CountryProfileCard from "@/components/countryProfileCard";
import Footer from "@/components/footer";
import HomeCards from "@/components/goToCards";
import NavBar from "@/components/navbar";
import SomeCard from "@/components/somCard";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex direction={'column'} h={'100vh'} w={'100vw'} overflow={'auto'} gap={'8rem'}>
      <Box>
        <NavBar />
        <Image src={ASSETS.placeholder} w={'100vw'} />
      </Box>
      <Flex direction={'row'} px={'2rem'} py={'2rem'} gap={'1rem'}>
        <Flex flex={3} justifyContent={'center'} alignItems={'center'} p={'1rem'}>
          <Text fontWeight={700} fontSize={'3.5rem'} lineHeight={'4.2rem'} color={'black'}>
            Empowering Latin America to lead global change
          </Text>
        </Flex>
        <Flex direction={'column'} gap={'1.5rem'} flex={2}>
          <Text fontWeight={400} fontSize={'1.125rem'} lineHeight={'1.9875rem'} color={'black'}>
            AMAPALA Energy Insights is dedicated to positioning Latin America at the forefront of positive global change. Through our comprehensive coverage and analysis of the region's energy sector, we aim to empower individuals and companies to navigate and capitalize on the abundant opportunities in Latin America.
          </Text>
          <Flex direction={'row'} gap={'.5rem'}>
            <Button bg={'black'} color={'white'} borderRadius={0} px={'1.5rem'} py={'.75rem'}>
              <Text>Learn more</Text>
            </Button>
            <Button border={'.0625rem solid black'} bg={'white'} color={'black'} borderRadius={0} px={'1.5rem'} py={'.75rem'}>
              <Text>Contact us</Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={'4rem'} mt={'4rem'}>
        <Flex gap={'1rem'} direction={'column'}>
          <Heading fontWeight={700} fontSize={'3rem'} lineHeight={'3.6rem'} textAlign={'center'}>Stay Informed, Stay Ahead</Heading>
          <Text fontWeight={400} fontSize={'1.125rem'} lineHeight={'.2044rem'} textAlign={'center'}>Get the latest updates and insights on the Latin American energy sector</Text>
        </Flex>
        <Flex direction={'row'} gap={'1.5rem'} px={'2rem'}>
          <Flex direction={'column'} flex={1} gap={'1rem'}>
            <Flex flex={3}>
              <CountryProfileCard
                expertiseText="Expertise"
                headingText="In-Depth Country Profiles and commentary"
                descriptionText="Gain a deep understanding of the Latin American energy landscape with our expert country profile analysis."
                buttonText="Learn More"
                imageUrl={ASSETS.placeholder}
              />
            </Flex>
            <Flex flex={1}>
              <HomeCards />
            </Flex>
          </Flex>
          <Flex flex={1} direction={'column'} gap={'1rem'}>
            <Flex flex={2}>
              <SomeCard
              expertiseText="Entertainment"
              headingText="Enjoy our Podcasts"
              descriptionText="On the run? listen to our podcasts covering a wide variety of topics."
              buttonText="Learn More"
              imageUrl={ASSETS.placeholder}
               />
            </Flex>
            <Flex flex={3}>
              <CountryProfileCard
                expertiseText="Discover"
                headingText="Explore our Services"
                descriptionText="Find out how AMAPALA can help you navigate the Latin American energy sector."
                buttonText="Learn More"
                imageUrl={ASSETS.placeholder}
              />
            </Flex>

          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Home;
