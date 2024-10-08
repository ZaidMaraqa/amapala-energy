import "@fontsource/lexend";

import { Button, Flex, Image, Text } from "@chakra-ui/react";

import { ASSETS } from "@/assets";
import Link from "next/link";
import { MdOutlineArrowRight } from "react-icons/md";
import { PAGES } from "@/config";

const AboutSection = () => {
  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      py={["1.5rem", "2.5rem", "3.5rem", "5.5rem"]}
      gap={"5rem"}
      px={".5rem"}
    >
      <Flex flex={2}>
        <Image
          src={ASSETS.latinAmerica}
          w={"100%"}
          objectFit={"contain"}
          alt="solarPanels"
          display={["none", "none", "flex", "flex"]}
        />
      </Flex>
      <Flex
        direction={"column"}
        gap={"1.5rem"}
        alignItems={"start"}
        justifyContent={"space-between"}
        flex={3}
      >
        <Text
          fontFamily="'Lexend', sans-serif"
          fontWeight={500}
          fontSize={"1.5rem"}
          color={"#202122"}
        >
          About Us
        </Text>
        <Text
          color={"primeBlue"}
          fontWeight={500}
          fontSize={["2rem", "1.5rem", "2.3rem", "3rem"]}
        >
          From oil and gas,{" "}
          <Text as={"span"} color={"black"}>
            to mining
          </Text>
          ,{" "}
          <Text as={"span"} color={"black"}>
            clean hydrogen
          </Text>{" "}
          and{" "}
          <Text as={"span"} color={"black"}>
            renewables
          </Text>
          , we deliver{" "}
          <Text as={"span"} color={"black"}>
            unparalleled
          </Text>{" "}
          expertise to help our clients and viewers navigate{" "}
          <Text as={"span"} color={"black"}>
            the future
          </Text>{" "}
          and{" "}
          <Text as={"span"} color={"black"}>
            ever-changing
          </Text>{" "}
          dynamics of the entire
          <Text as={"span"} color={"black"}>
            {" "}
            Latin American
          </Text>{" "}
          energy and natural resource sector.
        </Text>
        <Link href={PAGES.ABOUT_US_CONSULTING}>
          <Button
            border={"1px solid"}
            borderColor={"primeBlue"}
            borderRadius={0}
            px={"2rem"}
            py={"1.5rem"}
            display={"flex"}
            alignItems={"center"}
            gap={"1rem"}
            _hover={{ bg: "primeBlue" }}
            role="group"
          >
            <Text
              color={"black"}
              fontWeight={700}
              _groupHover={{ color: "white" }}
            >
              Our Services
            </Text>
            <Flex
              border={"1px solid"}
              borderRadius={"50%"}
              h={"1.5em"}
              w={"1.5rem"}
              justifyContent={"center"}
              alignItems={"center"}
              borderColor={"black"}
              color="black"
              _groupHover={{ color: "white", borderColor: "white" }}
            >
              <MdOutlineArrowRight fontSize={"1.25rem"} />
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default AboutSection;
