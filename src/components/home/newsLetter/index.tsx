import LinkedInSection from "@/components/linkedinSection";
import { Flex, Text } from "@chakra-ui/react";
import NewsletterForm from "./newsLetterForm";
import "@fontsource/lexend";

const NewsLetter = () => {
  return (
    <Flex
      direction={"column"}
      bg={"primeBlue"}
      justifyContent={"center"}
      px={["1rem", "3rem", "4rem", "5rem"]}
      py={["4rem", "3rem", "4rem", "7rem"]}
    >
      <Flex direction={"column"} gap={"1.5rem"} alignItems={"start"}>
        <Text
          color={"white"}
          fontWeight={700}
          fontSize={["2rem", "2.5rem", "3rem", "4rem"]}
          lineHeight={["2.5rem", "3rem", "3rem", "4.5rem"]}
          letterSpacing={"-3%"}
        >
          Subscribe to FAULMATAs monthly Trending Energy Newsletter
        </Text>
        <Text
          fontFamily="'Lexend', sans-serif"
          color={"white"}
          fontWeight={500}
        >
          FAULMATA little own crystal ball. Most important news, future sector
          trends, developments and opportunities direct to your inbox once a
          month.
        </Text>
        <NewsletterForm />
        <LinkedInSection />
      </Flex>
    </Flex>
  );
};

export default NewsLetter;
