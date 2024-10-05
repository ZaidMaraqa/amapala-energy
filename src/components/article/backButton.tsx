'use client'
import { IconButton, Flex, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const { back } = useRouter();
  return (
    <Flex alignItems={"center"} _hover={{ opacity: 0.7 }}>
      <IconButton
        icon={<ArrowBackIcon />}
        aria-label="Go Back"
        _hover={"none"}
        variant="ghost"
        fontSize="1.5rem"
        onClick={() => back()}
      />
      <Text
        fontFamily="'Lexend', sans-serif"
        fontSize={"1.25rem"}
        fontWeight={500}
        cursor={"pointer"}
        onClick={() => back()}
      >
        Back
      </Text>
    </Flex>
  );
};

export default BackButton;
