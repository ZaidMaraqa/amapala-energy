"use client";
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Input,
  InputGroup,
  Image,
} from "@chakra-ui/react";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import BlogCard from "@/components/blogCard";

const Blogs = () => {
  return (
    <>
      <NavBar />
      <Box bg="white" py={10}>
        <Container maxW={"6xl"}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
          >
            <Stack spacing={4} textAlign={"left"} mb={{ base: 4, md: 0 }}>
              <Heading fontSize={"3xl"}>
                Discover the Latest Energy Trends
              </Heading>
              <Text color={"gray.600"} fontSize={"lg"}>
                Stay informed with our insightful blog posts.
              </Text>
            </Stack>
            <Button
              colorScheme="black"
              variant="outline"
              alignSelf={{ base: "flex-start", md: "center" }}
            >
              View All
            </Button>
          </Flex>
        </Container>
      </Box>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <BlogCard
            image="https://via.placeholder.com/300"
            category="Category"
            readTime="5 min read"
            title="The Future of Renewable Energy"
            description="Learn about the latest advancements in renewable energy sources."
            link="#"
          />
          <BlogCard
            image="https://via.placeholder.com/300"
            category="Category"
            readTime="5 min read"
            title="The Impact of Oil Prices on Latin America"
            description="Explore the effects of fluctuating oil prices on the Latin American economy."
            link="#"
          />
          <BlogCard
            image="https://via.placeholder.com/300"
            category="Category"
            readTime="5 min read"
            title="The Future of Lithium Mining in South America"
            description="Discover the potential of lithium mining projects in South America."
            link="#"
          />
        </SimpleGrid>
      </Container>
      <Box bg="white" py={10}>
        <Container maxW={"6xl"}>
          <Stack spacing={4} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Discover the Latest Insights</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>
              Stay informed with our in-depth analysis and exclusive interviews
            </Text>
            {/* <Stack direction="row" spacing={4} justify="center">
              <Button colorScheme="black" variant="outline">
                View All
              </Button>
              <Button colorScheme="black" variant="outline">
                Featured
              </Button>
              <Button colorScheme="black" variant="outline">
                Popular
              </Button>
              <Button colorScheme="black" variant="outline">
                Interviews
              </Button>
              <Button colorScheme="black" variant="outline">
                Analysis
              </Button>
            </Stack> */}
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
            <BlogCard
              image="https://via.placeholder.com/300"
              category="Category"
              readTime="5 min read"
              title="The Future of Renewable Energy in Latin America"
              description="Explore the potential of renewable energy sources in Latin America."
              link="#"
            />
            <BlogCard
              image="https://via.placeholder.com/300"
              category="Renewables"
              readTime="7 min read"
              title="The Impact of Oil Prices on Latin American Economies"
              description="Learn how fluctuating oil prices affect the economies of Latin American countries."
              link="#"
            />
            <BlogCard
              image="https://via.placeholder.com/300"
              category="Oil"
              readTime="6 min read"
              title="The Role of Natural Gas in Latin America's Energy Transition"
              description="Discover how natural gas is shaping the energy transition in Latin America."
              link="#"
            />
            <BlogCard
              image="https://via.placeholder.com/300"
              category="Natural Gas"
              readTime="8 min read"
              title="The Potential of Lithium Mining in Latin America"
              description="Uncover the opportunities and challenges of lithium mining in Latin America."
              link="#"
            />
            <BlogCard
              image="https://via.placeholder.com/300"
              category="Lithium"
              readTime="5 min read"
              title="The Future of Solar Energy in Latin America"
              description="Learn about the growth potential of solar energy in Latin America."
              link="#"
            />
            <BlogCard
              image="https://via.placeholder.com/300"
              category="Solar"
              readTime="7 min read"
              title="The Challenges of Wind Power Development in Latin America"
              description="Explore the obstacles facing wind power development in Latin America."
              link="#"
            />
          </SimpleGrid>
        </Container>
      </Box>
      <Box bg="white" py={10}>
        <Container maxW={"6xl"}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4} textAlign={"left"} justify="center">
              <Heading fontSize={"3xl"}>
                Stay Informed with Our Newsletter
              </Heading>
              <Text color={"gray.600"} fontSize={"lg"}>
                Get the latest updates, insights, and analyses in the Latin
                American energy sector.
              </Text>
              <Stack direction="row" spacing={0} align="center">
                <InputGroup size="lg" width="70%">
                  <Input
                    placeholder="Enter your email"
                    border=".0625rem solid black"
                    color="black"
                    _placeholder={{ color: "black" }}
                    _focus={{ borderColor: "black" }}
                    _hover={{ borderColor: "black" }}
                  />
                </InputGroup>
                <Button color="white" size="lg" bg="black" ml={2}>
                  Sign Up
                </Button>
              </Stack>
              <Text fontSize="sm" color="gray.500">
                By clicking Sign Up, you confirm that you agree with our Terms
                and Conditions.
              </Text>
            </Stack>
            <Box>
              <Image
                src="https://via.placeholder.com/600"
                alt="Newsletter Image"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Blogs;
