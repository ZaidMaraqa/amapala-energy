'use client'
import { ASSETS } from "@/assets";
import NavBar from "@/components/navbar";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex direction={'column'} h={'100vh'} w={'100vw'} overflow={'auto'} gap={'2rem'}>
      <Box>
        <NavBar />
        <Image src={ASSETS.placeholder} />
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
    </Flex>
  );
}

export default Home;
