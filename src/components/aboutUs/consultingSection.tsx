'use client'

import "@fontsource/lexend";

import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { MdInsertChart, MdOutlineBusinessCenter, MdOutlineEco, MdOutlineEngineering } from "react-icons/md";

import ConsultingCard from "./consultingCard";

const ConsultingSection = () => {
  const consultingServices = [
    {
      icon: MdInsertChart,
      title: "Market Analysis",
      description: "In-depth analysis of energy markets in Latin America to guide your investment decisions."
    },
    {
      icon: MdOutlineBusinessCenter,
      title: "Strategic Planning",
      description: "Tailored strategies to ensure long-term success in the evolving energy landscape."
    },
    {
      icon: MdOutlineEco,
      title: "Sustainability Consulting",
      description: "Helping businesses adopt sustainable practices and meet environmental goals."
    },
    {
      icon: MdOutlineEngineering,
      title: "Technical Advisory",
      description: "Expert advice on energy projects, from engineering to implementation."
    }
  ];

  return (
    <Flex direction="column" py="6rem" px="3rem" gap="5rem" bg="primeGray">
      <Flex direction="column" gap="1rem">
        <Heading fontWeight={600} fontSize="4.5rem">
          Our Main Offerings
        </Heading>
        <Text fontWeight={500} fontSize="1.5rem" fontFamily="'Lexend', sans-serif" color="#202122">
          Here at AMAPALA Energy Insights we want to be your long-term strategic partner, to help you sustainably and equitably contribute to the Latin American energy transition.
        </Text>
        <Text fontWeight={500} fontSize="1.5rem" fontFamily="'Lexend', sans-serif" color="#202122">
          We Offer a multitude of consulting services such as:
        </Text>
      </Flex>

      <Grid templateColumns="repeat(auto-fit, minmax(500px, 1fr))" gap={10}>
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
