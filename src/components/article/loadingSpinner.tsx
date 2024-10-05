import { Flex, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Flex h={"100vh"} w={"100vw"} justifyContent={"center"} alignItems={"center"}>
      <Spinner
        thickness="0.25rem"
        speed="0.55s"
        emptyColor="gray.200"
        color="primeBlue"
        size="xl"
      />
    </Flex>
  );
};

export default LoadingSpinner;
