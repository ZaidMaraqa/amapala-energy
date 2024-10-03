import { getCountryBackgroundColor } from "@/utils";
import { Box, Flex, Text } from "@chakra-ui/react";
import Flag from "react-world-flags";

interface CardHeaderProps {
  category: string;
  readTime: number;
  country: string;
  country_code: string;
}

const CardHeader = ({
  category,
  readTime,
  country,
  country_code,
}: CardHeaderProps) => {
  return (
    <Flex
      direction={"row"}
      fontSize={"1rem"}
      lineHeight={"24px"}
      fontWeight={600}
      gap={".5rem"}
      alignItems={"center"}
    >
      <Flex
        alignItems={"center"}
        gap={".5rem"}
        bg={getCountryBackgroundColor(country_code)}
        p={".25rem"}
        borderRadius={".25rem"}
      >
        <Flag
          code={country_code}
          style={{ width: "18px", height: "12px" }}
          alt={`${country} flag`}
        />
        <Text
          fontWeight={600}
          fontSize={[".75rem", "1rem", "1rem", "1rem"]}
          color={"white"}
        >
          {country}
        </Text>
      </Flex>
      <Box
        bg={"primeBlue"}
        borderRadius={".3125rem"}
        py={".25rem"}
        px={".5rem"}
      >
        <Text color={"white"}>{category}</Text>
      </Box>
      <Text color={"black"}>{readTime}</Text>
    </Flex>
  );
};

export default CardHeader;
