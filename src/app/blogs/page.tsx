import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Flex
} from "@chakra-ui/react";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import dynamic from 'next/dynamic';

const TopBlogList = dynamic(() => import('@/components/blogs/TopBlogsList'), { ssr: false });
const BlogList = dynamic(() => import('@/components/blogs/blogsList'), { ssr: false });

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
      <TopBlogList />
      </Container>
      <Box bg="white" py={10}>
        <Container maxW={"6xl"}>
          <Stack spacing={4} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Discover the Latest Insights</Heading>
            <Text color={"gray.600"} fontSize={"lg"} mb={10}>
              Stay informed with our in-depth analysis and exclusive interviews
            </Text>
          </Stack>
          <BlogList />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Blogs;
