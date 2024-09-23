'use client'

import "@fontsource/lexend";

import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { MdInsertChart, MdOutlineBusinessCenter } from "react-icons/md";

import ConsultingCard from "./consultingCard";
import { PiShareNetwork } from "react-icons/pi";
import { IoAnalyticsOutline } from "react-icons/io5";

const ConsultingSection = () => {

  const consultingServices = [
    {
      icon: MdInsertChart,
      title: "Specialized Reports",
      description: "Request country and/ or sector specific reports tailored to the needs of your business or person."
    },
    {
      icon: MdOutlineBusinessCenter,
      title: "Project management",
      description: "Trust us to help you lead your project from start to finish, using our expertise and network to roll out and perfect your strategy, and ultimately achieve your business objectives."
    },
    {
      icon: IoAnalyticsOutline,
      title: "Investment Analysis",
      description: "Get in touch to solicit bespoke insights into relevant investment climates, opportunities and risks in Latin America's energy and natural resource sector."
    },
    {
      icon: PiShareNetwork,
      title: "Networking",
      description: "Allow us to use our platform to connect you to the relevant market players and actors across Latin America and around the world that will help you achieve your business and project goals in the region."
    }
  ];

  return (
    <Flex direction="column" py="4rem" px="1.5rem" gap="5rem" bg="primeGray">
      <Flex direction="column" gap="3rem">
        <Heading fontWeight={600} fontSize="4.5rem">
          Our Services
        </Heading>
        <Flex direction={'column'} gap={'1rem'}>
          <Text fontWeight={500} fontSize="1em" fontFamily="'Lexend', sans-serif" color="#202122">
            Here at FAULMATA Energy Insights we aspire to be your long-term strategic partner, to help you sustainably and equitably contribute to Latin America role in the global energy transition. Whatever your idea, goal or project, FAULMATA will help you make it happen.        </Text>
          <Text fontWeight={500} fontSize="1rem" fontFamily="'Lexend', sans-serif" color="#202122">
            Therefore, alongside our open-to-all and free-to-view media market insights, read on below to learn about the specialized consulting services we offer…         
            </Text>
        </Flex>
      </Flex>

      <Grid templateColumns="repeat(auto-fit, minmax(500px, 1fr))" gap={50} px={10}>
        {consultingServices.map((service, index) => (
          <GridItem key={index}>
            <ConsultingCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default ConsultingSection;
